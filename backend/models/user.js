"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      profession: DataTypes.STRING,
      year_experience: {
        type: DataTypes.DECIMAL,
        validate: {
          min: 0,
        },
      },
      description: DataTypes.TEXT("long"),
      about_desc: DataTypes.TEXT("long"),
      no_handphone: {
        type: DataTypes.STRING(25),
        allowNull: false,
        validate: {
          is: /^[0-9+()\- ]+$/i,
        },
      },
      address: DataTypes.STRING,
      profile_url: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
