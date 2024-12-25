'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sosmed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sosmed.init({
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    icon_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Sosmed',
  });
  return Sosmed;
};