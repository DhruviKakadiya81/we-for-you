import React, { useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginData from "../services/LoginData";


export const Navbar = () => {
  const location=useLocation();
  const nevigate = useNavigate();
  const [navCollapse,setNavCollapse]=useState(true);
  const handleNav=()=>{
    setNavCollapse(!navCollapse);
  }

  const handlelogout = () =>{
    var id = localStorage.getItem("token");
    if(id == null){
      alert("Login first");
        nevigate("/login");
    }
    else{
      localStorage.clear();
      alert("logged out");
      nevigate("/login");
    }
      
  }

  const handlecart =async(event)=>{
    event.preventDefault();
    var id = localStorage.getItem("token");
    if(id == null){
        alert("Login first");
        nevigate("/login");
        event.preventDefault();
    }
    else
    {
        nevigate("/cart");
        event.preventDefault();
        const data = {id};
        alert("id-----"+ id);
        const respo = await LoginData.sendauth(data);
         alert(respo.data.data.email);
    }
}
  return (
    <>

<nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-fluid">
        <img src="/images/Logo.png" width="100" height="50" class="c_nav_image"/>
        <button class="navbar-toggler" type="button" onClick={handleNav}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={navCollapse?"collapse navbar-collapse justify-content-end":"navbar-collapse justify-content-end"} id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <Link class="nav-link" to="/regprof">Register As Professional</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" exact = {"true"}aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register">Register</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <ul class="navbar-nav sm-icons">
            <li><Link class="nav-link" to="/login"><i className="fa fa-user fa-lg" aria-hidden="true"></i></Link></li>
            <li><Link class="nav-link" to="/cart" onClick={handlecart}><i className="fa-sharp fa-solid fa-cart-shopping fa-lg"></i></Link></li>
            <li><Link class="nav-link" to="/profile"><i class="fa-solid fa-user-gear fa-lg"></i></Link></li>
            <li><Link class="nav-link" to="/logout" onClick={handlelogout}><i className="fa-solid fa-right-from-bracket fa-lg"></i></Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
