import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { AdminNavbar } from "./components/AdminNavbar";
import AdminDashboard from "./components/AdminDashboard";
import AdminManageService from "./components/AdminManageService";
import AdminManageCustomers from "./components/AdminManageCustomers";
// import { AdminNavbar } from "./components/AdminNavbar";

function App() {
  return (
    <>
      hello
      {/* <AdminNavbar/> */}
      {/* <AdminDashboard/> */}
      <Router>
      {/* <Navbar /> */}
  
      <Routes>
       
        <Route path="/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/adminmanageservice" element={<AdminManageService/>}></Route>
        <Route path="/adminmanagecustomer" element={<AdminManageCustomers/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
