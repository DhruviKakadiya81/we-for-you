const SPModel = require("../models/spDetails");

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
    const data = await SPModel.findOne({ spid });
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

const deldata = async (req, res) => {
  try {
    const data = await SPModel.find();
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



module.exports = { adddetail, getdetail, getalldata }