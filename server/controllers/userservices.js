const db = require('../sequelize');

exports.login = (req, res) => {
  const userInfo = req.body.requestData;
  const fullName = userInfo.name;
  const facebookId = userInfo.id;
  const accessToken = userInfo.accessToken;
  const reauthorizeRequiredIn = userInfo.reauthorize_required_in;
  const expiresIn = userInfo.expiresIn;
  const signedRequest = userInfo.signedRequest;

  if (!fullName || !facebookId || !accessToken || !reauthorizeRequiredIn || !expiresIn || !signedRequest) {
    res.status(405).send({"error":"Missing Parameters"});
  }

  db.User.findOrCreate({
    where:{full_name: fullName},
    defaults:{
      full_name: fullName,
      facebook_id: facebookId,
      access_token: accessToken,
      reauthorize_required_in: reauthorizeRequiredIn,
      expiresIn: expiresIn,
      signed_request: signedRequest,
    }
  })
  .spread((user, created) => {
    return user;
  })
  .then((user) => {
    res.json({status: "success", "accessToken": user.access_token, "industryType": user.industry_type});
  })
  .catch((error) => {
    res.status(404).send({error: error});
  })
}

exports.saveIndustry = (req, res) => {
  let accessToken = req.headers.authorization.split(' ')[1];
  let industryType = req.body.industryType;
  console.log(industryType);
  db.User.update({
    industry_type: industryType
  }, {
    where:{access_token: accessToken}
  })
  .then((result) => {
    res.json({status: "success"});
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send({error: err});
  })
}
