const profile = require("../models/profile");
const user = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const getdetail = async (req, res) => {
    try {
        const userid = req.body.userid;
        console.log(userid)
        var data = await profile.findOne({ userid }).populate('userid');
        console.log(data);
        res.send({ success: true, msg: "usrr data", data: data });
    } catch (error) {
        console.log(error);
        res.send({ success: false, msg: "data not found" });
    }

}

const adddetails = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const { firstname, lastname, gender, birthdate, userid } = req.body;
        const check = await profile.findOne({ userid });
        console.log("checking==>", check)
        if (!check) {
            const userdetail = new profile({
                firstname,
                lastname,
                gender,
                birthdate,
                image: req.file.filename,
                userid
            });
            const data = await userdetail.save();
            console.log(data);
            return res.send({ success: true, msg: "data", data: data });
        }
        else {

            res.send({ success: false, msg: `not added` });
        }

    } catch (error) {
        res.send({ success: false, msg: `data ${error}` });
    }

}
const updatedetails = async (req, res) => {
    try {
        const { userid, firstname, lastname, gender, birthdate } = req.body;
        console.log(".body----req", req.body);
        const updateuser = await profile.updateOne({ userid }, { $set: { firstname, lastname, gender, birthdate } });
        console.log("updated", updateuser);
        if (updateuser.acknowledged === true) {
            res.status(200).send({ success: true, msg: 'user detail is updated', data: updateuser });
        }
        else {
            res.status(200).send({ success: false, msg: 'user detail not updated', data: updateuser });
        }

    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, msg: 'not updated' });
    }
}

const changepassword = async (req, res) => {
    try {
        console.log("req---", req.body);
        const { userid, oldpassword, newpassword } = req.body;
        const finduser = await user.findOne({ _id: userid });
        if (finduser === null) {
            return res.status(200).send({ success: false, msg: 'user not found' });
        }
        else {

            const compare = await bcrypt.compare(oldpassword, finduser.password);
            console.log(compare);
            if (compare) {
                const salt = await bcrypt.genSalt(10);
                const hashPass = await bcrypt.hash(newpassword, salt);
                const updatepass = await user.updateOne({ _id: userid }, { $set: { password: hashPass } });
                return res.status(200).send({ success: true, msg: 'password is updated', data: updatepass });
            }
            else {
                return res.status(200).send({ success: false, msg: 'your old password is wrong' });
            }
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, msg: 'not updated' });
    }
}

const getuser = async (req, res) => {
    try {
        console.log("get user===>");
        const customer = await profile.find();
        return res.status(200).send({ success: true, msg: 'user found', data: customer });
    } catch (error) {
        return res.status(200).send({ success: false, msg: 'user is not found' });
    }
}

module.exports = { getdetail, adddetails, updatedetails, changepassword, getuser }
