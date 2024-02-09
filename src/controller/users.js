const getAllUsers = (req, res) => {
  const data = {
    id: "1",
    name: "Tampan",
    email: "tampan@gmail.com",
    adress: "Bekasi",
  };
  res.json({
    message: "method Get USERS is success",
    data,
  });
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
  });
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
};
