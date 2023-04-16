const usertbl = require("../models/userModel");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jsonwebtokenforthehumanandhomeservicemanagement";


const login = async (req, res) => {
    // console.log("hello");
    const r = req.body;
    let email = req.body.email;
    let password = req.body.password;
    console.log( "all data ----",r);
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
        return res.status(200).send({success : false , msg: "there are some error in your input"});
    }
    else {
        try {
            console.log("email ----" +email);
            let login = await usertbl.findOne({ email: email });
            console.log("login ----" +login)
            if (!login) {
                return res.status(200).send({ success : false , msg :"there is no registered user on this name" });
            }
            const compare = await bcrypt.compare(password, login.password);

            if (!compare) {
                return res.status(200).send({  success : false , msg :"your password is wrong" });
            }
            else{
                const jwtdata = jwt.sign({ id: login._id }, JWT_SECRET);
                console.log(jwtdata);
              //  res.send(jwtdata);
            //   localStorage.setItem('logintoken','krupa');
            //   alert(localStorage.getItem('logintoken'));
              return res.status(200).send({  success : true , msg :"login success full" ,token :jwtdata });
            }
        } catch (error) {
            console.log(error);
        }

    }

}



module.exports = {
    login
}