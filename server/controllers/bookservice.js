const bookser = require("../models/bookservicescart");

const bookservice = async (req, res) => {
    try {
        const { spid, userid, serviceid } = req.body

        const data = new bookser({
            spid, userid, serviceid
        });
        const savedata = await data.save();
        res.send({ success: true, data: savedata });
    } catch (error) {
        res.send({ success: false, data: error.message });
    }
}

const showcart = async (req, res) => {
    try {
        const { userid } = req.body
        const cartdata = await bookser.find({ userid }).populate('userid').populate('spid').populate({
            path: 'serviceid', populate: {
                path: 'subname', model: 'SubServiceAdmin'
            }
        });
        res.send({ success: true, data: cartdata });
    } catch (error) {
        res.send({ success: false, data: error.message, duplicate: true });
    }
}

const deleteintocart = async (req, res) => {
    try {
        const id = req.body.id;
        const cartdata = await bookser.findByIdAndDelete({ _id: id })
        if (cartdata) {
            res.send({ success: true, data: cartdata });
        }
        else {
            res.send({ success: false, data: 'not successfully deleted' });
        }

    } catch (error) {

    }
}
module.exports = {
    bookservice, showcart, deleteintocart
}