const UserController = require("../controller");
const express = require("express");

const router = new express.Router();
const userController = new UserController();

router.post('/login', userController.login);
router.post('/register', userController.register);


module.exports = router;