const db = require('../sequelize');

exports.getAllTags = (req, res) => {
  db.Tag.findAll({})
  .then((tags) => {
    if (!tags){
      throw new Error({error: "Not find any tags"});
    }
    res.json(tags);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
}
