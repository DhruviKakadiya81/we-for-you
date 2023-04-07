import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className='row'>
        <div className="col-12 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <img src="Images/Logo.png" width="100" height="70"/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink exact className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/login">
              <i class="fa fa-user" aria-hidden="true"></i> Login
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/cart">
              <i class="fa-sharp fa-solid fa-cart-shopping fa-bounce fa-lg"></i>
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
