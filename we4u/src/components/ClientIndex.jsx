import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Login } from './Login';
import { Register } from './Register';
import { Authpage } from './Authpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const ClientIndex = () => {
    const nevigate1 = useNavigate();
    const goBack = ()=>{
        nevigate1(-1);
    }
    
  return (
    <>
    
     <a href="/register">register</a>||
     <a href="/login">login</a>||
     <a href="/cart">cart</a>||
     <button onClick={goBack}>back</button>
    
     <Routes>
          <Route path="/register" element={<Register />}>
               </Route>
           <Route path="/login" element={<Login />}>
              </Route>
           <Route path="/cart" element={<Authpage/>}>
              </Route>
     </Routes>
    
    
    </>
   
  )
}
