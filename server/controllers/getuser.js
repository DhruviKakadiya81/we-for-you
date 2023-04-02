const usertbl = require("../models/userModel");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jsonwebtokenforthehumanandhomeservicemanagement";
const getuserlogin = async(req,res)=>{
    try {
        let userId = req.id;
        console.log(userId);
        const data2 = await usertbl.findById(userId);
        // const data2 = await user.findById(userId).select("-password");
        console.log("hello");
       return res.status(200).send({success : true,data:data2});
        
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getuserlogin
}