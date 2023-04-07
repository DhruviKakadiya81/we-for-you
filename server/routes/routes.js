const express = require("express");
const { body, validationResult } = require('express-validator');
const controller = require("../controllers/registration");
const logcontroller = require("../controllers/login");
const getuser = require("../controllers/getuser");
const {auth} = require("../middleware/auth");
const sendotp = require("../controllers/sendotp");

const router1 = express.Router();



router1.post("/reguser",[body("email").isEmail()],controller.register);
router1.post("/loguser",[body("email").isEmail()],logcontroller.login);
router1.post("/getclient", auth , getuser.getuserlogin );
router1.post("/sendmail",sendotp.sendotp);
router1.post("/getotp",sendotp.getotp);
// router1.post("/getuser",logcontroller.getuserlogin);
// router1.post("/getuser",logcontroller.getuserlogin);

module.exports = router1;