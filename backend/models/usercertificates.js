'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCertificates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCertificates.init({
    userId: DataTypes.INTEGER,
    certificateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCertificates',
  });
  return UserCertificates;
};