const nodemailer = require("nodemailer");
const user = require("../models/userModel");
const bcrypt = require("bcryptjs");

var email;
var x;
   const generateotp = ()=>{
     x = Math.floor(100000 + Math.random() * 900000);
     setInterval(generateotp,60000);
     console.log(x);
     
     return x;
   }
   


const sendotp = async (req, res) => {
    email = req.body.email;
    send = generateotp();
    console.log(email);
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 587,
        secure: true,
        auth: {
            user: 'mavanikrupa252@gmail.com',
            pass: 'kvwknnyyjakjndad'
        }
    });

    var mailoption = {
        from: 'mavanikrupa252@gmail.com',
        to: email,
        subject: 'sending otp',
        text: `your otp ${send}`
    };


    transporter.sendMail(mailoption, function (err, info) {
        if (err) {
            console.log(err);
            res.send({ success: false, msg: "otp sending fail" });
        }
        else {
            console.log(info);
           
            res.send({ success: true, msg: "otp sending success" });
          
        }
        
    })
    
}


const getotp = async (req, res) => {
    var otp = req.body.otp;
    console.log("otp : " + otp);
    console.log("x : " + x);
    

    if (otp == x) {
        console.log("matched");
        var pass = '';
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';

        for (let i = 1; i <= 6; i++) {
            var char = Math.floor(Math.random()
                * str.length + 1);

            pass += str.charAt(char)
        }
        console.log("generated pass : " + pass);
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(pass, salt);
        console.log(hashPass);
        console.log(email);
        try {
            var data = await user.findOneAndUpdate({ email }, { password: hashPass }, { new: true });
            console.log(data);
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                port: 587,
                secure: true,
                auth: {
                    user: 'mavanikrupa252@gmail.com',
                    pass: 'kvwknnyyjakjndad'
                }
            });

            var mailoption = {
                from: 'mavanikrupa252@gmail.com',
                to: email,
                subject: 'password recovery data',
                text: `your email: ${email} \n your password is : ${pass} \n we recomended that you change the password letter on`
            };


            transporter.sendMail(mailoption, function (err, info) {
                if (err) {
                    console.log(err);
                    res.send({ success: false, msg: "otp sending fail" });
                }
                else {
                    console.log(info);
                    res.send({ success: true, msg: "your data is sended successfully on your email" });
                }
            })

        } catch (error) {
            console.log(error);
        }

    }
    else {
        console.log("not matched");
        res.send({ success: false, msg: "otp not matched resend otp" });
    }
}

module.exports = { sendotp, getotp };