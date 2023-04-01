const express = require("express");
const { body, validationResult } = require('express-validator');
const controller = require("../controllers/registration");
const logcontroller = require("../controllers/login")
const router1 = express.Router();

router1.post("/reguser",[body("email").isEmail()],controller.register);
router1.post("/loguser",[body("email").isEmail()],logcontroller.login);

module.exports = router1;