import React from "react";
import { useState } from "react";
import apiServices from "../services/RegisterData";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [message, setmessage] = useState("");
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const [state, setstate] = useState(props.state);
  const errors = {};
  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    const firmObj = { email, password, state };
    console.log("object----" + password);
    // alert(firmObj.state);

    const respo = await apiServices.create(firmObj);
    if (respo.data.success === true) {
      setmessage(respo.data.msg);
      localStorage.setItem("token", respo.data.token);
      alert(localStorage.getItem("token"));
      if (firmObj.state === 1) {
        navigate("/login");
      }
      else {
        navigate("/loginasp");
      }
          } else {
            setmessage(respo.data.msg);
          }
    // }else{
    //   setmessage("not register please add email and password");
    // }
    
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

    const numberRegex = /\d/;
    const alphabetRegex = /[a-zA-Z]/;
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } else if (values.password.length > 20) {
      errors.password = 'Password must be at most 20 characters long';
    } else if (!numberRegex.test(values.password) || !alphabetRegex.test(values.password)) {
      errors.password = "Password must contain at least 1 number and 1 alphabet"
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

        <section className="d-flex mb-5" id="header">
          <div className="container pt-5 pb-5 mb-5 pb-5" style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", marginTop: "100px", width: "50rem", overflowX: "hidden" }} >
            <div className="row mx-lg-5 mx-md-2 mx-sm-2">
              <div className="col-md-6 pt-5 mx-auto pt-lg-0 order-1  d-flex justify-content-center order-lg-2 header-image" >
                <img src="Images/register1.png" width={270} height={300} className="" alt="" />
              </div>
              <form className="col-lg-6 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" action="" method="">
                <h2 style={{ fontWeight: "700" }}>SIGN UP</h2>
                <i class="fa-solid fa-envelope  fa-xm" style={{ position: "relative", left: "0px", top: "35px" }}></i>
                <input
                  className="pt-3 px-4"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={(event) => {
                          formik.handleChange(event);
                          setEmail(event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={email}
                  style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "100%" }}
                  required
                />
                <br />
                {formik.touched.email && formik.errors.email && (
                        <div>{formik.errors.email}</div>
                )}
                <i class="fa-solid fa-lock fa-xm" style={{ position: "relative", left: "0px", top: "35px" }}></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the password"
                  onChange={(event) => {
                          formik.handleChange(event);
                          setPass(event.target.value);
                        }}
                  onBlur={formik.handleBlur}
                  value={password}
                  id="id_password"
                  className="my-0 pt-3 px-4"
                  style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "100%" }}
                  required
                />
                <i
                  className={eye}
                  id="togglePassword"
                  style={{ marginLeft: "-25px", cursor: "pointer", position: "relative", cursor: "pointer" }}
                  onClick={handletogglepass}
                ></i>
                {formik.touched.password && formik.errors.password && (
                        <div>{formik.errors.password}</div>
                      )}
                <br />
                <br />
                <button
                  type="submit"
                  onClick={handleRegister}
                  className="p-2"
                  value="register"
                  style={{ fontSize: "20px", borderRadius: "10px", backgroundColor: "rgb(212, 174, 126)", border: "none", width: "110px" }}>
                  register
                </button>
                <br />
                <br />
                <p><a href="/login" style={{ textDecoration: "none" }}>Already Have An Account??</a></p>
                <span>{message}</span>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  };

  if (props.state === 0) {
    return (
      <>

        <section className="d-flex mb-5" id="header">
          <div className="container pt-5 pb-5 mb-5 pb-5" style={{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset", marginTop: "100px", width: "50rem", overflowX: "hidden" }} >
            <div className="row mx-lg-5 mx-md-2 mx-sm-2">
              <div className="col-md-6 pt-5 mx-auto pt-lg-0 order-1  d-flex justify-content-center order-lg-2 header-image" >
                <img src="Images/register1.png" width={270} height={300} className="" alt="" />
              </div>
              <form className="col-lg-6 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" action="" method="">
                <h2 style={{ fontWeight: "700" }}>SIGN UP</h2>
                <i class="fa-solid fa-envelope  fa-xm" style={{ position: "relative", left: "0px", top: "35px" }}></i>
                <input
                  className="pt-3 px-4"
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={(event) => {
                          formik.handleChange(event);
                          setEmail(event.target.value);
                        }}
                  onBlur={formik.handleBlur}
                  value={email}
                  style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "100%" }}
                  required
                />
                <br />
                {formik.touched.email && formik.errors.email && (
                        <div>{formik.errors.email}</div>
                      )}
                <i class="fa-solid fa-lock fa-xm" style={{ position: "relative", left: "0px", top: "35px" }}></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the password"
                  onChange={(event) => {
                          formik.handleChange(event);
                          setPass(event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={password}
                  id="id_password"
                  className="my-0 pt-3 px-4"
                  style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width: "100%" }}
                  required
                />
                <i
                  className={eye}
                  id="togglePassword"
                  style={{ marginLeft: "-25px", cursor: "pointer", position: "relative", cursor: "pointer" }}
                  onClick={handletogglepass}
                ></i>
                {formik.touched.password && formik.errors.password && (
                        <div>{formik.errors.password}</div>
                )}
                <br />
                <button
                  type="submit"
                  className="p-2 my-4"
                  value="register"
                  onClick={handleRegister}
                  style={{ fontSize: "20px", borderRadius: "10px", backgroundColor: "rgb(212, 174, 126)", border: "none", width: "110px" }}>
                  Register
                </button>
                <br />
                <p><a href="/loginasp" style={{ textDecoration: "none" }}>Already Have An Account??</a></p>
                <span>{message}</span>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  };
}