const express = require("express");
const { body, validationResult } = require('express-validator');

const controller = require("../controllers/registration");
const logcontroller = require("../controllers/login");
const getuser = require("../controllers/getuser");
const { auth, auth2 } = require("../middleware/auth");
const sendotp = require("../controllers/sendotp");
const mainservice = require("../controllers/showservices");
const spapi = require("../controllers/serviceprovider");
const managearea = require("../controllers/managearea");
const managecity = require("../controllers/managecity");
const userdetail = require("../controllers/userdetails");
const spdetail = require("../controllers/spDetail");
const subser = require("../controllers/subservice");
const subserad = require("../controllers/subserviceadmin");
const addtocart = require("../controllers/bookservice");
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

router1.post("/reguser", [body("email").isEmail()], controller.register);
router1.post("/loguser", [body("email").isEmail()], logcontroller.login);
router1.post("/getclient", auth, getuser.getuserlogin);

router1.post("/sendmail", sendotp.sendotp);
router1.post("/getotp", sendotp.getotp);
router1.post("/delser", mainservice.deleteservice);
router1.post("/addser", upload.single('s_icon'), mainservice.addservices);
router1.get("/getser", mainservice.getservices);
router1.post("/update", upload.single('s_icon'), mainservice.updateservice);
// router1.post("/addsp",upload.single('s_icon'),mainservice.updateservice);
router1.post("/addarea", managearea.addarea);


router1.post("/addcity", managecity.addcity);
router1.get("/getcity", managecity.getcity);
router1.put("/updatecity", managecity.updatecity);
router1.delete("/deletecity/:id", managecity.deletecity);


router1.post("/addarea", managearea.addarea);
router1.get("/getarea", managearea.getarea);
router1.put("/updatearea", managearea.updatearea);
router1.delete("/deletearea/:id", managearea.deletearea);
router1.post("/areabycity", managearea.getdatabycity);


router1.post("/profiledetail", upload.single('image'), userdetail.adddetails);
router1.post("/getuserdetail", userdetail.getdetail);
router1.put("/updateuserdetail", userdetail.updatedetails);
router1.put("/changepass", userdetail.changepassword);
router1.get("/getuser", userdetail.getuser);


router1.post("/addaspdet", spdetail.adddetail);
router1.post("/getsp", auth, getuser.getsplogin);
router1.post("/getspdetail", spdetail.getdetail);
router1.get("/spdata", spdetail.getalldata);

router1.post("/addsubser", subser.addservices);
router1.post("/showsermain", subser.showservicebymain);
router1.post("/showserbyspid", subser.showservicebyspid);
router1.put("/updatesub", subser.updatesubser);
router1.delete("/deletesub", subser.deletesubser);

// admin subservive
router1.post("/addsubserad", upload.single('image'), subserad.addservicesadmin);
router1.get("/showsub", subserad.showservice);
router1.delete("/deletesubser", subserad.deletesubser);
router1.put("/updatesubser", upload.single('image'), subserad.updatesubser);
router1.get("/spdetail", subser.showdallservicepr);
router1.post("/spdetailbycity", subser.getdetailbycity);
router1.post("/spdetailbysubser", subser.getdetailbysubserandcity);
router1.post("/searchbysubaname", subser.searchbysubname);


router1.post("/addtocart", addtocart.bookservice);
router1.post("/showcart", addtocart.showcart);
router1.delete("/deletecart", addtocart.deleteintocart);
// router1.post("/getuser",logcontroller.getuserlogin);
// router1.post("/getuser",logcontroller.getuserlogin);

module.exports = router1; 