import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ClientIndex } from "./components/ClientIndex";
import { Authpage } from "./components/Authpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Forget } from './components/Forget';
import { Verify } from './components/Verify';
import { Home } from "./components/Home";
import {Contact} from "./components/Contact";
import About from "./components/About";
import TestiMonials from './components/TestiMonials/TestiMonials';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";

import Profile from "./components/Profile";



function App() {
const [register, setregister] = useState(0);
  return (
    <>
      
      <Router>
      {/* <Navbar /> */}
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register state = {1}/>}></Route>
        <Route path="/regprof" element={<Register  state = {0}/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Authpage />}></Route>
        <Route path="/forget" element={<Forget/>}></Route>
        {/* <Route path="/about" element={<about/>}></Route>  */}
        <Route path="/logout" element={<Home/>}></Route>
      
        
        {/* <Route path="/about" element={<TestiMonials/>}></Route> */}
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
