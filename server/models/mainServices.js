const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    s_name:{
        type:String,
        required:true
    },
    s_icon:{
        type:String,
        required:true
    }
});
const mainService = new mongoose.model("Service",serviceSchema);
module.exports = mainService;