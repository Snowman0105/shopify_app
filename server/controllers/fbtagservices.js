const db = require('../sequelize');

exports.getAll = (req, res) => {

  db.FacebookTag.findAll()
  .then((fbTags) => {
    res.json(fbTags);
  })
  .catch((error) => {
    res.status(404).send({error});
  })
}
