const usertbl = require("../models/userModel");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

const register = async(req,res)=>{
    
    const errors = validationResult(req);
    console.log("hello");
    
    if(!errors.isEmpty()){
        console.log("hello");
        return res.status(400).json({errors:errors.array()});
    }
    else{
       
            let checkUser = await usertbl.findOne({email:req.body.email});
            console.log("find User  : " +checkUser );

            if(checkUser){
                console.log("sorry a user with this email is already exist");
               return res.status(200).send({ success : false, msg: "sorry a user with this email is already exist" });
            }
            else{
                const salt = await bcrypt.genSalt(10);
                const password = req.body.password;
                const hashPass = await bcrypt.hash(password,salt);
                const userdata = req.body;
                try {
                    const registerData = new usertbl({
                        email : req.body.email,
                        password:hashPass
                    });
                    const regResult = await registerData.save();
                    console.log(regResult);
                    res.status(200).send({success : true, msg:"inserted successfully"});
                    
                } catch (error) {
                    console.log(error);
                    return res.status(400).send({ success : false, msg: error });
                }
            }
           
           

    }
  
   
}
module.exports ={register};

