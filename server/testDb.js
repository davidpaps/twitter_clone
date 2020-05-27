const Pool = require("pg").Pool;

const pool = new Pool({
  user: "DavidPapamichael",
  host: "localhost",
  port: 5432,
  database: "twittertest",
});

module.exports = pool;
