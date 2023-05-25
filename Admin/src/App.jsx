import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { AdminNavbar } from "./components/AdminNavbar";
import AdminDashboard from "./components/AdminDashboard";
import AdminManageService from "./components/AdminManageService";
import AdminManageCustomers from "./components/AdminManageCustomers";
import { AdminNavbar } from "./components/AdminNavbar";
import { ShowServices } from "./components/ShowServices";
import { ManageCity } from "./components/ManageCity";
import { ManageArea } from "./components/ManageArea";
import { Login } from "./components/Login";
import { ManageSP } from "./components/ManageSP";

function App() {
  return (
    <>
    
      
    
      <Router>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/adminmanageservice" element={<AdminManageService/>}></Route>
        <Route path="/adminmanagecustomer" element={<AdminManageCustomers/>}></Route>
        <Route path="/showservice" element={<ShowServices/>}></Route>
        <Route path="/managecity" element={<ManageCity/>}></Route>
        <Route path="/managearea" element={<ManageArea/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/spmanage" element={<ManageSP/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
