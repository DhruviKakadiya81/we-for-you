import React, { useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginData from "../services/LoginData";
import {Button, Modal } from 'react-bootstrap';
export const Ser_Pro_Navbar = () => {
  const location = useLocation();
  const nevigate = useNavigate();
  const [navCollapse, setNavCollapse] = useState(true);
  const [msg1, setmsg1] = useState();
    const [isshow1, invokemodel1] = useState(false);
    const initmodel1 = () => {
        return invokemodel1(!isshow1);
    }
  const handleNav = () => {
    setNavCollapse(!navCollapse);
  }

  const handlelogout = () => {
    var id = localStorage.getItem("sptoken");
    if (id == null) {
      alert("Login first");
      nevigate("/loginasp");
    }
    else {
      setmsg1("Are You Sure Want To Logout??");
      initmodel1();
      localStorage.removeItem("sptoken");
      nevigate("/loginsp");
    }

  }

  const handlecart = async (event) => {
    event.preventDefault();
    var id = localStorage.getItem("token");
    if (id == null) {
      alert("Login first");
      nevigate("/login");
      event.preventDefault();
    }
    else {
      nevigate("/cart");
      event.preventDefault();
      const data = { id };
      alert("id-----" + id);
      const respo = await LoginData.sendauth(data);
      alert(respo.data.data.email);
    }
  }
  return (
    <>

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

      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <img src="/images/we4U.png" width="100" height="50" className="c_nav_image" />
          <div className="d-md-none d-lg-none" onClick={handleNav}>
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className={navCollapse ? "collapse navbar-collapse justify-content-end menu_bar" : "navbar-collapse justify-content-end menu_bar"} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 reg_ul">
              <li className="nav-item">
                <Link className="nav-link" to="/sphome">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/serdash">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/yourser">Your services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ser_add_service">Add Service</Link>
              </li>
              <li class="dropdown nav-item">
                <Link className="nav-link" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false"> Register </Link>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/register">Register As Client</Link></li>
                  <li><Link className="dropdown-item" to="/regprof">Register As Professional</Link></li>
                </ul>
              </li>
              <li class="dropdown nav-item">
                <Link className="nav-link" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">Login</Link>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/login">Login As Client</Link></li>
                  <li><Link className="dropdown-item" to="/loginasp">Login As Professional</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactsp">Contact Us</Link>
              </li>
            </ul>
            <ul className="navbar-nav sm-icons">
              <li><Link className="nav-link" to="/ser_pro_profile"><i className="fa-solid fa-user-gear fa-lg"></i></Link></li>
              <li><Link className="nav-link" to="/logout" onClick={handlelogout}><i class="fa-solid fa-right-from-bracket fa-lg"></i></Link></li>
            </ul>
          </div>
        </div>
      </nav>

    </>

  )

}