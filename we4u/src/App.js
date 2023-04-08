import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ClientIndex } from "./components/ClientIndex";
import { Authpage } from "./components/Authpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Forget } from './components/Forget';
import { Verify } from './components/Verify';
import { AdminNavbar } from "./components/AdminNavbar";
import AdminDashboard from "./components/AdminDashboard";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      
      <Router>
      {/* <Navbar /> */}
      <AdminNavbar/>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />}></Route>
      {/* <Navbar />  */}
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Authpage />}></Route>
        <Route path="/forget" element={<Forget/>}></Route>
        <Route path="/verify" element={<Verify/>}></Route> 
        <Route path="/logout" element={<Home/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
