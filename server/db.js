const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres5432",
  port: 5432,
  database: "tutorbooking"
});

module.exports = pool;