const jwt = require("jsonwebtoken");
const JWT_SECRET = "jsonwebtokenforthehumanandhomeservicemanagement";
const user = require("../models/userModel");

const auth = async (req, res, next) => {
    const token = req.header('token');
    console.log("token is :" + token);
    if (!token) {
        res.status(401).send(error);
    }

    try {
        const ver = jwt.verify(token, JWT_SECRET);
        // res.send(data.user.id);
        console.log("ver-----" + ver)
        const userdata = await user.findOne({ _id: ver.id });
        console.log("userdata : " + userdata);
        //let id = ver.iat;
        req.id = ver.id;
        console.log(req.id);
        // req.user = ver.user;
        // console.log(data.user.id)

        //console.log(req.data);
        next();
    } catch (error) {
        res.status(401).send(error);
    }

}
module.exports = auth;