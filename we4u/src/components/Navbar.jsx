import React from "react";
import "../css/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginData from "../services/LoginData";

export const Navbar = () => {
  const location=useLocation();
  const nevigate = useNavigate();
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
    <div className="container-fluid nav_bg" id="main_div_nav">
      <div className='row'>
        <div className="col-12 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <img src="Images/Logo.png" width="100" height="70"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="nav_toggle">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
            <li className="nav-item mx-2">
              <NavLink exact="true" className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink exact="true" className="nav-link" aria-current="page" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/login">
              <i className="fa fa-user" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" id="nav_r1" to="/cart" onClick={handlecart}>
              <i className="fa-sharp fa-solid fa-cart-shopping fa-bounce fa-lg"></i>
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/logout">
              <i className="fa-solid fa-right-from-bracket fa-lg" onClick={handlelogout}></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
      </div>
    </div>
  );
};
