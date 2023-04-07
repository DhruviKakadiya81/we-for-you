import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ClientIndex } from "./components/ClientIndex";
import { Authpage } from "./components/Authpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Authpage />}></Route>
      </Routes>
      </Router>
    </>
   
   <Router>
    
   /*<ClientIndex/>*/
   
   </Router>
   </>
  );
}

export default App;
