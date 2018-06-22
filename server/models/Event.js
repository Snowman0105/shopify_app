module.exports = function(sequelize, DataTypes) {
  const Event = sequelize.define(
    'Event',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event: {
        type: DataTypes.STRING,
        allowNull: false
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false
      },
      webhook: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      associate: models => {
        Event.hasMany(models.Message, { foreignKey: 'event_id' });
      },
      tableName: 'events',
      timestamps: false
    }
  );

  return Event;
};
