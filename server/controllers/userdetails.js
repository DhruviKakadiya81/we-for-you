const profile = require("../models/profile");
const mongoose = require("mongoose");

const getdetail = async(req,res)=>{
    try {
       const userid = req.body.userid;
       console.log(userid)
       var data = await profile.find().where({userid});
       console.log(data);
        res.send({success:true,msg:"usrr data",data:data});
    } catch (error) {
        console.log(error);
        res.send({success:false,msg:"data not found"});
    }

}

const adddetails = async(req,res)=>{
    try {
        console.log("data :== ",req.body);
        const {firstname,lastname,gender,birthdate,userid} = req.body;
        const userdetail = new profile({
            firstname,
            lastname,
            gender,
            birthdate,
            image:req.file.filename,
            userid
        });
        const data = await userdetail.save();
        console.log(data);
        res.send({success:true,msg:"data",data:data});
    } catch (error) {
        res.send({success:false,msg:`data ${error}`});  
    }

}

const deletedetail = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("id----",id);
        const deldata = await profile.deleteOne({ _id: id });
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
            const updatecity = await profile.findByIdAndUpdate({_id: id }, {
                $set: {areaname,cityid}
            });
            console.log("updated",updatecity);
             res.status(200).send({ success: true, msg: 'area is updated', data: updatecity });

    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, msg: 'not updated' });
    }
   }

module.exports = {getdetail,adddetails,updatearea,deletedetail}
