const mongoose = require("mongoose");

const sp_Schema = new mongoose.Schema({
    s_email:{
        type:String,
        required:true
    },
    s_password:{
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