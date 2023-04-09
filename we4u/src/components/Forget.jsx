import React from 'react'
import { useState } from 'react'
import LoginData from '../services/LoginData';
import { useNavigate } from 'react-router';
import axios from 'axios';

export const Forget = () => {
    const [email, setEmail] = useState('');
    const [state, setState] = useState(1);
    const [otp, setotp] = useState('');
    const [token,setToken] = useState('');

    let nevigate = useNavigate();

    const handleotp = async(event)=>{
        console.log('milan');
        event.preventDefault();
        console.log(email);
        let remail = {email};
        console.log(remail);
        try {
            console.log('here');
            const respo = await LoginData.getemail(email);
            console.log('data', respo);
            // alert(respo.data.msg);
            // setToken(respo.data.data);
            setState(2);
          } catch (error) {
            console.log("error" + error);
            console.error(error);
          }
     }
    
        const verifyotp = async (event) => {
            event.preventDefault();
            let sendotp = { email , otp , token};
            console.log(sendotp);
            const respo = await LoginData.getotp(sendotp);
            alert(respo.data.msg);
            setState(3);
        }
    
     if(state === 1){
        return (
            <>
                 <h1>Recover your Password</h1>
                  <form action="" method="post" onSubmit={handleotp}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  
                  <button type="submit" value="register" style={{borderRadius:"10px"}}>
                    Send OTP
                  </button>
                  <p><strong>Goto Login Page?</strong><a href="/login">Login Page</a></p>
                  <span></span>
                </form>
            </>
            )
     }else if(state === 2){
        return (
            <>
                <h1>verify your otp</h1>
                <form action="" method="" onSubmit={verifyotp}>
                    <input
                        type="number"
                        placeholder="enter otp"
                        name="otp"
                        onChange={(event) => setotp(event.target.value)}
                    />
    
                    <button type="submit" value="register" style={{ borderRadius: "10px" }}>
                        verify
                    </button>
                    <p><strong>Goto Login Page?</strong><a href="/login">Login Page</a></p>
                    <span></span>
                </form>
            </>
        )
     }else{
        return (
            <>
               <div>password reset successful</div>
            </>
        )
     }

}
