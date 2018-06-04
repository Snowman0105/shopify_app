const express = require('express');
const passport = require('passport');
const userCtrl = require('../controllers/userservices');
const generateToken = require('../tokens').generateToken;
const sendToken = require('../tokens').sendToken;
const router = express.Router();

router.post('/login', passport.authenticate('facebook-token', { session: false }), (req, res, next) => {
  if (!req.user) {
    return res.send(401, 'User Not Authenticated');
  }
  req.auth = {
    id: req.user.id
  };

  next();
}, generateToken, sendToken);
router.post('/saveindustry', userCtrl.saveIndustry);

module.exports = router;
