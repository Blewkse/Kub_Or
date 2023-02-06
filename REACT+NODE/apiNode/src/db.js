const { Client } = require("pg");
require("dotenv").config();

module.exports = Client({
  host: process.env.pgHost,
  user: process.env.pgUser,
  port: process.env.pgPort,
  password: process.env.pgPassword,
  database: process.env.pgDatabase,
});
