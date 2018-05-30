const passport = require('passport');
const glob = require('glob');
const path = require('path');
const chalk = require('chalk');
const db = require('./sequelize');

module.exports = function() {
  // serialize sessions
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // deserialize sessions
  passport.deserializeUser((id, done) => {
    db.User.findOne({
      where: { id }
    })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
  });

  // initialize strategies
  glob('./strategies/*.js', { cwd: path.resolve('./server') }, (err, strategies) => {
    if (err) {
      console.log(chalk.red('Error occured including strategies'));
      return;
    }

    strategies.forEach((strategyPath) => {
      require(strategyPath)(); // eslint-disable-line
    });
    console.log(chalk.green(`included ${strategies.length} strategy files`));
  });
}
