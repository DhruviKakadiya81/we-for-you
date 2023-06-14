const nodemailer = require("nodemailer");
const user = require("../models/userModel");
const sp = require("../models/serviceprovider");
const bcrypt = require("bcryptjs");
const crypto = require('crypto');

const sendotp = async (req, res) => {
    console.log(req.body);
    const { email, state } = req.body;
    if (state === 1) {
        var x = Math.floor(100000 + Math.random() * 900000);
        const forget_token = crypto.randomBytes(16).toString('hex');
        try {
            var userinfo = await user.findOne({ email });
            if (userinfo == null) {
                return res.send({ success: false, msg: "Otp sending fail-This user is not registered !!" });
            }
            else {
                try {
                    var updated = await user.updateMany({ email }, { $set: { otp: x, time: Date.now(), forget_token: forget_token } }, { new: true });
                } catch (error) {
                    return res.send({ success: false, msg: "Otp Sending fail..Some issues are there" });
                }
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    port: 587,
                    secure: true,
                    auth: {
                        user: 'we4uservices3@gmail.com',
                        pass: 'soyhmwqiboveeytq'
                    }
                });


                var mailoption = {
                    from: 'we4uservices3@gmail.com',
                    to: email,
                    subject: 'One-Time Password (OTP) for Verification',
                    text: `Dear ${email},\n
            As part of our security measures, we have implemented a One-Time Password (OTP) verification process for your account. Please find below the OTP for verification:\n
            OTP: ${x}\n
          
            Please note that this OTP is valid for a single use only and will expire after a minute. Kindly enter the OTP on the verification page or input field provided on our platform.
            If you did not request this OTP or have any concerns about the security of your account, please contact our customer support immediately.
            Thank you for your cooperation in maintaining the security of your account.\n\n
            
            Sincerely,\n
            Mangager\n
            We For YOU\n
            we4uservices3@gmail.com`
                };

                transporter.sendMail(mailoption, function (err, info) {
                    if (err) {
                        return res.send({ success: false, msg: "Otp sending fail" });
                    }
                    else {
                        // console.log(info);
                        // console.log("email sended", forget_token)
                        return res.send({ success: true, msg: `Otp is Sended on ${email} Successfully`, data: forget_token });
                    }

                })
            }
        } catch (error) {
            console.log(error);
            res.send({ success: false, msg: "Internal Server Issue" });
        }
    }
    else {

        var x = Math.floor(100000 + Math.random() * 900000);

        const forget_token = crypto.randomBytes(16).toString('hex');
        try {
            var userinfo = await sp.findOne({ email });
            console.log("userinfo : " + userinfo);
            console.log("email : ", email);
            if (userinfo == null) {
                console.log("not found");
                res.send({ success: false, msg: "Otp sending fail-this user is not registered" });
            }
            else {
                try {
                    console.log(forget_token);
                    var updated = await sp.updateOne({ email }, { $set: { otp: x, time: Date.now(), forget_token: forget_token } }, { new: true });

                } catch (error) {
                    console.log(error);
                }
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    port: 587,
                    secure: true,
                    auth: {
                        user: 'we4uservices3@gmail.com',
                        pass: 'soyhmwqiboveeytq'
                    }
                });
                var link = "http://localhost:3000/verify";

                var mailoption = {
                    from: 'we4uservices3@gmail.com',
                    to: email,
                    subject: 'One-Time Password (OTP) for Verification',
                    text: `Dear ${email},\n
            As part of our security measures, we have implemented a One-Time Password (OTP) verification process for your account. Please find below the OTP for verification:\n
            OTP: ${x}\n
            ${link}
            Please note that this OTP is valid for a single use only and will expire after a minute. Kindly enter the OTP on the verification page or input field provided on our platform.
            If you did not request this OTP or have any concerns about the security of your account, please contact our customer support immediately.
            Thank you for your cooperation in maintaining the security of your account.\n\n
            
            Sincerely,\n
            Mangager\n
            We For YOU\n
            we4uservices3@gmail.com`
                };

                transporter.sendMail(mailoption, function (err, info) {
                    if (err) {
                        // console.log(err);
                        res.send({ success: false, msg: "otp sending fail" });
                    }
                    else {
                        // console.log(info);
                        // console.log("email sended", forget_token)
                        res.send({ success: true, msg: "otp sending success", data: forget_token });
                    }

                })
            }
        } catch (error) {
            console.log(error);
            res.send({ success: false, msg: "otp sending fail-this user is not registered" });
        }
    }



}



