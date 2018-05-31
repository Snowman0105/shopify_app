const md5 = require('md5');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: 'Name must be at least 3 characters'
        }
      }
    },
    facebook_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    access_token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reauthorize_required_in: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expiresIn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    signed_request: {
      type: DataTypes.STRING,
      allowNull: false
    },
    industry_type: DataTypes.STRING(32)
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Expense, { foreignKey: 'user_id' });
      }
    },
    tableName: 'users',
    timestamps: false
  });

  return User;
}
