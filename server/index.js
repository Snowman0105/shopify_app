require('isomorphic-fetch');
require('dotenv').config();

const db = require('./sequelize');

const initPassport = require('./passport');
const generateToken = require('./tokens').generateToken;
const fs = require('fs');
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const path = require('path');
const logger = require('morgan');
const http = require('http');
const https = require('https');
const mysql = require('mysql');

const cors = require('cors');
const glob = require('glob');
const chalk = require('chalk');
const consolidate = require('consolidate');
const passport = require('passport');
const JWT = require('jsonwebtoken');
const jwt = require('express-jwt');
const dbConfig = require('./config');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.config.js');

const ShopifyAPIClient = require('shopify-api-node');
const crypto = require('crypto');
const ShopifyExpress = require('@shopify/shopify-express');
const { MemoryStrategy } = require('@shopify/shopify-express/strategies');
const bodyParser = require('body-parser');
const routers = require('./routers');
const webhookRouters = require('./routers/webhook.route');

const Client = require('node-rest-client').Client;
const client = new Client();

const {
  SHOPIFY_APP_KEY,
  SHOPIFY_APP_HOST,
  SHOPIFY_APP_SECRET,
  SHOPIFY_APP_NGROK_HOST,
  SHOPIFY_PAGE_ACCESS_TOKEN,
  NODE_ENV
} = process.env;

const shopifyConfig = {
  host: SHOPIFY_APP_HOST,
  apiKey: SHOPIFY_APP_KEY,
  secret: SHOPIFY_APP_SECRET,
  scope: [
    'write_orders, write_products, read_products, read_script_tags, write_script_tags'
  ],
  shopStore: new MemoryStrategy(),
  afterAuth(request, response) {
    const { session: { accessToken, shop } } = request;

    db.Event.findAll().then(events => {
      events.forEach(event => {
        registerWebhook(shop, accessToken, {
          topic: event.topic,
          address: `${SHOPIFY_APP_NGROK_HOST}/webhook/${event.webhook}`,
          format: 'json'
        });
      });
    });

    registerAppPageWhitelistedDomain(shop, SHOPIFY_PAGE_ACCESS_TOKEN);
    registerScriptTag(shop, accessToken);
    return response.redirect('/');
  }
};

const registerAppPageWhitelistedDomain = (shopDomain, pageAccessToken) => {
  const params = {
    headers: { 'Content-Type': 'application/json' },
    data: { whitelisted_domains: [shopDomain] }
  };

  client.post(
    `https://graph.facebook.com/v3.0/me/messenger_profile?access_token=${
      pageAccessToken
    }`,
    params,
    (data, res) => {}
  );
};

const registerScriptTag = (shopDomain, accessToken) => {
  const tag = {
    event: 'onload',
    src: `${SHOPIFY_APP_NGROK_HOST}/public/test`
  };
  const shopify = new ShopifyAPIClient({
    shopName: shopDomain,
    accessToken: accessToken
  });

  shopify.scriptTag
    .create(tag)
    .then(response => console.log(response), err => console.log(err));
};

const registerWebhook = (shopDomain, accessToken, webhook) => {
  const shopify = new ShopifyAPIClient({
    shopName: shopDomain,
    accessToken: accessToken
  });
  shopify.webhook
    .create(webhook)
    .then(
      response => console.log(`webhook '${webhook.topic}' created`),
      err =>
        console.log(
          `Error creating webhook '${webhook.topic}'. ${JSON.stringify(
            err.response.body
          )}`
        )
    );
};

const app = express();
app.server = http.createServer(app);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(logger('combined'));
const isDevelopment = NODE_ENV !== 'production';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(
  session({
    store: isDevelopment ? undefined : new RedisStore(),
    secret: SHOPIFY_APP_SECRET,
    resave: true,
    saveUninitialized: false
  })
);

// Run webpack hot reloading in dev
if (isDevelopment) {
  const staticPath = path.resolve(__dirname, '../public/test.js');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    hot: true,
    inline: true,
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use('/public/test', express.static(staticPath));
} else {
  const staticPath = path.resolve(__dirname, '../assets');
  app.use('/assets', express.static(staticPath));
}

// Install
app.get('/install', (req, res) => res.render('install'));

// Create shopify middlewares and router
const shopify = ShopifyExpress(shopifyConfig);

// Mount Shopify Routes
const { routes, middleware } = shopify;
const { withShop, withWebhook } = middleware;

app.use('/shopify', routes);

// Client
app.get('/', withShop({ authBaseUrl: '/shopify' }), function(
  request,
  response
) {
  const { session: { shop, accessToken } } = request;
  response.render('app', {
    title: 'Shopify Node App',
    apiKey: shopifyConfig.apiKey,
    shop: shop
  });
});

app.use('/webhook', webhookRouters);

glob('./routers/*.js', { cwd: path.resolve('./server') }, (err, routes) => {
  if (err) {
    console.log(chalk.red('Error occured including routes'));
    return;
  }

  console.log(chalk.green(`included ${routes.length} route files`));
});

app.use(
  cors({
    exposedHeaders: ['Link']
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  jwt({
    secret: dbConfig.jwt.secret,
    credentialsRequired: false,
    requestProperty: 'auth',
    getToken: req => {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
      ) {
        return req.headers.authorization.split(' ')[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    }
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routers);
initPassport();
// Error Handlers
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(error, request, response, next) {
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};

  response.status(error.status || 500);
  response.render('error');
});

module.exports = app;
