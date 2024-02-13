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

const createNewUsers = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.email || !body.adress) {
    return res.status(400).json({
      message: "Please fill in all data",
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "create new USERS is success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await UsersModel.updateUser(body, idUser);
    res.json({
      message: "UPDATE is success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: "DELETE is success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
};
