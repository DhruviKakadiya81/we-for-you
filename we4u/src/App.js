import './App.css';
import { Register } from './components/Register';
import {Login} from './components/Login';
import { ClientIndex } from './components/ClientIndex';
import {Authpage} from './components/Authpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   
   <Router>
    
   <ClientIndex/>
   
   </Router>
   </>
  );
}

export default App;
