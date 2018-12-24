const db = require('../sequelize');

exports.getAllEvents = (req, res) => {
  db.Event.findAll({})
    .then(events => {
      if (!events) {
        throw new Error({ error: 'Not find any events' });
      }
      res.json(events);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};
