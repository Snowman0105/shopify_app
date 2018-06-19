#!/usr/bin/env node
require('dotenv').config();
const chalk = require('chalk');
const https = require('https');
const app = require('../server');
const fs = require('fs');
const port = process.env.SHOPIFY_APP_PORT || '3000';
app.set('port', port);

const options = {
  key: fs.readFileSync('/Volumes/Data/localhost.key'),
  cert: fs.readFileSync('/Volumes/Data/localhost.cert'),
  requestCert: false,
  rejectUnauthorized: false
};

const server = https.createServer(options, app);

server.listen(port, err => {
  if (err) {
    return console.log('😫', chalk.red(err));
  }
  console.log(`🚀 Now listening on port ${chalk.green(port)}`);
});
app.get('/assets/styles.css', function(req, res) {
  res.send('/assets/styles.css');
  res.end();
});
