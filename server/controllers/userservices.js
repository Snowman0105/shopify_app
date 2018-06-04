const db = require('../sequelize');

exports.saveIndustry = (req, res) => {
  let userId = req.auth.id;
  let industryType = req.body.industryType;
  db.User.update({
    industry_type: industryType
  }, {
    where:{id: userId}
  })
  .then((result) => {
    console.log(result);
    if (!result) {
      res.status(404).send({error: 'Not find user'});
    }
    res.json({status: "success", industryType: industryType});
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send({error: err});
  })
}
