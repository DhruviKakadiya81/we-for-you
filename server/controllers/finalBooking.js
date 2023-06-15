const finalbooking = require('../models/finalbooking');
const qrcode = require('qrcode-terminal');

const adddata = async (req, res) => {
    try {
        console.log("data of booking service => ", req.body);
        const { spid, userid, serviceid, mobileno, date, hour, minutes, address } = req.body
        const chechhour = await finalbooking.find({ spid: spid, serviceid: serviceid, date: date });
        let flag = 1;
        if (chechhour.length > 0) {
            chechhour.map(async (key) => {
                console.log(key);
                let hour1 = hour;
                let hour2 = key.hour;
                console.log(hour2 - hour1);
                if (Math.abs(hour2 - hour1) <= 2) {
                    flag = 0;
                }
                else {
                    flag = 1;
                }
                console.log("flag=>", flag)
            })
            if (flag === 0) {
                return res.send({ success: false, msg: "This Service provider is already bookrd on this date or time slot." });
            }
            else {
                console.log("hello");

                const result = await book(spid, userid, serviceid, mobileno, date, hour, minutes, address);
                console.log(result);
                if (result === false) {
                    return res.send({ success: false, msg: "Enter Hours Beetween 8 to 22" })

                }
                else {
                    return res.send({ success: true, msg: "added ", data: result });
                }
            }

        }
        else {
            console.log("hello22");
            const result = await book(spid, userid, serviceid, mobileno, date, hour, minutes, address);
            console.log(result);
            if (result === false) {
                return res.send({ success: false, msg: "Enter Hours Beetween 8 to 22" })

            }
            else {
                return res.send({ success: true, msg: "added ", data: result });
            }
        }

    } catch (error) {
        console.log(error.message);
        return res.send({ success: false, msg: "Enter Hours Beetween 8 to 22", errormsg: error.message })
    }
}


const book = async (spid, userid, serviceid, mobileno, date, hour, minutes, address) => {


    try {
        const bookingdata = new finalbooking({
            spid, userid, serviceid, mobileno, date, hour, minutes, address
        });

        const data = await bookingdata.save();

        const qrdata = await finalbooking.findOne({ _id: data._id }).populate({
            path: 'userid', populate: {
                path: 'userid', model: 'User'
            }
        }).populate('spid').populate({
            path: 'serviceid', populate: {
                path: 'subname', model: 'SubServiceAdmin', populate: {
                    path: 'serviceid', model: 'Service',
                }
            }
        });

        console.log(qrdata);
        let string = JSON.stringify(data);
        let stringdata = JSON.stringify(string);

        console.log("stringdata", stringdata);
        const qrCode = qrcode.generate(stringdata, { small: true });

        // Print the QR code in the terminal
        console.log(qrCode);
        return qrdata;

    } catch (error) {
        console.log(error);
        return false;
    }
}


const getdatabyUserid = async (req, res) => {
    try {
        const id = req.body.id;
        const data = await finalbooking.find({ status: "Schedule" }).populate({
            path: 'userid', populate: {
                path: 'userid', model: 'User'
            }
        }).populate('spid').populate({
            path: 'serviceid', populate: {
                path: 'subname', model: 'SubServiceAdmin', populate: {
                    path: 'serviceid', model: 'Service',
                }
            }
        });
        let details = [];
        data.map((key) => {
            console.log("userid==>", key.userid.userid._id)
            console.log("id==>", id);
            if (key.userid.userid._id.toString() === id) {
                details.push(key);
            }
        })

        if (data.length <= 0) {
            res.send({ success: false, msg: "Your Service is not Scheduled Yet", data: details });
        }
        else {
            res.send({ success: true, data: details });
        }
    } catch (error) {
        res.send({ success: false, msg: "Internal server error", error: error })
    }
}

