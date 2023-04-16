const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
const userModel = new mongoose.model("User",userSchema);
module.exports = userModel;