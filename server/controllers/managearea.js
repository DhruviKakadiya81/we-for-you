const area = require("../models/areaModel");
const mongoose = require("mongoose");

const getarea = async(req,res)=>{
    try {
       var data = await area.find().populate('cityid');
       console.log(data);
        res.send({success:true,msg:"area data",data:data});
    } catch (error) {
        console.log(error);
        res.send({success:false,msg:"data not found"});
    }

}

const addarea = async(req,res)=>{
    try {
        // console.log("data :== ",req.body);
        const {areaname,cityid} = req.body
        const areaparam = new area({
            areaname,
            cityid
        });
        const areadata = await areaparam.save();
        console.log(areadata);
        res.send({success:true,msg:"data",data:areadata});
    } catch (error) {
        res.send({success:false,msg:`data ${error}`});  
    }

}

const deletearea = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("id----",id);
        const deldata = await area.deleteOne({ _id: id });
        console.log(deldata);
        res.status(200).send({ success: true, msg: 'area is deleted', data: deldata });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, msg: 'post data failed' });
    }
}

const updatearea = async (req, res) => {
    try {
            const { id,areaname,cityid } = req.body;
            console.log(".body----req",req.body);
            const updatecity = await area.findByIdAndUpdate({_id: id }, {
                $set: {areaname,cityid}
            });
            console.log("updated",updatecity);
             res.status(200).send({ success: true, msg: 'area is updated', data: updatecity });

    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, msg: 'not updated' });
    }
   }

module.exports = {getarea,addarea,updatearea,deletearea}
   