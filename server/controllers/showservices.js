const service = require("../models/mainServices");
const mongoose = require("mongoose");

const getservices = async(req,res)=>{
    try {
       var data = await service.find();
       // console.log(data);
        res.send({success:true,msg:"data",data:data});
    } catch (error) {
        console.log(error);
        res.send({success:false,msg:"data not found"});
    }

}

const addservices = async(req,res)=>{
    try {
        const serviceData = new service({
            s_name : req.body.s_name,
            s_icon : req.body.s_icon
        });
        const ser_result = await serviceData.save();
        console.log(ser_result);
    } catch (error) {
        console.log(error);
    }

}
module.exports = {getservices,addservices}
