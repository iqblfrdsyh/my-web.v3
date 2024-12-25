"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserSosmeds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserSosmeds.init(
    {
      userId: DataTypes.INTEGER,
      sosmedId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserSosmed",
    }
  );
  return UserSosmeds;
};
