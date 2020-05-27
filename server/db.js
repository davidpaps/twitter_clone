const Pool = require("pg").Pool;

const pool = new Pool({
  user: "DavidPapamichael",
  host: "localhost",
  port: 5432,
  database: "twitter",
});

module.exports = pool;
