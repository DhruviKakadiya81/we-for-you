const subser = require('../models/subservice');


const addservices = async(req,res)=>{
    try {
        console.log("data :== ",req.body);
        const{subname,prize,discription,serviceid,spid} = req.body
        const serviceData = new subser({
           subname,prize,discription,serviceid,spid,image:req.file.filename
        });
        const ser_result = await serviceData.save();
        res.send({success:true,msg:"data added successfully",data : "ser_result"});
        console.log(ser_result);
    } catch (error) {
        res.send({success:false,msg:"data"});
        console.log(error);
    }

}

module.exports = {addservices}