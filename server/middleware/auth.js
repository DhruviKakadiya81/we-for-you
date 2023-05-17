const jwt = require("jsonwebtoken");
const JWT_SECRET = "jsonwebtokenforthehumanandhomeservicemanagement";
const user = require("../models/userModel");

const auth = async (req, res, next) => {
    console.log("hello");
    // id = localStorage.getItem("token");
    // console.log("----ls----"+id);
    console.log("id"+req.body.id);
    const token = req.body.id;
    console.log("token is :" + token);
    if (!token) {
       return  res.status(401).send(error);
    }

    try {
        const ver = jwt.verify(token, JWT_SECRET);
    
        console.log("ver-----" + ver)
        const userdata = await user.findOne({ _id: ver.id });
        console.log("userdata : " + userdata);
        //let id = ver.iat;
        req.id = ver.id;
        // console.log(req.id);
        req.user = ver.user;
        // console.log(data.user.id)

        // console.log(req.data);
        // res.send(data.user.id);
        next();
    } catch (error) {
        res.status(401).send(error);
    }

}
module.exports = {auth};