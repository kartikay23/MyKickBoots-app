require("dotenv").config();
const {
  DEV_DATABASE,
  TEST_DATABASE,
  PROD_DATABASE,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_USER_PROD,
  DATABASE_PASSWORD_PROD,
  DATABASE_HOST_PROD,
} = process.env;

module.exports = {
  development: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DEV_DATABASE,
    host: DATABASE_HOST,
    dialect: "mysql",
  },
  test: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: TEST_DATABASE,
    host: DATABASE_HOST,
    dialect: "mysql",
  },
  production: {
    username: DATABASE_USER_PROD,
    password: DATABASE_PASSWORD_PROD,
    database: PROD_DATABASE,
    host: DATABASE_HOST_PROD,
    dialect: "mysql",
  },
};
