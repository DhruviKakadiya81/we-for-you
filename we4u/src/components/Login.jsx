import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiServices from "../services/LoginData.js";
import '../css/Login.css';

export const Login = (props) => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [message, setmessage] = useState("");
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const handleLogin = async (event) => {
    event.preventDefault();
    let state = props.state;
    const firmObj = { email, password ,state};

    const respo = await apiServices.getLoginData(firmObj);
    alert(respo.data.msg);
    if (respo.data.success === true) {
      setmessage(respo.data.msg);
      localStorage.setItem("token", respo.data.token);
      alert(localStorage.getItem("token"));
      if(props.state === 0){
        navigate("/sphome");
      }
      else{
        navigate("/");
      }
      
    } else {
      setmessage(respo.data.msg);
    }
    event.target.reset();
  };
  const handletogglepass = async (event) => {
    //event.preventDefault();
    var x = document.getElementById("id_password");
    if (x.type === "password") {
      x.type = "text";
      seteye("fa-solid fa-eye");
    } else {
      x.type = "password";
      seteye("fa-sharp fa-solid fa-eye-slash");
    }
  };
  if (props.state === 1) {
    return (
      <>

        <section class="sign-in" >
            <div class="container" id="login_contain" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}>
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="Images/login4.png" alt="sing up image"/></figure>
                       
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign In</h2>
                        <form method="POST" class="register-form" id="login-form" onSubmit={handleLogin}>
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <i class="fa-solid fa-envelope"></i>       
                                <input type="text" name="your_name" id="your_name" placeholder="Enter Your Email"    onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <i class="fa-solid fa-lock"></i>
                                <input  type="password"
                        name="password"
                        placeholder="Enter the Password"
                        onChange={(event) => setPass(event.target.value)}
                        id="id_password" />
                                <i
                        className={eye}
                        id="togglePassword"
                        style={{ cursor: "pointer" }}
                        onClick={handletogglepass} by

                      ></i>
                      <p><a href="/forget" style={{ textDecoration: "none" }}>Forget password?</a></p>

                            </div>
                         
                           
                            <div class="form-group form-button">
                                <input type="submit" style={{backgroundColor:"black"}} name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                       
                       <br />

                      <p><a href="/register" style={{ textDecoration: "none" }}>Don't Have An Account ?? </a></p>
                      

                      <span>{message}</span>

                           
                    </div>
                </div>
            </div>
        </section> 
    </>
  );
}
else if(props.state === 0){
  
  return (
    <>
         

        <section class="sign-in" >
            <div class="container" id="login_contain" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}>
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="Images/login4.png" alt="sing up image"/></figure>
                       
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign In</h2>
                        <form method="POST" class="register-form" id="login-form" onSubmit={handleLogin}>
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <i class="fa-solid fa-envelope"></i>       
                                <input type="text" name="your_name" id="your_name" placeholder="Enter Your Email"    onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <i class="fa-solid fa-lock"></i>
                                <input  type="password"
                        name="password"
                        placeholder="Enter the Password"
                        onChange={(event) => setPass(event.target.value)}
                        id="id_password" />
                                <i
                        className={eye}
                        id="togglePassword"
                        style={{ cursor: "pointer" }}
                        onClick={handletogglepass} by

                      ></i>
                      <p><a href="/forget" style={{ textDecoration: "none" }}>Forget password?</a></p>

                            </div>
                         
                           
                            <div class="form-group form-button">
                                <input type="submit" name="signin" style={{backgroundColor:"black"}} id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                       
                       <br />

                      <p><a href="/register" style={{ textDecoration: "none" }}>Don't Have An Account ?? </a></p>
                      

                      <span>{message}</span>

                           
                    </div>
                </div>
            </div>
        </section>






      </>
    );

  }

}
