const mongoose = require("mongoose");

const sp_Schema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
    },
    time:{
        type:Date,
    },
    forget_token:{
        type:String,
    }
});
const spModel = new mongoose.model("Service_Provider",sp_Schema);
module.exports = spModel;