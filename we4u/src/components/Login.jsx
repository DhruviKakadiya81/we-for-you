import React from "react";
import { useState } from "react";
import apiServices from "../services/LoginData.jsx";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [message, setmessage] = useState("");
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const handleLogin = async (event) => {
    event.preventDefault();
    const firmObj = { email, password };
    // regData.append('email', email);
    // regData.append('password', password);
    //  console.log(regData.get('email'));
    const respo = await apiServices.getLoginData(firmObj);
    alert(respo.data.msg);
    if (respo.data.success === true) {
      setmessage(respo.data.msg);
      localStorage.setItem("token", respo.data.token);
      alert(localStorage.getItem("token"));
      // alert(respo.data.token);
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

  return (
    <>
      <div>Login Form</div>
      <form action="" method="post" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        {/* <input type="password" placeholder='enter your password' name='password' onChange={event => setPass(event.target.value)} /><br /> */}
        <input
          type="password"
          name="password"
          placeholder="Enter the Password"
          onChange={(event) => setPass(event.target.value)}
          id="id_password"
        />
        <i
          className={eye}
          id="togglePassword"
          style={{ marginLeft: "-25px", cursor: "pointer" }}
          onClick={handletogglepass}
        ></i>

        <button type="submit" value="register">
          Login
        </button>
        <p><strong>have you account?</strong><a href="/login">Login here</a></p>
        <span>{message}</span>
      </form>
    </>
  );
};

