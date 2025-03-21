const cntuser = require("../models/contactsp");

const adddetail = async (req, res) => {
    try {
        const { firstname, lastname, phone, email, message } = req.body;
        const data = new cntuser({
            firstname, lastname, phone, email, message
        });
        const savedata = await data.save();
        if (savedata !== null) {
            res.send({ success: true, data: savedata })
        }
        else {
            res.send({ success: false, msg: "all filels are required" })
        }
        res.send()
    } catch (error) {
        res.send({ success: false, data: error.message })
    }
}
const showspmsg = async (req, res) => {
    try {
        const data = await cntuser.find();
        if (data.length >= 0) {
            return res.send({ success: false, msg: "No Data is Found", data: data });
        }
        else {
            return res.send({ success: true, msg: "Data", data: data });
        }

    } catch (error) {
        res.send({ success: false, data: error.message })
    }
}
module.exports = {
    adddetail,
    showspmsg
} 