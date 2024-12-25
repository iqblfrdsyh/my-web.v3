'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Certificates.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    image_url: DataTypes.TEXT,
    code_licence: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Certificates',
  });
  return Certificates;
};