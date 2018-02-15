'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      set(password) {
        this.setDataValue('password', password.split('').reverse().join(''));
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  User.prototype.isValidPassword = function(password) {
    return this.password === password.split('').reverse().join('');
  };

  User.associate = function(models) {
    User.hasMany(models.Task);
  };

  return User;
};