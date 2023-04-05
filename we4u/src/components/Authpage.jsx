import React from 'react'
import LoginData from '../services/LoginData'
export const Authpage = () => {
    const data = async(event)=>{
        alert("hello");
       let auth = localStorage.getItem("token");
        console.log(auth);
       const respo = await LoginData.sendauth(auth);
        alert(respo.data.data);
    }
  return (
    <>
    <div onLoad={data}>hello</div>
    </>
    
  )
}
