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

const updateUser = (body, idUser) => {
  const SQLQuery = `UPDATE users SET 
                    name = "${body.name}", email = "${body.email}", adress = "${body.adress}"
                    WHERE id = ${idUser}`;

  return dbPool.execute(SQLQuery);
};

const deleteUser = (idUser) => {
  const SQLQuery = `DELETE FROM users
                    WHERE id = ${idUser} `;

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllDataUsers, createNewUser, updateUser, deleteUser };
