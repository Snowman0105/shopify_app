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
    associate: (models) => {
      FacebookTag.hasMany(models.Message, { foreignKey: 'category_id'});
    },
    tableName: 'fbmessagetags',
    timestamps: false
  });

  // FacebookTag.associate = (models) => {
  //   FacebookTag.hasMany(models.Message, { foreignKey: 'category_id'});
  // };

  return FacebookTag;
}
