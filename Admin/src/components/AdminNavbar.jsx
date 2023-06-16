import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaTable,
  FaCaretDown,
  FaCaretRight,
  FaPlus,
  FaPlusSquare,
  FaList,
} from "react-icons/fa";
// import "../../../Admin/src/css/AdminNavbar.css"
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Tooltip } from "@material-ui/core"
import {
  withStyles,
  MuiThemeProvider
} from "@material-ui/core/styles"

const BlackTooltip = withStyles({
  tooltip: {
    color: "white",
    backgroundColor: "rgb(50,50,50)",
    fontSize: "15px",
    marginLeft: "63px",
    marginTop: "-20px"
  }
})(Tooltip);

export const AdminNavbar = ({ children }) => {
  const location = useLocation();
  const [isDrop, setIsDrop] = useState(false);
  const drop = () => setIsDrop(!isDrop);
  const [isDrop1, setIsDrop1] = useState(false);
  const drop1 = () => setIsDrop1(!isDrop1);
  const [isOpen, setIsOpen] = useState(false);
  // const [isWidth,setWidth]=useState("235px");
  // const [counter,setCounter]=useState(true);
  // const onhover=()=>{
  //   setCounter(!counter);
  //   // alert(counter);
  // }

  const toggle = () =>
    setIsOpen(!isOpen);

  return (
    <>
      <div className="container-fluid">
        <div style={{ width: isOpen ? "235px" : "65px", height: "100vh" }} className={isOpen ? "sidebar active1" : "sidebar"}>
          <div className="top_section">
            <img src='images/we4U.png' height="65px" width="100px" style={{ display: isOpen ? "block" : "none" }} />
            {/* <h1 className="logo">We4U</h1> */}
            <div style={{ marginLeft: isOpen ? "98px" : "7px" }} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <NavLink to="/dashboard" className="link">
            <div className="icon"><FaTh onClick={toggle} style={{ cursor: "pointer" }} /><span className='span_class'>Dashboard</span></div>
            <div style={{ display: isOpen ? "block" : "none", cursor: "pointer" }} className="link_text">Dashboard</div>
          </NavLink>
          <div className="link">
            <div className="icon">
              <FaPlusSquare onClick={toggle} style={{ cursor: "pointer" }} /> <span className='span_class'>Add</span>
            </div>
            <div className="link_text" style={{ display: isOpen ? "block" : "none", cursor: "pointer" }} onClick={drop}>Add
              <FaCaretDown onClick={drop} style={{ display: isDrop ? "block" : "none", cursor: "pointer" }} className='dropdownclose' />
              <FaCaretRight onClick={drop} style={{ display: isDrop ? "none" : "block", cursor: "pointer" }} className='dropdown' />
              <div className="sub_menu mt-3" style={{ display: isDrop ? "block" : "none" }} >
                <div className="sub_list px-1 py-2"><NavLink to="/adminmanageservice" className="sub_items">Add Services</NavLink></div>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="icon">
              <FaList onClick={toggle} style={{ cursor: "pointer" }} /><div className='span_class'>Manage</div>
            </div>
            <div className="link_text" style={{ display: isOpen ? "block" : "none", cursor: "pointer" }} onClick={drop1}  >Manage
              <FaCaretDown onClick={drop1} style={{ display: isDrop1 ? "block" : "none", cursor: "pointer" }} className='dropdown1close' />
              <FaCaretRight onClick={drop1} style={{ display: isDrop1 ? "none" : "block", cursor: "pointer" }} className='dropdown1' />
              <div className="sub_menu mt-3" style={{ display: isDrop1 ? "block" : "none" }}>
                <div className="sub_list px-1 py-1"><NavLink to="/showservice" className="sub_items">Services</NavLink></div>
                <div className="sub_list px-1 py-1"><NavLink to="/adminmanagecustomer" className="sub_items">Customers</NavLink></div>
                <div className="sub_list px-1 py-1"><NavLink to="/managesp" className="sub_items">ServiceProvider</NavLink></div>
                <div className="sub_list px-1 py-1"><NavLink to="/managecity" className="sub_items">City</NavLink></div>
                <div className="sub_list px-1 py-1"><NavLink to="/managearea" className="sub_items">Area</NavLink></div>
                <div className="sub_list px-1 py-1"><NavLink to="/managesubser" className="sub_items">Sub service</NavLink></div>
              </div>
            </div>
          </div>
        </div>
        <main>{children}</main>
        {/* <div className='main_container' style={{ width: isOpen ? "calc(1570px - 270px)" : "calc(1535px - 65px)",height:"100vh"}}>
            <div className='main_container'>
            {children}
            </div> */}
      </div>
    </>
  );
};