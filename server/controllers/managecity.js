const city = require("../models/cityModel");
const area = require("../models/areaModel");
const mongoose = require("mongoose");

const getcity = async(req,res)=>{
    try {
       var data = await city.find();
       console.log(data);
        res.send({success:true,msg:"data",data:data});
    } catch (error) {
        console.log(error);
        res.send({success:false,msg:"data not found"});
    }

}

const addcity = async(req,res)=>{
    try {
        console.log("data :== ",req.body);
        const {cityname} = req.body
        const cityData = new city({
            cityname
        });
        const citydata = await cityData.save();
        console.log(citydata);
        res.send({success:true,msg:"data",data:citydata});
        
    } catch (error) {
        res.send({success:false,msg:`data ${error}`});  
    }

}

const deletecity = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("id----",id);
        const deldata = await city.deleteOne({ _id: id });
        const delarea = await area.deleteOne({ cityid: id });
        console.log(deldata);
        res.status(200).send({ success: true, msg: 'city is deleted', data: deldata });

    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, msg: 'post data failed' });
    }
}

const updatecity = async (req, res) => {
    try {
            const { id,cityname } = req.body;
            console.log(req.body);
            const updatecity = await city.findByIdAndUpdate({_id: id }, {
                $set: {cityname}
            });
             res.status(200).send({ success: true, msg: 'city is updated', data: updatecity });

    } catch (error) {
        console.log(error)
        res.status(200).send({ success: false, msg: 'not updated' });
    }
   }

module.exports = {getcity,addcity,updatecity,deletecity}
