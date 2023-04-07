import React from 'react'
import { useState } from 'react'
import LoginData from '../services/LoginData';
import { useNavigate } from 'react-router';

export const Forget = () => {
    const [email, setEmail] = useState('');
    let nevigate = useNavigate();

    const handleotp = async(event)=>{
        event.preventDefault();
        let remail = {email};
        // alert(remail);
        const respo = await LoginData.getemail(remail);
        alert(respo.data.msg);
        nevigate("/verify");
        //alert(respo.data.msg);
        


    }
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
}