const getotp = async (req, res) => {
    // var otp = req.body.otp;
    // var email = req.body.email;
    // var token = req.body.token;

    var { otp, email, token, state } = req.body;
    // console.log("otp : " + otp);
    // console.log("email : " + email);
    // console.log("token : " + token);
    if (state === 1) {
        try {
            const getuserinfo = await user.findOne({ email, token });
            console.log("otp is:" + getuserinfo.otp);
            console.log(getuserinfo);
            if (otp == getuserinfo.otp) {
                var time2 = getuserinfo.time;
                var curtime = Date.now();
                var diff = Math.round((curtime - time2) / 60000);
                console.log("DIFF :" + diff);
                if (diff <= 1) {
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
                    // console.log(email);
                    try {
                        var email = getuserinfo.email;
                        var userinfo = await user.findOneAndUpdate({ email }, { password: hashPass }, { new: true });
                        console.log(userinfo);
                        var transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            port: 587,
                            secure: true,
                            auth: {
                                user: 'we4uservices3@gmail.com',
                                pass: 'soyhmwqiboveeytq'
                            }
                        });

                        var mailoption = {
                            from: 'we4uservices3@gmail.com',
                            to: email,
                            subject: 'Login Details for Your Account',
                            text: `Dear ${email},
                                
                                Congratulations! Your account has been successfully verified. As requested, here are your login details:
                                
                                Username: ${email},
                                Password: ${pass}
                                
                                Please use the above credentials to log in to your account at   We For You Services. We recommend that you change your password after logging in for the first time to ensure the security of your account.
                                If you have any questions or need further assistance, please do not hesitate to contact our customer support team at [Insert Contact Information].
                                Thank you for choosing   We For You Services for your   We For You Services account. We appreciate your trust and look forward to serving you.
                                
                                Best regards,
                                Manager
                                We For You Services
                                we4uservices3@gmail.com
                                `
                        };


                        transporter.sendMail(mailoption, function (err, info) {
                            if (err) {
                                console.log(err);
                                res.send({ success: false, msg: "otp sending fail" });
                            }
                            else {
                                console.log(info);
                                res.send({ success: true, msg: "your userinfo is sended successfully on your email" });
                            }
                        })
                    }
                    catch (error) {
                        console.log(error);
                        res.send({ success: false, msg: "updation failed" });
                    }
                }
                else {
                    console.log("not matched");
                    res.send({ success: false, msg: "time up resend otp" });
                }

            } else {
                console.log("otp is not match");
                res.send({ success: false, msg: "otp is not matched resend otp" });
            }


        } catch (error) {
            res.send({ success: false, msg: "id is not matched resend otp" });
        }
    }
    else {
        try {
            const getuserinfo = await sp.findOne({ email, token });
            console.log("otp is:" + getuserinfo.otp);
            console.log(getuserinfo);
            if (otp == getuserinfo.otp) {
                var time2 = getuserinfo.time;
                var curtime = Date.now();
                var diff = Math.round((curtime - time2) / 60000);
                console.log("DIFF :" + diff);
                if (diff <= 1) {
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
                    // console.log(email);
                    try {
                        var email = getuserinfo.email;
                        var userinfo = await sp.findOneAndUpdate({ email }, { password: hashPass }, { new: true });
                        console.log(userinfo);
                        var transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            port: 587,
                            secure: true,
                            auth: {
                                user: 'we4uservices3@gmail.com',
                                pass: 'soyhmwqiboveeytq'
                            }
                        });

                        var mailoption = {
                            from: 'we4uservices3@gmail.com',
                            to: email,
                            subject: 'Login Details for Your Account',
                            text: `Dear ${email},
                                
                                Congratulations! Your account has been successfully verified. As requested, here are your login details:
                                
                                Username: ${email},
                                Password: ${pass}
                                
                                Please use the above credentials to log in to your account at   We For You Services. We recommend that you change your password after logging in for the first time to ensure the security of your account.
                                If you have any questions or need further assistance, please do not hesitate to contact our customer support team at [Insert Contact Information].
                                Thank you for choosing   We For You Services for your   We For You Services account. We appreciate your trust and look forward to serving you.
                                
                                Best regards,
                                Manager
                                We For You Services
                                we4uservices3@gmail.com
                                `
                        };


                        transporter.sendMail(mailoption, function (err, info) {
                            if (err) {
                                console.log(err);
                                res.send({ success: false, msg: "otp sending fail" });
                            }
                            else {
                                console.log(info);
                                res.send({ success: true, msg: "your userinfo is sended successfully on your email" });
                            }
                        })
                    }
                    catch (error) {
                        console.log(error);
                        res.send({ success: false, msg: "updation failed" });
                    }
                }
                else {
                    console.log("not matched");
                    res.send({ success: false, msg: "Time up resend otp" });
                }

            } else {
                console.log("otp is not match");
                res.send({ success: false, msg: "otp is not matched resend otp" });
            }


        } catch (error) {
            res.send({ success: false, msg: "id is not matched resend otp" });
        }
    }

}

module.exports = { sendotp, getotp };