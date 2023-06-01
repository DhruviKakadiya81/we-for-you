const subser = require('../models/subservice');
const SPModel = require("../models/spDetails");
const sub = require('../models/subserviceadmin');
const spModel = require('../models/serviceprovider');
const addservices = async (req, res) => {

    console.log("data :== ", req.body);
    const { subname, prize, discription, serviceid, spid } = req.body
    const newSubService = new subser({
        subname, prize, discription, serviceid, spid
    });
    newSubService.save()
        .then((subservice) => {

            SPModel.findOne({ spid: spid })
                .populate('subserid')
                .then((spmodel) => {
                    const existingSubService = spmodel.subserid.find((subser) => {
                        return subser.subname.equals(newSubService.subname) && subser.spid.equals(newSubService.spid);
                    });
                    if (existingSubService) {
                        return res.send({ success: true, msg: "sub SubService with the same subname and spid already exists data" });

                    }
                    spmodel.serviceid.push(serviceid);
                    spmodel.subserid.push(subservice._id);


                    spmodel.save()
                        .then(() => {

                            return res.send({ success: true, msg: "updated successfully" });
                        })
                        .catch((err) => {

                            res.send({ success: false, msg: "not service" });
                        });
                })
                .catch((err) => {

                    res.send({ success: false, msg: "not service" });
                });
        })
        .catch((err) => {

            res.send({ success: false, msg: "not service" });
        });

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


const showdallservicepr = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const data = s
        const subserdata = await subser.find().populate('spid');
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

const getdetailbycity = async (req, res) => {
    try {
        const city = req.body.city;
        const serviceid = req.body.serviceid;

        const data = await SPModel.find({ serviceid: serviceid, cityname: city }).populate('cityid').populate('areaid').populate('serviceid').populate('spid').populate({
            path: 'subserid', populate: {
                path: 'subname', model: 'SubServiceAdmin'
            }
        });
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


module.exports = { addservices, showservicebymain, showservicebyspid, updatesubser, deletesubser, showdallservicepr, getdetailbycity }