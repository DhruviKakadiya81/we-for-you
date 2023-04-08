import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Login } from './Login';
import { Register } from './Register';
import { Authpage } from './Authpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginData from '../services/GetUser'
import { Forget } from './Forget';
import { Verify } from './Verify';

export const ClientIndex = () => {
    const nevigate1 = useNavigate();
    const goBack = ()=>{
        nevigate1(-1);
    }
    
   
  return (
    <>
     <a href="./register">Register</a>||
     <a href="/login">Login</a>|| 
     {/* <a href="/cart" onClick={handleauth}>cart</a>|| */}
    
     <button onClick={goBack}>back</button>
    
     <Routes>
          <Route path="/register" element={<Register />}>
               </Route>
           <Route path="/login" element={<Login />}>
              </Route>
           <Route path="/cart" element={<Authpage/>}>
              </Route>
           <Route path="/forget" element={<Forget/>}>
              </Route>
           <Route path="/verify" element={<Verify/>}>
              </Route>
     </Routes>
    
    </>
   
  )
}