const db = require("../sequelize");

module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define(
    "Message",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: db.User,
          key: "id",
          deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      message_content: DataTypes.TEXT,
      trigger_name: DataTypes.TEXT,
      message_schedule: DataTypes.TEXT,
      msg_notification: DataTypes.BOOLEAN,
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: db.FacebookTag,
          key: "id",
          deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
    },
    {
      associate: models => {
        Message.belongsTo(models.User, { foreignKey: "user_id" });
        Message.belongsTo(models.FacebookTag, { foreignKey: "category_id" });
      },
      tableName: "messages",
      timestamps: false
    }
  );

  // Message.associate = (models) => {
  //   Message.belongsTo(models.User, { foreignKey: 'user_id' });
  //   Message.belongsTo(models.FacebookTag, { foreignKey: 'category_id' });
  // };

  return Message;
};
