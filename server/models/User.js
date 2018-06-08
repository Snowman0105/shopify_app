const db = require('../sequelize');

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
    },
    facebook_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    access_token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    industry_type: DataTypes.STRING(32),
  }, {
    tableName: 'users',
    timestamps: false
  });

  User.associate = (models) => {
    User.hasMany(models.Message, { foreignKey: 'user_id' });
  };
  User.upsertFBUser = (accessToken, refreshToken, profile, cb) => {
    const { givenName, middleName, familyName } = profile.name;
    const fullName = givenName + familyName;
    const facebookId = profile.id;

    return User.findOrCreate({
      where:{ 'facebook_id': facebookId },
      defaults: {
        full_name: fullName,
        facebook_id: facebookId,
        access_token: accessToken
      }
    })
    .spread((user) => {
      return cb(null, user);
    });
  };

  return User;
}
