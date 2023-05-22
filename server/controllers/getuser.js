const usertbl = require("../models/userModel");
const sptable = require("../models/serviceprovider");

const getuserlogin = async(req,res)=>{
    try{
        let userId = req.id;
        console.log("userID===>",userId);
        const data2 = await usertbl.findById(userId);
        // const data2 = await user.findById(userId).select("-password");
        console.log("hello");
       return res.status(200).send({success : true,data:data2});
        
    }catch(error){
        console.log(error);
    }
}

const getsplogin = async(req,res)=>{
    try{
        let spid = req.id;
        console.log("spid===>",spid);
        const data = await sptable.findById(spid);
        console.log("testing-===",data);
        return res.status(200).send({success : true,data:data});
        
    }catch(error){
        console.log(error);
    }
}
module.exports = {
    getuserlogin,
    getsplogin
}