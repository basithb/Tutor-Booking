const Pool = require("pg").Pool; // Pool property helps to configure our connection

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres5432",
  port: 5432,
  database: "tutorbooking"
});

module.exports = pool;