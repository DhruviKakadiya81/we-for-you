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
    
    const handleauth = (event)=>{
        //localStorage.clear();
        let ls = localStorage.getItem("token");
        alert(ls);
        if(ls == null){
            alert("hello");
            nevigate1("/login");
            event.preventDefault();

        }
        else
        {
            nevigate1("/cart");
        }
    }
  return (
    <>
    
     <a href="/register">register</a>||
     <a href="/login">login</a>||
     <a href="/cart" onClick={handleauth}>cart</a>||
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
