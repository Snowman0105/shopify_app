module.exports = {
  port: process.env.PORT || 3000,
  db: {
    host: 'localhost',
    name: 'fbmsgdb',
    password: 'root',
    username: 'root'
  },
  jwt: {
    secret: 'shopify-facebook-msg-app'
  }
};
