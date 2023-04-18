const express = require("express");
const { body, validationResult } = require('express-validator');

const controller = require("../controllers/registration");
const logcontroller = require("../controllers/login");
const getuser = require("../controllers/getuser");
const {auth} = require("../middleware/auth");
const sendotp = require("../controllers/sendotp");
const mainservice = require("../controllers/showservices");

const path = require("path");
var multer = require("multer");
const router1 = express.Router();

router1.use(express.static('../public/image'));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/image'), function (error, success) {
            if (error) {
                console.log(error)
            }
        });
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error, success) {
            if (error) {
                console.log(error);
            }
        });
    }
});

var upload = multer({ storage: storage });

router1.post("/reguser",[body("email").isEmail()],controller.register);
router1.post("/loguser",[body("email").isEmail()],logcontroller.login);
router1.post("/getclient", auth , getuser.getuserlogin );
router1.post("/sendmail",sendotp.sendotp);
router1.post("/getotp",sendotp.getotp);
router1.post("/delser",mainservice.deleteservice);
router1.post("/addser",upload.single('s_icon'),mainservice.addservices);
router1.get("/getser",mainservice.getservices);
// router1.post("/getuser",logcontroller.getuserlogin);
// router1.post("/getuser",logcontroller.getuserlogin);

module.exports = router1;