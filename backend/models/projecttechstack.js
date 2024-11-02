'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectTechStack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectTechStack.init({
    projectId: DataTypes.INTEGER,
    techStackId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'projectTechStack',
  });
  return projectTechStack;
};