import React, { useState } from "react";
import "../css/Navbar.css";

import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginData from "../services/LoginData";
import { Button, Modal } from 'react-bootstrap';
// import { FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
export const Navbar = () => {
  const location = useLocation();
  const nevigate = useNavigate();
  const [navCollapse, setNavCollapse] = useState(true);
  const [msg, setmsg] = useState();
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const [msg1, setmsg1] = useState();
  const [isshow1, invokemodel1] = useState(false);
  const initmodel1 = () => {
    return invokemodel1(!isshow);
  }
  const handleNav = () => {
    setNavCollapse(!navCollapse);
  }

  const handlelogout = () => {
    var id = localStorage.getItem("token");
    if (id == null) {
      // alert("Login first");
      setmsg("Login First!!");
      initmodel();
      // nevigate("/login");
    }
    else {
      setmsg1("Are You Sure Want To Logout??");
      initmodel1();
      localStorage.removeItem("token");
      // alert("logged out");
      nevigate("/login");
    }

  }

  const handlecart = async (event) => {
    event.preventDefault();
    var id = localStorage.getItem("token");
    if (id == null) {
      // alert("Login first");
      setmsg("Login First!!");
      initmodel();
      // nevigate("/login");
      event.preventDefault();
    }
    else {
      nevigate("/cart");
      event.preventDefault();
      const data = { id };
      const respo = await LoginData.sendauth(data);
      console.log("response====>", respo);
    }
  }

  const handleprofile = async (event) => {
    event.preventDefault();
    var id = localStorage.getItem("token");
    if (id == null) {
      // alert("you have to login first");
      setmsg("Login First!!");
      initmodel();
      // nevigate("/login");
      event.preventDefault();
    }
    else {
      nevigate("/profile");
      event.preventDefault();
      const data = { id };
      const respo = await LoginData.sendauth(data);
    }
  }
  return (
    <>
      <Modal show={isshow}  >
        <Modal.Header className='text-center'>
          <Modal.Title className='' >
            Login Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {msg}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="mx-3" onClick={initmodel}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isshow1}>
        <Modal.Header className='text-center'>
          <Modal.Title className='' >
            Logout Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {msg1}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="mx-3" onClick={initmodel1}>
            Yes
          </Button>
          <Button variant="danger" className="mx-3" onClick={initmodel1}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <img src="/images/we4U.png" width="100" height="50" className="c_nav_image" />
          <button className="navbar-toggler" type="button" onClick={handleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={navCollapse ? "collapse navbar-collapse justify-content-end menu_bar" : "navbar-collapse justify-content-end menu_bar"} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 reg_ul">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/custdash">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="dropdown nav-item">
                <Link className="nav-link" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false"> Register </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ zIndex: "0" }}>
                  <li><Link className="dropdown-item" to="/register">Register As Client</Link></li>
                  <li><Link className="dropdown-item" to="/regprof">Register As Professional</Link></li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <Link className="nav-link" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">Login</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/login">Login As Client</Link></li>
                  <li><Link className="dropdown-item" to="/loginasp">Login As Professional</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>

            <ul className="navbar-nav sm-icons">
              <li><Link className="nav-link" to="/cart" onClick={handlecart}><i className="fa-solid fa-cart-shopping fa-lg"></i></Link></li>
              <li><Link className="nav-link" to="/profile"><i className="fa-solid fa-user-gear fa-lg" onClick={handleprofile}></i></Link></li>
              <li><Link className="nav-link" to="/logout" onClick={handlelogout}><i className="fa-solid fa-right-from-bracket fa-lg"></i></Link></li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  );


};

