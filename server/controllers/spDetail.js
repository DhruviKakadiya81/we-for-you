const SPModel = require("../models/spdetail");

const adddetail =async(req,res)=>{
  try {
    console.log("req.body===>",req.body);
    const {firstname,lastname,mobileno,gender,shopname,address,pemail,description,cityid,areaid} = req.body;
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
        areaid
    });
    
    const savedata = data.save();
    res.send({success:false});
  } catch (error) {
    console.log("error",error);
    res.send({success:false});
  }
}

module.exports ={adddetail}