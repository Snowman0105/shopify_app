const http = require('http');
const crypto = require('crypto');
const {
  SHOPIFY_APP_KEY,
  SHOPIFY_APP_HOST,
  SHOPIFY_APP_SECRET,
  SHOPIFY_APP_NGROK_HOST,
  NODE_ENV
} = process.env;

exports.addCats = (req, res) => {
  console.log(req);
};
