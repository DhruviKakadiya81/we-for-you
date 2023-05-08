const spdata = require("../models/spdetail");
const mongoose = require("mongoose");

const showspdetail = async(req,res)=>{
    try {
       var data = await spdata.find();
       console.log(data);
        res.send({success:true,msg:"data",data:data});
    } catch (error) {
        console.log(error);
        res.send({success:false,msg:"data not found"});
    }

}

const addspdata = async(req,res)=>{
    try {
        console.log("data :== ",req.body);
        // const {} = req.body
        // const serviceData = new service({
        //     s_name : req.body.s_name,
        //     s_icon : req.file.filename
        // });
        // const ser_result = await serviceData.save();
        res.send({success:true,msg:"data"});
        console.log(ser_result);
    } catch (error) {
        res.send({success:false,msg:"data"});
        console.log(error);
    }

}

const deleteservice = async (req, res) => {
    try {
        const id = req.body.id;
        const deldata = await service.deleteOne({ _id: id });
        console.log(deldata);
        res.status(200).send({ success: true, msg: 'post data', data: deldata });

    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, msg: 'post data failed' });
    }
}

const updateservice = async (req, res) => {
    try {

        if (req.file != undefined) {
            const { _id,s_name,s_icon} = req.body;
            //   const id = req.params.id;
            console.log(req.body);
            const updata = await service.findByIdAndUpdate({ _id }, {
                $set: {s_name,s_icon:req.file.filename}
            });
            res.status(200).send({ success: true, msg: 'post data updated', data: updata });

        }
        else {

            const { _id,s_name} = req.body;
            // const id = req.params.id;
            console.log(req.body);
            const updata = await service.findByIdAndUpdate({ _id }, {
                $set: {s_name}
            });
             res.status(200).send({ success: true, msg: 'post data updated', data: updata });

        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, msg: 'post   failed' });
    }
   }

module.exports = {showspdetail,addspdata}
