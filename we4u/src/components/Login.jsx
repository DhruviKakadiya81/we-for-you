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

      {/* <div style={{backgroundColor:"#f8f8ff" , borderRadius:"15px" ,  height:"500px", width:"900px" , marginLeft:"300px" , alignContent:"center" , alignItems:"center"}} > */}
      {/* <div style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , marginTop:"135px" }} className=" mx-auto  w-50 p-5 d-flex align-items-center justify-content-center"> */}
      {/* <div style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",marginTop:"135px" }} className=" mx-auto  w-50 p-5 d-flex align-items-center justify-content-center"> */}
      <section className="d-flex " id="header">
        <div className="container-fluid p-5 justify-content-start" style= {{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",marginTop:"135px",width:"50rem" }} >
          <div className="row justify-content-start">
            <div className="col-8 mx-auto">
              <div className="row justify-space-between">
              <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2  header-image" >
                <img src="Images/login1.png" width={300} height={300} className="" alt="" />
              </div>
              <div className="col-md-6 pt-5 mx-0 pt-lg-0 order-2 order-lg-1" style={{marginLeft:"-10px"}}>
                <form action="" method="post" onSubmit={handleLogin}>

                  <h2 style={{ fontWeight: "700" }}>LOGIN</h2>
                  <input

                    className="mt-3"
                    type="text"
                    placeholder="Enter your Email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width:"90%" }}

                  />
                  <br />
                  {/* <input type="password" placeholder='enter your password' name='password' onChange={event => setPass(event.target.value)} /><br /> */}
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter the Password"
                    onChange={(event) => setPass(event.target.value)}
                    id="id_password"
                    className="my-5"
                    style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "90%" }}
                  />
                  <i
                    className={eye}
                    id="togglePassword"
                    style={{ marginLeft: "-25px", cursor: "pointer" }}
                    onClick={handletogglepass}

                  ></i>

                  <br></br>

                  <button type="submit" className="p-2" value="register" style={{ borderRadius: "10px", backgroundColor: "lightblue", border: "none", width: "110px" }}>
                    Login
                  </button>
                  <p><strong>Forget password?</strong><a href="/forget">Recover Password</a></p>
                  <span>{message}</span>
                </form>

              </div>
              </div>
            </div>
          </div>
        </div>
      </section>






    </>
  );
};

