const finalbooking = require('../models/finalbooking');

const qrcode = require('qrcode-terminal');
const adddata = async (req, res) => {
    try {
        console.log("data of booking service => ", req.body);
        const { spid, userid, serviceid, mobileno, date, hour, minutes } = req.body
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

                const result = await book(spid, userid, serviceid, mobileno, date, hour, minutes);
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
            const result = await book(spid, userid, serviceid, mobileno, date, hour, minutes);
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


const book = async (spid, userid, serviceid, mobileno, date, hour, minutes) => {

    try {
        const bookingdata = new finalbooking({
            spid, userid, serviceid, mobileno, date, hour, minutes
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
module.exports = {
    adddata
}