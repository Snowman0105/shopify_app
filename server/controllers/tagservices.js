const db = require('../sequelize');

exports.getAllTags = (req, res) => {
  console.log(req.headers.authorization);
  db.Tag.findAll()
  .then((tags) => {
    if (!tags){
      throw new Error({error: "Not find any tags"});
    }
    res.json(tags);
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send(err);
  })
}
