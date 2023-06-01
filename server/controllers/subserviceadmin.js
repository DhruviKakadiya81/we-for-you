const subser = require('../models/subserviceadmin');


const addservicesadmin = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const { subname, serviceid } = req.body
        const serviceData = new subser({
            subname, serviceid, image: req.file.filename
        });
        const ser_result = await serviceData.save();
        res.send({ success: true, msg: "data added successfully", data: ser_result });
        console.log(ser_result);
    } catch (error) {
        res.send({ success: false, msg: error });
        console.log(error);
    }

}

const showservice = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const subserdata = await subser.find();
        if (subserdata !== null) {
            res.send({ success: true, msg: "sub services data", data: subserdata });
        }
        else {
            res.send({ success: false, msg: "not service" });
        }
    } catch (error) {
        res.send({ success: false, msg: error.msg });
        console.log(error);
    }
}

const showservicebyspid = async (req, res) => {
    try {
        console.log("data :== ", req.body);
        const spid = req.body.spid;
        const subserdata = await subser.find({ spid });
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

const updatesubser = async (req, res) => {
    try {

        console.log("data :== ", req.body);

        if (req.file !== undefined) {
            const { id, subname, serviceid } = req.body;
            //   const id = req.params.id;
            console.log(req.body);
            const updata = await subser.findByIdAndUpdate({ _id: id }, {
                $set: { subname, image: req.file.filename, serviceid }
            });
            if (updata !== null) {
                res.status(200).send({ success: true, msg: 'updated', data: updata });
            }
            else {
                res.send({ success: false, msg: "data" });
            }


        }
        else {

            const { id, subname, serviceid } = req.body;
            //   const id = req.params.id;
            console.log(req.body);
            const updata = await subser.findByIdAndUpdate({ _id: id }, {
                $set: { subname, serviceid }
            });
            if (updata !== null) {
                res.status(200).send({ success: true, msg: 'updated', data: updata });
            }
            else {
                res.send({ success: false, msg: "data" });
            }

        }
    } catch (error) {
        res.send({ success: false, msg: "data" });
        console.log(error);
    }
}

const deletesubser = async (req, res) => {
    try {
        console.log("data :== ", req.body.id);
        const { id } = req.body;
        const subserdata = await subser.findByIdAndDelete({ _id: id });
        console.log(subserdata)
        if (subserdata) {
            res.send({ success: true, msg: "deleted", data: subserdata });
        }
        else {
            res.send({ success: false, msg: "not deleted" });
        }
    } catch (error) {
        res.send({ success: false, msg: error.msg });
        console.log(error);
    }
}





module.exports = { addservicesadmin, showservice, showservicebyspid, updatesubser, deletesubser }