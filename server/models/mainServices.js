const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    s_name:{
        type:String,
        required:true
    },
    s_icon:{
        type:String,
        required:true
    }
});
const userModel = new mongoose.model("User",userSchema);
module.exports = userModel;