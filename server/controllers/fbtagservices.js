const db = require('../sequelize');

exports.getAll = (req, res) => {

  db.FBTag.findAll()
  .then((fbTags) => {
    res.json(fbTags);
  })
  .catch((error) => {
    res.status(404).send({error});
  })
}
