const SPModel = require("../models/spDetails");
const spdetail = require("../models/serviceprovider");
const bcrypt = require("bcryptjs");

const adddetail = async (req, res) => {
  try {
    console.log("req.body===>", req.body);
    const { firstname, lastname, mobileno, gender, shopname, address, pemail, description, cityid, areaid, spid } = req.body;
    const data = new SPModel({
      firstname,
      lastname,
      mobileno,
      gender,
      shopname,
      address,
      pemail,
      description,
      cityid,
      areaid,
      spid
    });
    const savedata = await data.save();
    res.send({ success: true, data: savedata });
  } catch (error) {
    console.log("error", error);
    res.send({ success: false });
  }
}

const getdetail = async (req, res) => {
  try {
    const spid = req.body.spid;
    console.log("spid is==>", spid);
    const data = await SPModel.findOne({ spid }).populate('spid').populate('cityid').populate('areaid');
    console.log("data is===>", data);
    if (data === null) {
      return res.send({ success: false, data: data });
    }
    else {
      return res.send({ success: true, data: data });
    }

  } catch (error) {
    console.log("error", error);
    res.send({ success: false });
  }
}



const getalldata = async (req, res) => {
  try {
    const data = await SPModel.find().populate('spid').populate('cityid').populate('areaid');
    // console.log("data is===>", data);
    if (data === null) {
      return res.send({ success: false, data: data });
    }
    else {
      return res.send({ success: true, data: data });
    }

  } catch (error) {
    console.log("error", error);
    res.send({ success: false });
  }
}


const updatespdetail = async (req, res) => {
  try {
    console.log("update==>", req.body);
    const { firstname, lastname, mobileno, gender, shopname, address, pemail, description, cityid, areaid, spid } = req.body;
    const data = await SPModel.updateOne({ spid }, { $set: { firstname, lastname, mobileno, gender, shopname, address, pemail, description, cityid, areaid } });
    console.log("update ==> ,", data);
    if (data.acknowledged === true) {
      return res.send({ success: true, msg: "Your data is UPDATED" });
    }
    else {
      return res.send({ success: false, msg: "your data is not updated" });
    }
  } catch (error) {
    console.log("error", error);
    return res.send({ success: false });
  }
}

const changepassword = async (req, res) => {
  try {

    const { spid, oldpassword, newpassword } = req.body;
    console.log("req.body", req.body);
    const finduser = await spdetail.findOne({ _id: spid });
    if (finduser === null) {
      return res.status(200).send({ success: false, msg: 'user not found' });
    }
    else {
      console.log("oldpass", oldpassword);
      console.log("newpas", finduser.password);

      const compare = await bcrypt.compare(oldpassword, finduser.password);
      console.log(compare);
      if (compare) {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(newpassword, salt);
        const updatepass = await spdetail.updateOne({ _id: spid }, { $set: { password: hashPass } });
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




module.exports = { adddetail, getdetail, getalldata, updatespdetail, changepassword }