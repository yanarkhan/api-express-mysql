const express = require("express");
const UserController = require("../controller/users");

const router = express.Router();

// CREATE - POST
router.get("/", UserController.getAllUsers);

// READ - GET
router.post("/", UserController.createNewUsers);

// UPDATE - PATCH
router.patch("/:idUser", UserController.updateUser);

module.exports = router;
