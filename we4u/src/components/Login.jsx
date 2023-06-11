import React from "react";
import { useState } from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import apiServices from "../services/LoginData.js";
import '../css/Login.css';
import { Button, Modal } from 'react-bootstrap';
import service from '../services/Services';
export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [message, setmessage] = useState("");
  const [spid, setspid] = useState();
  const [msg, setmsg] = useState();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const errors = {};
  const handleLogin = async (event) => {
    if (errors.email === undefined && errors.password === undefined) {
      let state = props.state;
      const firmObj = { email, password, state };
      const respo = await apiServices.getLoginData(firmObj);
      alert(respo.data.msg);
      setmsg("Login Successfull!!");
      initmodel();
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
    }
    else {
      // alert("hello2");
      setmessage(errors.email);
      // console.log("errors", errors.email);
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
    const pattern = /^(?=.[a-zA-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%*?&]$/;
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email,
      password
    },
    validate,
    validateOnChange: true
  })



  if (props.state === 1) {

    return (
      <>
       <Modal show={isshow}  >
                <Modal.Header className='text-center'>
                    <Modal.Title className='' >
                    Login Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {msg}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" type='submit' onClick={initmodel}>
                        Ok
                    </Button>
                </Modal.Footer>
                </Modal>
        <section className="d-flex mb-5" id="header">
          <div className="container pt-5 pb-5 mb-5 pb-5 main_div1"  >
            <div className="row mx-lg-5 mx-md-2 mx-sm-2">
              <div className="col-md-6 pt-5 mx-auto pt-lg-0 order-1  d-flex justify-content-center order-lg-2 header-image" >
                <img src="Images/login2.png" width={350} height={360} className="" alt="" />
              </div>
              <form className="col-lg-6 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h2 style={{ fontWeight: "700" }}>SIGN In</h2>
                <i class="fa-solid fa-envelope  fa-xm icon_mail" ></i>
                <input
                  className="pt-3 px-4 em_in"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={(event) => {
                    formik.handleChange(event);
                    setEmail(event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={email}
                 required
                />
                <br />
                {formik.touched.email && formik.errors.email && (
                  <div className="formik_error">{formik.errors.email}</div>
                )}

                <i class="fa-solid fa-lock  fa-xm icon_pass" ></i>
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
                  className="my-0 pt-3 mt-2 px-4 pass_in"
                  required
                />
                <i
                  className={eye}
                  id="togglePassword"
                  style={{ marginLeft: "-25px", cursor: "pointer", position: "relative", cursor: "pointer" }}
                  onClick={handletogglepass}
                ></i>
                <br />
                {formik.touched.password && formik.errors.password && (
                  <div className="formik_error">{formik.errors.password}</div>
                )}
                <br />
                <p><a href="/forget" style={{ textDecoration: "none" }}>Forget password?</a></p>
                <button
                  type="button"
                  className="p-2 btn_sub"
                  value="register"
                  onClick={handleLogin}
                  >
                  Login
                </button>
                <br />
                <br />
                <p><a href="/register" style={{ textDecoration: "none" }}>Don't have an Account??</a></p>
                <span>{message}</span>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
  else if (props.state === 0) {
    return (
      <>
      <Modal show={isshow}  >
                <Modal.Header className='text-center'>
                    <Modal.Title className='' >
                    Login Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {msg}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" type='submit' onClick={initmodel}>
                        Ok
                    </Button>
                </Modal.Footer>
                </Modal>
        <section className="d-flex mb-5" id="header">
          <div className="container pt-5 pb-5 mb-5 pb-5 main_div1" >
            <div className="row mx-lg-5 mx-md-2 mx-sm-2">
              <div className="col-md-6 pt-5 mx-auto pt-lg-0 order-1  d-flex justify-content-center order-lg-2 header-image" >
                <img src="Images/login2.png" width={350} height={360} className="" alt="" />
              </div>
              <form className="col-lg-6 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h2 style={{ fontWeight: "700" }}>SIGN IN</h2>
                <i class="fa-solid fa-envelope  fa-xm icon_mail" ></i>
                <input
                  className="pt-3 px-4 em_in"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={(event) => {
                    formik.handleChange(event);
                    setEmail(event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={email}
                  required
                />
                <br />
                {formik.touched.email && formik.errors.email && (
                  <div className="formik_error">{formik.errors.email}</div>
                )}

                <i class="fa-solid fa-lock fa-xm icon_pass" ></i>
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
                  className="my-0 pt-3 mt-2 px-4 pass_in"
                  required
                />
                <i
                  className={eye}
                  id="togglePassword"
                  style={{ marginLeft: "-25px", cursor: "pointer", position: "relative", cursor: "pointer" }}
                  onClick={handletogglepass}
                ></i>
                <br />
                {formik.touched.password && formik.errors.password && (
                  <div className="formik_error">{formik.errors.password}</div>
                )}
                <br />
                <p><a href="/forgetasp" style={{ textDecoration: "none" }}>Forget password?</a></p>
                <button
                  type="button"
                  className="p-2 btn_sub"
                  value="register"
                  onClick={handleLogin}
                  >
                  Login
                </button>
                <br />
                <br />
                <p><a href="/regprof" style={{ textDecoration: "none" }}>Don't have an Account??</a></p>
                <span>{message}</span>
              </form>
            </div>
          </div>
        </section>
      </>
    );

  }

}