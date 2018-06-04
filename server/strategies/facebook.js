const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const db = require('../sequelize');

module.exports = function () {
  passport.use(new FacebookTokenStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET
  },
  (accessToken, refreshToken, profile, done) => {
    db.User.upsertFBUser(accessToken, refreshToken, profile, (err, user) => {
      return done(err, user);
    });
  }));
}
