const userp = require("../models/profile");
const user = require("../models/userModel");
const actsp = require("../models/spDetails");
const sp = require("../models/serviceprovider");
const mainser = require("../models/mainServices");
const subser = require("../models/subserviceadmin");
const finalBooking = require("../models/finalbooking");

const total = async (req, res) => {
    try {
        const totalactiveuser = await userp.find().count();
        const totaluser = await user.find().count();
        const totalsp = await sp.find().count();
        const totalactiveusp = await actsp.find().count();
        const totalmain = await mainser.find().count();
        const totalsub = await subser.find().count();
        const completed = await finalBooking.find({ status: "Completed" }).count();
        const totalorder = await finalBooking.find().count();

        const data = { totaluser, totalactiveuser, totalsp, totalactiveusp, totalmain, totalsub, completed, totalorder }
        return res.json({ success: true, data: data })
    } catch (error) {
        return res.json({ success: false })
    }
}


module.exports = {
    total
}
