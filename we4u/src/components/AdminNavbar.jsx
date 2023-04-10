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
  return (
    <div className="container">
      <div style={{width: isOpen ? "200px" : "50px",height:"100vh"}} className="sidebar">
        <div className="top_section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">We4U</h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        <NavLink to="/dashboard" className={location.pathname==="/dashboard"?'active1 link':'link'}>
          <div className="icon">
            <FaTh/>
          </div>
          <div style={{display: isOpen ? "block" : "none"}} className="text">Dashboard</div>
        </NavLink>
        <div className="link">
          <div className="icon">
            <FaTh/>
          </div>
          <div style={{display: isOpen ? "block" : "none"}} className="text">Manage
          <i className="fas fa-angle-right dropdown" onClick={drop}></i>  
          <div className="sub_menu"  style={{display:isDrop?"block":"none"}}>
            <ul>
              <li className='sub_list'><Link to="/adminmanageservice" className={location.pathname==='/adminmanageservice'?"active1 sub_items":"sub_items"}>first</Link></li>
              <li className='sub_list'><Link to="/adminmanagecustomer" className={location.pathname==='/adminmanagecustomer'?"active1 sub_items":"sub_items"}>second</Link></li>
            </ul>
          </div>
          </div>
        </div>
        <div className="link">
          <div className="icon">
            <FaTh/>
          </div>
          <div style={{display: isOpen ? "block" : "none"}} className="text">Show
          <i className="fas fa-angle-right dropdown1"></i>  
          <div className="sub_menu"  style={{display:isDrop?"block":"none"}}>
            <ul>
              <li className='sub_list'><Link to="/adminmanageservice" className={location.pathname==='/adminmanageservice'?"active1 sub_items":"sub_items"}>first</Link></li>
              <li className='sub_list'><Link to="/adminmanagecustomer" className={location.pathname==='/adminmanagecustomer'?"active1 sub_items":"sub_items"}>second</Link></li>
            </ul>
          </div>
          </div>
        </div>
        <NavLink to="/cart" className={location.pathname==="/cart"?'active1 link':'link'}>
          <div className="icon">
            <FaTh/>
          </div>
          <div style={{display: isOpen ? "block" : "none"}} className="text">cart</div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  )
}

