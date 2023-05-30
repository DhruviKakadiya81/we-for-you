import React from "react";
import { useState } from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import apiServices from "../services/LoginData.js";
import '../css/Login.css';
import service from '../services/Services';
export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [message, setmessage] = useState("");
  const [spid, setspid] = useState();
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const errors = {};
  const handleLogin = async (event) => {
    if (errors === null) {
      event.preventDefault();
      let state = props.state;
      const firmObj = { email, password, state };
      const respo = await apiServices.getLoginData(firmObj);
      alert(respo.data.msg);
      if (respo.data.success === true) {
        setmessage(respo.data.msg);
        if (props.state === 0) {
          localStorage.setItem("sptoken", respo.data.token);
          const id = localStorage.getItem("sptoken");
          const response = await service.getspid({ id });
          setspid(response.data.data._id);
          const response2 = await service.getdetails({ spid });
          console.log("response==>", response2);
          if (response2.data.success === true) {
            navigate("/sphome2");
            localStorage.setItem("data", true);
          }
          else {
            navigate("/sphome");
          }
        }
        else {
          localStorage.setItem("token", respo.data.token);
          navigate("/");
        }

      } else {
        setmessage(respo.data.msg);
      }
      event.target.reset();
    }
    else {
      setmessage("not login please add email and password");
      // navigate("/login");
    }

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


  const validate = values => {

    const pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]$/;
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (values.password.length > 20) {
      errors.password = 'Password must be at most 20 characters long';
    } else if (!pattern.test(values.password)) {
      errors.password = "Should not Start With Special Character,atleast 1 alphabet,1 Special Character,1 Number"
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email,
      password
    },
    validate,
    validateOnChange: true,


  });

  if (props.state === 1) {

    return (
      <>

        {/* <div style={{backgroundColor:"#f8f8ff" , borderRadius:"15px" ,  height:"500px", width:"900px" , marginLeft:"300px" , alignContent:"center" , alignItems:"center"}} > */}
        {/* <div style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , marginTop:"135px" }} className=" mx-auto  w-50 p-5 d-flex align-items-center justify-content-center"> */}
        {/* <div style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",marginTop:"135px" }} className=" mx-auto  w-50 p-5 d-flex align-items-center justify-content-center"> */}


        <section className="d-flex flex-wrap" id="header">
          <div className="container-fluid p-5" style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", marginTop: "100px", width: "50rem" }} >
            <div className="row">
              <div className="col-8 mx-5">
                <div className="row">
                  <div className="col-md-6 pt-5 p-5 pt-lg-0 order-1 order-lg-2 header-image" >
                    <img src="Images/login1.png" width={270} height={300} className="login-image" alt="" />
                  </div>
                  <div className="col-md-6 pt-5 m-2 mx-0 pt-lg-0 order-2 order-lg-1" style={{ marginLeft: "-10px" }}>
                    <form action="" method="post" >
                      <h2 style={{ fontWeight: "700" }}>SIGN IN</h2>
                      <i className="fa-solid fa-envelope fa-xs" style={{ marginRight: "-18px", position: "relative", left: "-30px", bottom: "0px", color: "gray" }}></i>

                      <input
                        className="my-3 mt-5"
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                        onChange={(event) => {
                          formik.handleChange(event);
                          setEmail(event.target.value);
                        }}
                        onBlur={formik.handleBlur}
                        value={email}
                        style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "100%" }}
                      />
                      <br />
                      {formik.touched.email && formik.errors.email && (
                        <div>{formik.errors.email}</div>
                      )}

                      <i className="fa-solid fa-lock fa-xs " style={{ marginRight: "-18px", position: "relative", left: "-30px", bottom: "0px", color: "gray" }}></i>

                      <input
                        type="password"
                        name="password"
                        placeholder="Enter the Password"
                        onChange={(event) => {
                          formik.handleChange(event);
                          setPass(event.target.value);
                        }}
                        onBlur={formik.handleBlur}
                        value={password}
                        id="id_password"
                        className="my-4"
                        style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "100%" }}
                      />
                      <i
                        className={eye}
                        id="togglePassword"
                        style={{ marginLeft: "-25px", cursor: "pointer" }}
                        onClick={handletogglepass} by
                      ></i>
                      {formik.touched.password && formik.errors.password && (
                        <div>{formik.errors.password}</div>
                      )}
                      <p><a href="/forget" style={{ textDecoration: "none" }}>Forget password?</a></p>

                      <button type="button" onClick={handleLogin} className="p-2 my-3" style={{ fontSize: "20px", borderRadius: "10px", backgroundColor: "rgb(212, 174, 126)", border: "none", width: "110px" }}>
                        Login
                      </button>
                      <br />

                      <p><a href="/register" style={{ textDecoration: "none" }}>Don't Have An Account ?? </a></p>

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
  }
  else if (props.state === 0) {
    // console.log("spid===>",spid);
    return (
      <>


        {/* <div style={{backgroundColor:"#f8f8ff" , borderRadius:"15px" ,  height:"500px", width:"900px" , marginLeft:"300px" , alignContent:"center" , alignItems:"center"}} > */}
        {/* <div style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , marginTop:"135px" }} className=" mx-auto  w-50 p-5 d-flex align-items-center justify-content-center"> */}
        {/* <div style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",marginTop:"135px" }} className=" mx-auto  w-50 p-5 d-flex align-items-center justify-content-center"> */}

        <section className="d-flex flex-wrap" id="header">

          <div className="container-fluid p-5" style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", marginTop: "100px", width: "50rem" }} >
            <div className="row">
              <div className="col-8 mx-5">
                <div className="row">
                  <div className="col-md-6 pt-5 p-5 pt-lg-0 order-1 order-lg-2 header-image" >
                    <img src="Images/login1.png" width={270} height={300} className="login-image" alt="" />
                  </div>
                  <div className="col-md-6 pt-5 m-2 mx-0 pt-lg-0 order-2 order-lg-1" style={{ marginLeft: "-10px" }}>
                    <form action="" method="post" onSubmit={handleLogin}>

                      <h2 style={{ fontWeight: "700" }}>SIGN IN</h2>
                      <i class="fa-solid fa-envelope fa-flip fa-xs" style={{ marginRight: "-18px", position: "relative", left: "-30px", bottom: "0px", color: "gray" }}></i>

                      <input

                        className="my-3 mt-5"
                        type="text"
                        placeholder="Enter your Email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "100%" }}

                      />
                      <br />
                      {/* <input type="password" placeholder='enter your password' name='password' onChange={event => setPass(event.target.value)} /><br /> */}
                      <i class="fa-solid fa-lock fa-flip fa-xs " style={{ marginRight: "-18px", position: "relative", left: "-30px", bottom: "0px", color: "gray" }}></i>

                      <input
                        type="password"
                        name="password"
                        placeholder="Enter the Password"
                        onChange={(event) => setPass(event.target.value)}
                        id="id_password"
                        className="my-4"
                        style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "100%" }}
                      />
                      <i
                        className={eye}
                        id="togglePassword"
                        style={{ marginLeft: "-25px", cursor: "pointer" }}
                        onClick={handletogglepass} by

                      ></i>
                      <p><a href="/forgetasp" style={{ textDecoration: "none" }}>Forget password?</a></p>



                      <button type="submit" className="p-2 my-3" value="register" style={{ fontSize: "20px", borderRadius: "10px", backgroundColor: "rgb(212, 174, 126)", border: "none", width: "110px" }}>
                        Login
                      </button>
                      <br />

                      <p><a href="/regprof" style={{ textDecoration: "none" }}>Don't Have An Account ?? </a></p>

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

  }

}


{/* <section class="sign-in">
            <div class="container" id="login_contain">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="Images/login1.png" alt="sing up image"/></figure>
                       
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign In</h2>
                        <form method="POST" class="register-form" id="login-form" onSubmit={handleLogin}>
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Enter Your Email"    onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                       
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
                            </div>
                         
                           
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                       
                       <br />

                      <p><a href="/register" style={{ textDecoration: "none" }}>Don't Have An Account ?? </a></p>
                      
                      <p><a href="/forget" style={{ textDecoration: "none" }}>Forget password?</a></p>

                      <span>{message}</span>

                           
                    </div>
                </div>
            </div>
        </section> */}