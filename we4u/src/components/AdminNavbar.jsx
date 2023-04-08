import React, { Children, useState } from 'react';
import "../css/AdminNavbar.css";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { FaCommentAlt, FaRegChartBar, FaTh,FaUserAlt,FaBars, FaCartPlus, FaCartArrowDown, FaRegistered }from "react-icons/fa";
import { NavLink,Link } from 'react-router-dom';

export const AdminNavbar = ({Children}) => {
//     const{isOpen,setIsOpen}=useState(false);
//     const toggle=()=>setIsOpen(!isOpen);
//     const menuItem=[
//     {
//         path:"/",
//         name:"Home",
//         icon:<FaTh/>
//     },
//     {
//         path:"/login",
//         name:"Login",
//         icon:<FaUserAlt/>
//     },
//     {
//         path:"/dashboard",
//         name:"Dashboard",
//         icon:<FaRegistered/>
//     },
//     {
//         path:"/register",
//         name:"Register",
//         icon:<FaRegistered/>
//     },
//     {
//         path:"/cart",
//         name:"Cart",
//         icon:<FaCartArrowDown/>
//     }
// ]
//   return (
//     <div className="container">
//         <div style={{width:isOpen ? "300px" :"50px"}} className="sidebar">
//             <div className="top_section">
//                 <h1 style={{display:isOpen ? "block" :"none"}} className="logo">Logo</h1>
//                 <div style={{marginLeft:isOpen ? "50px" :"0px"}} className="bars">
//                     <FaBars onClick={toggle}/>
//                 </div>
//             </div>
//             {
//                 menuItem.map((item,index)=>(
//                     <NavLink to={item.path} key={index} className="link">
//                      <div className="icon">{item.icon}</div>
//                      <div className="link_text">{item.name}</div>
//                     </NavLink>
//                 ))
//             }
//         </div>
//         <main>{children}</main>
//     </div>
//   )
// const [containerClass, setContainerClass] = useState('');


// useEffect(() => {
//     let sideNav = localStorage.getItem("flag");

//     // alert(sideNav);
//     sideNav = localStorage.getItem("flag");
//     if (sideNav === "true") {
//         sideNav = localStorage.getItem("flag");
//         setContainerClass('half-width');
//     }
//     else {
//         sideNav = localStorage.getItem("flag");
//         setContainerClass('full-width')
//     }

//     //alert(containerClass);
//     console.log('localStorage.getItem("flag")', localStorage.getItem("flag"));
// }, [containerClass]);

// alert(sessionStorage.getItem("flag2"));

// const handleSidebar = () => {
//     var x = document.getElementById("side");
//     var y = document.getElementsByClassName("texta");
//     var a = document.getElementsByClassName("icons");
//     var t = document.getElementById("toggle");

//     if (x.style.width === "200px") {
//         x.style.width = "80px";
//       for (let i = 0; i < y.length; i++) {
//             y[i].style.display = "none";
//             a[i].style.marginLeft = "0px"
//         }
//         t.style.marginLeft = "0px";
//         x.style.width = "200px";
//     }
//     else {
//         x.style.width = "200px";
//         for (let i = 0; i < y.length; i++) {
//             y[i].style.display = "block";
//             a[i].style.marginLeft = "0px"
//         }
//         t.style.marginLeft = "0px"
//         x.style.width = "80px";

//     }
// }
// return (
//     <>
//         <div className="d-flex">
//             <div className="sidebarcontainer" id='side'>
//                 <div className="d-flex justify-content-start">
//                     <div className="toggle" id="toggle">
//                         <i className="fa-solid fa-bars" onClick={handleSidebar}></i>
//                     </div>
//                     <h4 className="texta" >Menu</h4>
//                 </div>
//                 <div className='pagecontainer'>
//                     <div className="d-flex justify-content-start">
//                         <Link to="/dashboard">
//                             <i className="fa-solid fa-house icons"></i>
//                         </Link>
//                         <Link className="texta" to="/dashboard">Home </Link>
//                     </div>
//                 </div>
//                 <div className='pagecontainer'>
//                     <div className="d-flex justify-content-start">
//                         <Link to="/">
//                             <i className="fa-solid fa-house icons"></i>
//                         </Link>
//                         <Link className="texta" to="/">Dashboard </Link>
//                     </div>
//                 </div>
//                 <div className='pagecontainer'>
//                     <div className="d-flex justify-content-start">
//                         <Link to="/">
//                         <i class="fa fa-user" aria-hidden="true"></i>
//                         </Link>
//                         <Link className="texta" to="/login">Login </Link>
//                     </div>
//                 </div>
//                 <div className='pagecontainer'>
//                     <div className="d-flex justify-content-start">
//                         <Link to="/">
//                             <i className="fa-solid fa-house icons"></i>
//                         </Link>
//                         <Link className="texta" to="/register">Register </Link>
//                     </div>
//                 </div>
//                 <div className='pagecontainer'>
//                     <div className="d-flex justify-content-start">
//                         <Link to="/">
//                         <i class="fa-sharp fa-solid fa-cart-shopping fa-bounce fa-lg"></i>
//                         </Link>
//                         <Link className="texta" to="/">Cart </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className={containerClass} >
//                 {children}
//             </div>
//         </div>
//     </>
// )

return(
    <>
    <div style={{display:'flex'}}>
<div style={{  height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Login</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/register" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Register</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    <div>
      
      </div>
      </div>
    </>
)
};
