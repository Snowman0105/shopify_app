module.exports = function(sequelize, DataTypes) {
  const FacebookTag = sequelize.define('FacebookTag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      classMethods: {
        associate: (models) => {
        }
      },
      tableName: 'fbmessagetags',
      timestamps: false
    });

  return FacebookTag;
}
