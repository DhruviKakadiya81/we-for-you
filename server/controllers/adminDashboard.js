const userp = require("../models/profile");
const user = require("../models/userModel");
const actsp = require("../models/spDetails");
const sp = require("../models/serviceprovider");
const mainser = require("../models/mainServices");
const subser = require("../models/subserviceadmin");

const total = async (req, res) => {
    try {
        const totalactiveuser = await userp.find().count();
        const totaluser = await user.find().count();
        const totalsp = await sp.find().count();
        const totalactiveusp = await actsp.find().count();
        const totalmain = await mainser.find().count();
        const totalsub = await subser.find().count();

        const data = { totaluser, totalactiveuser, totalsp, totalactiveusp, totalmain, totalsub }
        return res.json({ success: true, data: data })
    } catch (error) {
        return res.json({ success: false })
    }
}


module.exports = {
    total
}
