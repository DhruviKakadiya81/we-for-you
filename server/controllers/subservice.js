const subser = require('../models/subservice');
const sub = require("../models/subserviceadmin");

const addservices = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const { subname, prize, discription, serviceid, spid } = req.body
        const serviceData = new subser({
            subname, prize, discription, serviceid, spid
        });
        const ser_result = await serviceData.save();
        res.send({ success: true, msg: "data added successfully", data: ser_result });
        console.log(ser_result);
    } catch (error) {
        res.send({ success: false, msg: "data" });
        console.log(error);
    }

}

const showservicebymain = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const serviceid = req.body.serviceid;
        const subserdata = await sub.find({ serviceid });
        if (subserdata !== null) {
            res.send({ success: true, msg: "sub services data", data: subserdata });
        }
        else {
            res.send({ success: false, msg: "not service" });
        }
    } catch (error) {
        res.send({ success: false, msg: "data" });
        console.log(error);
    }
}

const showservicebyspid = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const spid = req.body.spid;
        const subserdata = await subser.find({ spid }).populate('subname');
        if (subserdata.length > 0) {
            res.send({ success: true, msg: "sub services data", data: subserdata });
        }
        else {
            res.send({ success: false, msg: "not service" });
        }
    } catch (error) {
        res.send({ success: false, msg: "data" });
        console.log(error);
    }
}

const updatesubser = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const { id, subname, prize, discription } = req.body;
        const subserdata = await subser.updateOne({ _id: id }, { $set: { subname, prize, discription } });
        if (subserdata.acknowledged === true) {
            res.send({ success: true, msg: "updated", data: subserdata });
        }
        else {
            res.send({ success: false, msg: "not service" });
        }
    } catch (error) {
        res.send({ success: false, msg: "data" });
        console.log(error);
    }
}

const deletesubser = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const { id } = req.body;
        const subserdata = await subser.findByIdAndDelete({ _id: id });
        console.log(subserdata)
        if (subserdata) {
            res.send({ success: true, msg: "deleted", data: subserdata });
        }
        else {
            res.send({ success: false, msg: "not service" });
        }
    } catch (error) {
        res.send({ success: false, msg: "data" });
        console.log(error);
    }
}





module.exports = { addservices, showservicebymain, showservicebyspid, updatesubser, deletesubser }