const getactivebyUserid = async (req, res) => {
    try {
        const id = req.body.id;
        const data = await finalbooking.find({ status: "Active" }).populate({
            path: 'userid', populate: {
                path: 'userid', model: 'User'
            }
        }).populate('spid').populate({
            path: 'serviceid', populate: {
                path: 'subname', model: 'SubServiceAdmin', populate: {
                    path: 'serviceid', model: 'Service',
                }
            }
        });
        let details = [];
        data.map((key) => {
            console.log("userid==>", key.userid.userid._id)
            console.log("id==>", id);
            if (key.userid.userid._id.toString() === id) {
                details.push(key);
            }
        })

        if (data.length <= 0) {
            res.send({ success: false, msg: "Your Service is not Scheduled Yet", data: details });
        }
        else {
            res.send({ success: true, data: details });
        }
    } catch (error) {
        res.send({ success: false, msg: "Internal server error", error: error })
    }
}
const updatedatabyUserid = async (req, res) => {
    try {
        const id = req.body.id;
        const data = await finalbooking.findByIdAndUpdate({ _id: id }, { status: req.body.status });
        console.log(data);

        if (data.length <= 0) {
            res.send({ success: false, msg: "Your Service is Still Sceduled", data: data });
        }
        else {
            res.send({ success: true, data: data });
        }
    } catch (error) {
        res.send({ success: false, msg: "Internal server error", error: error })
    }
}


const getdatabySpid = async (req, res) => {
    try {
        const id = req.body.id;
        const data = await finalbooking.find({ status: "Schedule" }).populate({
            path: 'userid', populate: {
                path: 'userid', model: 'User'
            }
        }).populate({
            path: 'spid', populate: {
                path: 'spid', model: 'Service_Provider'
            }
        }).populate({
            path: 'serviceid', populate: {
                path: 'subname', model: 'SubServiceAdmin', populate: {
                    path: 'serviceid', model: 'Service',
                }
            }
        });
        let details = [];
        data.map((key) => {
            console.log("userid==>", key.spid.spid._id)
            console.log("id==>", id);
            if (key.spid.spid._id.toString() === id) {
                details.push(key);
            }
        })

        if (data.length <= 0) {
            res.send({ success: false, msg: "Your Service is not Scheduled Yet", data: details });
        }
        else {
            res.send({ success: true, data: details });
        }
    } catch (error) {
        res.send({ success: false, msg: "Internal server error", error: error })
    }
}


const getActivebySpid = async (req, res) => {
    try {
        const id = req.body.id;
        const data = await finalbooking.find({ status: "Active" }).populate({
            path: 'userid', populate: {
                path: 'userid', model: 'User'
            }
        }).populate({
            path: 'spid', populate: {
                path: 'spid', model: 'Service_Provider'
            }
        }).populate({
            path: 'serviceid', populate: {
                path: 'subname', model: 'SubServiceAdmin', populate: {
                    path: 'serviceid', model: 'Service',
                }
            }
        });
        let details = [];
        data.map((key) => {
            console.log("userid==>", key.spid.spid._id)
            console.log("id==>", id);
            if (key.spid.spid._id.toString() === id) {
                details.push(key);
            }
        })

        if (data.length <= 0) {
            res.send({ success: false, msg: "Your Service is not Scheduled Yet", data: details });
        }
        else {
            res.send({ success: true, data: details, data: details });
        }
    } catch (error) {
        res.send({ success: false, msg: "Internal server error", error: error })
    }
}

const getalldata = async (req, res) => {
    try {
        const data = await finalbooking.find({ status: "Active" }).populate({
            path: 'userid', populate: {
                path: 'userid', model: 'User'
            }
        }).populate('spid').populate({
            path: 'serviceid', populate: {
                path: 'subname', model: 'SubServiceAdmin', populate: {
                    path: 'serviceid', model: 'Service',
                }
            }
        });
        if (data.length <= 0) {
            return res.send({ success: false, data: data, msg: "At This Time There is no active services" });
        }
        else {
            return res.send({ success: true, data: data, msg: "At This Time There is active services" });
        }
    } catch (error) {

        return res.send({ success: false, data: [], msg: "Internal SERVER error" });
    }
}

const counttotalorder = async (req, res) => {
    try {
        const data = await finalbooking.find({ status: "Completed" }).count();
        const data2 = await finalbooking.find().count();
        if (!data || !data2) {
            return res.send({ success: false, data: data, data2: data2, msg: "At This Time There is no active services" });
        }
        else {
            return res.send({ success: true, data: data, data2: data2, msg: "At This Time There is active services" });
        }
    } catch (error) {

        return res.send({ success: false, data: [], data2: [], msg: "Internal SERVER error" });
    }
}



module.exports = {
    adddata,
    getdatabyUserid,
    getdatabySpid,
    updatedatabyUserid,
    getActivebySpid,
    getactivebyUserid,
    getalldata,
    counttotalorder
}