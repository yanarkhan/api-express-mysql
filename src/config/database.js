const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "lat_api",
});

module.exports = dbPool.promise();
