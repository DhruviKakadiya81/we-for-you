const express = require("express");
const { body, validationResult } = require('express-validator');
const controller = require("../controllers/registration");

const router1 = express.Router();

router1.post("/reguser",[body("email").isEmail()],controller.register);

module.exports = router1;