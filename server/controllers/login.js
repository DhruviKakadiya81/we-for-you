const usertbl = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jsonwebtokenforthehumanandhomeservicemanagement";
const sptbl = require("../models/serviceprovider");

const login = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
        return res.status(200).send({ success: false, msg: "There are some error in your input" });
    }
    else {
        try {
            if (req.body.state === 1) {
                if (email === '') {
                    return res.status(200).send({ success: false, msg: "Provide Proper Email Address !!" });
                }
                else {
                    const login = await usertbl.findOne({ email: email });
                    if (!login) {
                        return res.status(200).send({ success: false, msg: "There is no registered user on this name !!" });
                    }
                    const compare = await bcrypt.compare(password, login.password);

                    if (!compare) {
                        return res.status(200).send({ success: false, msg: "Provide right Password !!" });
                    }
                    else {
                        const jwtdata = jwt.sign({ id: login._id }, JWT_SECRET);
                        console.log(jwtdata);
                        return res.status(200).send({ success: true, msg: "Login successfull", token: jwtdata });
                    }
                }

            }
            else {
                // This login is Service Provider Side...
                console.log("spp======");
                let login = await sptbl.findOne({ email: email });
                console.log("login ----" + login)
                if (!login) {
                    return res.status(200).send({ success: false, msg: "there is no registered user on this name" });
                }
                const compare = await bcrypt.compare(password, login.password);

                if (!compare) {
                    return res.status(200).send({ success: false, msg: "your password is wrong" });
                }
                else {
                    const jwtdata = jwt.sign({ id: login._id }, JWT_SECRET);
                    console.log(jwtdata);
                    //  res.send(jwtdata);
                    //   localStorage.setItem('logintoken','krupa');
                    //   alert(localStorage.getItem('logintoken'));
                    return res.status(200).send({ success: true, msg: "login success full", token: jwtdata });
                }
            }
        } catch (error) {
            console.log(error);
        }

    }

}



module.exports = {
    login
}