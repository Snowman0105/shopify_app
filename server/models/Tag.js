module.exports = function(sequelize, DataTypes) {
  const Tag = sequelize.define(
    'Tag',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tag_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: models => {}
      },
      tableName: 'tags',
      timestamps: false
    }
  );

  return Tag;
};
