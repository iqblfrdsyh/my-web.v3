"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      profession: {
        type: Sequelize.STRING,
      },
      year_experience: {
        type: Sequelize.DECIMAL,
      },
      description: {
        type: Sequelize.TEXT("long"),
      },
      about_desc: {
        type: Sequelize.TEXT("long"),
      },
      no_handphone: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
      },
      profile_url: {
        type: Sequelize.TEXT,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
