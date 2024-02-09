const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  /* NB: Pemanggilan database bersifat asynchronus */
  try {
    const [data] = await UsersModel.getAllDataUsers();
    res.json({
      message: "method Get USERS is success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUsers = (req, res) => {
  console.log(req.body);
  res.json({
    message: "create new USERS is success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log(req.params);
  res.json({
    message: "UPDATE is success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "DELETE is success",
    data: {
      id: idUser,
      name: "Farel",
      email: "farel@gmail.com",
      adress: "Bekasi",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
};
