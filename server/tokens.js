const JWT = require('jsonwebtoken');
const dbConfig = require('./config');

const createToken = auth => {
  return JWT.sign(
    {
      id: auth.id
    },
    dbConfig.jwt.secret,
    {
      expiresIn: 99999999
    }
  );
};

const generateToken = (req, res, next) => {
  req.token = createToken(req.auth);
  next();
};

const sendToken = (req, res) => {
  res.json({
    status: 'success',
    accessToken: req.token,
    industryType: req.user.industry_type
  });
};

module.exports = { generateToken, sendToken };
