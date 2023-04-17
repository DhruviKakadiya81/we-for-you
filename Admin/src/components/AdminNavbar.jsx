import {React,useState} from 'react';
import "../css/AdminNavbar.css"
import {FaBars,FaTh} from "react-icons/fa";
import {NavLink,Link, useLocation} from "react-router-dom";

export const AdminNavbar = ({children}) => {
  const location=useLocation();
  const[isOpen ,setIsOpen] = useState(true);
  const toggle = () => setIsOpen (!isOpen);
  const[isDrop,setIsDrop]=useState(true);
  const drop=()=>setIsDrop(!isDrop);
  const[isDrop1,setIsDrop1]=useState(true);
  const drop1=()=>setIsDrop1(!isDrop1);
  return (
    <>
    <div className="container-fluid">
      <div style={{width: isOpen ? "230px" : "50px",height:"100vh"}} className="sidebar">

        <div className="top_section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">We4U</h1>
          <div style={{marginLeft: isOpen ? "90px" : "0px"}} className="bars">
            <FaBars onClick={toggle} className="toggle-side"/>
          </div>
        </div>
        <NavLink Link to="/" className={location.pathname==="/"?'active1 link':'link'}>
          <div className="icon">
          <i className="fa-solid fa-chart-line"></i>
          </div>
          <div style={{display: isOpen ? "block" : "none"}} className="text">Dashboard</div>
        </NavLink>
        <div className="link">
          <div className="icon">
          <img src='images/Manage.png' width="35px" height="35px" style={{marginLeft:"-8px"}}></img>
          </div>
          <div style={{display: isOpen ? "block" : "none"}} className="text">Manage
          <i className="fas fa-angle-right dropdown" onClick={drop}style={{display:isDrop?"none":"block"}}></i>  
          <i className="fa-solid fa-chevron-down dropdown" onClick={drop} style={{display:isDrop?"block":"none"}}></i>  
          <div className="sub_menu"  style={{display:isDrop?"block":"none"}}>
            <ul>
              <li className='sub_list'><NavLink to="/adminmanageservice" className={location.pathname==='/adminmanageservice'?"active1 sub_items":"sub_items"}>Manage Services</NavLink></li>
              <li className='sub_list'><NavLink to="/adminmanagecustomer" className={location.pathname==='/adminmanagecustomer'?"active1 sub_items":"sub_items"}>Manage Customer</NavLink></li>
              <li className='sub_list'><NavLink to="#" className={location.pathname==='#'?"active1 sub_items":"sub_items"}>Manage ServiceProvider</NavLink></li>
              <li className='sub_list'><NavLink to="#" className={location.pathname==='#'?"active1 sub_items":"sub_items"}>Manage City</NavLink></li>
              <li className='sub_list'><NavLink to="#" className={location.pathname==='#'?"active1 sub_items":"sub_items"}>Manage Area</NavLink></li>
            </ul>
          </div>
          </div>
        </div>
        <div className="link">
          <div className="icon">
          <i class="fa-solid fa-list-check"></i>
          </div>
          <div style={{display: isOpen ? "block" : "none"}} className="text">Show<br/>
          <i className="fas fa-angle-right dropdown1" onClick={drop1} style={{display:isDrop1?"none":"block"}}></i>
          <i className="fa-solid fa-chevron-down dropdown1" onClick={drop1} style={{display:isDrop1?"block":"none"}}></i>  
          <div className="sub_menu" style={{display:isDrop1?"block":"none"}}>
            <ul>
              <li className='sub_list'><NavLink to="#" className={location.pathname==='#'?"active1 sub_items":"sub_items"}>Show Services</NavLink></li>
              <li className='sub_list'><NavLink to="#" className={location.pathname==='#'?"active1 sub_items":"sub_items"}>Show Customers</NavLink></li>
              <li className='sub_list'><NavLink to="#" className={location.pathname==='#'?"active1 sub_items":"sub_items"}>Show ServiceProvider</NavLink></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
    </>
  )
}
