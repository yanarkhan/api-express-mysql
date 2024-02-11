const dbPool = require("../config/database");

const getAllDataUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, adress) 
                    VALUES 
                    ("${body.name}", "${body.email}", "${body.adress}")`;

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllDataUsers, createNewUser };
