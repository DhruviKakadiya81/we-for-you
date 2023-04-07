import React from 'react'
import { useState } from 'react';
import LoginData from '../services/LoginData';
export const Verify = () => {
    const [otp, setotp] = useState('');
    const verifyotp = async(event) => {
           event.preventDefault();
          
            let sendotp = {otp}
           // alert(sendotp);
            const respo = await LoginData.getotp(sendotp);
            alert(respo.data.msg);

    }


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
        
        <button type="submit" value="register" style={{borderRadius:"10px"}}>
           verify
        </button>
        <p><strong>Goto Login Page?</strong><a href="/login">Login Page</a></p>
        <span></span>
      </form>
    </>
  )
}
