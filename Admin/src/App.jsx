import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { AdminNavbar } from "./components/AdminNavbar";
import AdminDashboard from "./components/AdminDashboard";
import AdminManageService from "./components/AdminManageService";
import AdminManageCustomers from "./components/AdminManageCustomers";
import { AdminNavbar } from "./components/AdminNavbar";
import { ShowServices } from "./components/ShowServices";

function App() {
  return (
    <>
    
      
      {/* <AdminDashboard/> */}
      <Router>
      {/* <Navbar /> */}
  
      <Routes>
        {/* <Route path="/" element={ <AdminNavbar/> }></Route> */}
        <Route path="/" element={<AdminDashboard />}></Route>
        <Route path="/adminmanageservice" element={<AdminManageService/>}></Route>
        <Route path="/adminmanagecustomer" element={<AdminManageCustomers/>}></Route>
        <Route path="/showservice" element={<ShowServices/>}></Route>
        
      </Routes>
      </Router>
    </>
  );
}

export default App;
