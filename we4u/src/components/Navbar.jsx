import React, { useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginData from "../services/LoginData";
import { Modal } from 'react-bootstrap';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';
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

{/* <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <img src="/images/Logo.png" width="100" height="50" class="c_nav_image"/>
        <button className="navbar-toggler" type="button" onClick={handleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navCollapse?"collapse navbar-collapse justify-content-end":"navbar-collapse justify-content-end"} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="/regprof">Register As Professional</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact = {"true"}aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <ul className="navbar-nav sm-icons">
            <li><Link className="nav-link"><LoginButton/></Link></li>
            <li><Link className="nav-link" to="/cart" onClick={handlecart}><i className="fa-sharp fa-solid fa-cart-shopping fa-lg"></i></Link></li>
            <li><Link className="nav-link" to="/profile"><i class="fa-solid fa-user-gear fa-lg"></i></Link></li>
            <li><Link className="nav-link" to="/logout" onClick={handlelogout}><i className="fa-solid fa-right-from-bracket fa-lg"></i></Link></li>
          </ul>
        </div>
      </div>
    </nav> */}
    <nav class="navbar navbar-expand-md navbar-dark">



<div className="container-fluid">
        <img src="/images/Logo.png" width="100" height="50" className="c_nav_image"/>
        <button className="navbar-toggler" type="button" onClick={handleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navCollapse?"collapse navbar-collapse justify-content-end menu_bar":"navbar-collapse justify-content-end menu_bar"} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 reg_ul">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li class="dropdown nav-item">
            <Link className="nav-link" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false"> Register </Link>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to="/register">Register As Client</Link></li>
              <li><Link className="dropdown-item" to="/regprof">Register As Professional</Link></li>
            </ul>
          </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <ul className="navbar-nav sm-icons">
            <li class="dropdown nav-item">
            <Link className="nav-link" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user fa-lg"></i></Link>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to="/login">Login As Client</Link></li>
              <li><Link className="dropdown-item" to="/loginasp">Login As Professional</Link></li>
            </ul>
          </li>
            <li><Link className="nav-link" to="/cart" onClick={handlecart}><i class="fa-solid fa-cart-shopping fa-lg"></i></Link></li>
            <li><Link className="nav-link" to="/profile"><i className="fa-solid fa-user-gear fa-lg"></i></Link></li>
            <li><Link className="nav-link" to="/logout" onClick={handlelogout}><i class="fa-solid fa-right-from-bracket fa-lg"></i></Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
   
  
};

const LoginButton=()=>{
  const [isshow, invokemodel] = useState(false);
  
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  return(
    <>
    
     <i className="fa fa-user fa-lg log" aria-hidden="true" onClick={initmodel}></i>
    
      <Modal show={isshow} style={{overflowX:"scroll",width:"100%",marginTop:"0px"}} >
        <Modal.Header closeButton onClick={initmodel}>
          <Modal.Title className='' > 
            Login
          </Modal.Title>
        </Modal.Header>
      
          <Modal.Body>
            
             <Link className="nav-link" to="/login">Login as Customer</Link>
             <Link className="nav-link" to="/loginasp">Login as Professional</Link>
             
             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" className="mx-3" onClick={initmodel} style={{backgroundColor:"dark-grey"}}>
              CLOSE
            </Button>
            <Button variant=""  className="mx-3" type='submit' style={{backgroundColor:"red"}} >
              Delete
            </Button>
          </Modal.Footer>
      
      </Modal>
    
    </>
   
  )

  }

