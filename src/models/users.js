const dbPool = require("../config/database");

const getAllDataUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

module.exports = { getAllDataUsers };
