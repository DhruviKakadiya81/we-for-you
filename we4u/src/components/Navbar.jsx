import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className='row'>
        <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <img src="./" width="100" height="70"/>
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
            <li className="nav-item">
              <NavLink activeClassName="menu_active" exact className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
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
