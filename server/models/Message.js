const db = require('../sequelize');

module.exports = function (sequelize, DataTypes) {
  const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: db.User,
        key: 'id',
        deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
      }
    },
    message_content: DataTypes.TEXT,
    trigger_name: DataTypes.TEXT,
    message_schedule: DataTypes.TEXT,
    msg_notification: DataTypes.BOOLEAN,
  }, {
    tableName: 'messages',
    timestamps: false
  });

  Message.associate = (models) => {
    Message.hasMany(models.User, {foreignKey: 'id'});
  };

  return Message;
}
