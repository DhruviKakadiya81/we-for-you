import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
// import { ClientIndex } from "./components/ClientIndex";
import { Authpage } from "./components/Authpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Redirect} from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import { Forget } from './components/Forget';
// import { Verify } from './components/Verify';
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import About from "./components/About";
import { Ser_Pro_Navbar } from "./components/Ser_Pro_Navbar";
import { Myprofile } from "./components/Myprofile";

import { SpmainHome } from './components/SpmainHome';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react";

import Profile from "./components/Profile";
import { ServiceProvider } from "./components/ServiceProvider";
import { Ser_pro_contact } from "./components/Ser_pro_contact";
import { Sp } from "./components/Sp";
import { Ser_add_Service } from "./components/Ser_add_Service";
import { SubService } from "./components/SubService";
import { Ser_servicepage } from "./components/Ser_servicepage";
import { Ser_dashboard } from "./components/Ser_dashboard";


import MyForm from "./components/MyForm";
import { Service2 } from "./components/Service2";
import { Booked_services } from "./components/Booked_services";
import { Ser_pro_profile } from "./components/Ser_pro_profile";
import { Cust_Dashboard } from "./components/Cust_Dashboard";
import { Verify } from "./components/Verify";



function App() {
  const [isLogin, setisLogin] = useState(true);

  const Authentication = () => {
    let token = localStorage.getItem("token");

    if (token === null) {
      setisLogin(false);
    }
    else {
      setisLogin(true);
    }
  }

  useEffect(() => {
    Authentication();
  }, [isLogin])



  return (
    <>

      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register state={1} />}></Route>
          <Route path="/regprof" element={<Register state={0} />}></Route>
          <Route path="/login" element={<Login state={1} />}></Route>
          <Route path="/loginasp" element={<Login state={0} />}></Route>
          <Route path="/forget" element={<Forget state={1} />}></Route>
          <Route path="/forgetasp" element={<Forget state={0} />}></Route>
          <Route path="/verify" element={<Verify state={1} />}></Route>
          <Route path="/verifyasp" element={<Verify state={0} />}></Route>
          {/* <Route path="/about" element={<about/>}></Route>  */}
          <Route path="/logout" element={<Home />}></Route>
          <Route path="/ser_contact" element={<Ser_pro_contact />}></Route>
          <Route path="/logout" element={<Home />}></Route>
          <Route path="/ser_pro_nav" element={<Ser_Pro_Navbar />}></Route>
          <Route path="/ser_add_service" element={<Ser_add_Service />}></Route>
          <Route path="/service" element={<SubService />}></Route>
          <Route path="/showprofile" element={<Myprofile />}></Route>

          {/* <Route path="/about" element={<TestiMonials/>}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/cart" element={<Authpage />}></Route>


          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/sphome" element={<SpmainHome />}></Route>
          <Route path="/serdash" element={<Ser_dashboard />}></Route>

          <Route path="/sphome2" element={<Sp />}></Route>
          <Route path="/contactsp" element={<Ser_pro_contact />}></Route>
          <Route path="/yourser" element={<Ser_servicepage />}></Route>
          <Route path="/test" element={<MyForm />}></Route>
          <Route path="/myform" element={<MyForm />}></Route>
          <Route path="/service2" element={<Service2 />}></Route>
          <Route path="/book" element={<Booked_services />}></Route>
          <Route path="/ser_pro_profile" element={<Ser_pro_profile />}></Route>
          <Route path="/custdash" element={<Cust_Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;