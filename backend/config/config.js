require("dotenv").config();

module.exports = {
  development: {
    username: process.env.UNAME,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    port: process.env.PORT,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    port: process.env.PORT,
  },
};
