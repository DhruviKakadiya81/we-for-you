import React from "react";
import { useState } from "react";
import apiServices from "../services/RegisterData";
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import '../css/Register.css';

export const Register = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [message, setmessage] = useState("");
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const [erros, seterros] = useState('');

  const [msg, setmsg] = useState();

  const [state, setstate] = useState(props.state);
  const errors = {};
  let error;
  const navigate = useNavigate();
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }

  const handleRegister = async (event) => {
    event.preventDefault();

    console.log("hello", formik.errors.email);
    if (formik.errors.email === undefined && formik.errors.password === undefined) {
      // alert("hello");
      const firmObj = { email, password, state };
      console.log("object----" + password);
      const respo = await apiServices.create(firmObj);
      console.log(respo);
      if (respo.data.success === true) {
        console.log("hello");
        setmessage(respo.data.msg);
        // localStorage.setItem("token", respo.data.token);
        // alert(localStorage.getItem("token"));
        if (firmObj.state === 1) {
          navigate("/login");
        }
        else {
          navigate("/loginasp");
        }
      } else {
        console.log("hello");
        // event.preventDefault();
        setmsg(respo.data.msg)
        initmodel();
        // setmessage(respo.data.msg);
      }
    }
    else {

      setmsg("Enter Valid Credentials")
      initmodel();
      // setmessage(respo.data.msg);
    }

  };
  const handletogglepass = async (event) => {
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
    // alert("hello");
    const numberRegex = /\d/;
    const alphabetRegex = /[a-zA-Z]/;
    if (!values.email) {
      console.log(values.email)
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';

    }
    if (!values.password) {
      errors.password = 'Required';

    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } else if (values.password.length > 10) {
      errors.password = 'Password must be at most 10 characters long';

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
        <Modal show={isshow}  >
          <Modal.Body>
            <div className="">
              <b>
                {msg}
              </b>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" className="mx-3" type='submit' onClick={initmodel}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>

        <section className="d-flex mb-5" id="header">
          <div className="container pt-4 pb-5 mb-5 pb-5 r_main_div1">
            <div className="" style={{ float: "right" }} >
              <p><Link className="nav-link" to="/" ><i class="fa-solid fa-house fa-xl"></i></Link></p>
            </div>
            <div className="row mx-lg-5 mx-md-2 mx-sm-2">
              <div className="col-md-6 pt-5 mx-auto pt-lg-0 order-1  d-flex justify-content-center order-lg-2 header-image" >
                <img src="Images/login4.png" width={350} height={360} className="" alt="" />
              </div>
              <form className="col-lg-6 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" action="" method="">
                <h2 style={{ fontWeight: "700" }}>SIGN UP</h2>
                <i class="fa-solid fa-envelope  fa-xm r_icon_mail" ></i>
                <input
                  className="pt-3 px-4 r_em_in"
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
                <i class="fa-solid fa-lock fa-xm r_icon_pass" ></i>
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
                  className="my-0 pt-3 mt-2 px-4 r_pass_in"
                  required
                />
                <i
                  className={eye}
                  id="togglePassword"
                  style={{ marginLeft: "-25px", cursor: "pointer", position: "relative", cursor: "pointer" }}
                  onClick={handletogglepass}
                ></i>
                {formik.touched.password && formik.errors.password && (
                  <div className="formik_error">{formik.errors.password}</div>
                )}
                <br />
                <br />
                <button
                  type="button"
                  onClick={handleRegister}
                  className="p-2 r_btn_sub"
                  value="register"
                >
                  Register
                </button>
                <br />
                <br />
                <p><a href="/login" style={{ textDecoration: "none" }}>Already Have An Account??</a></p>
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
        <Modal show={isshow}  >
          <Modal.Body>
            <div className="">
              <b>
                {msg}
              </b>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" className="mx-3" type='submit' onClick={initmodel}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        <section className="d-flex mb-5" id="header">
          <div className="container pt-4 pb-5 mb-5 pb-5 r_main_div1">
            <div className="" style={{ float: "right" }} >
              <p><Link className="nav-link" to="/" ><i class="fa-solid fa-house fa-xl"></i></Link></p>
            </div>
            <div className="row mx-lg-5 mx-md-2 mx-sm-2">
              <div className="col-md-6 pt-5 mx-auto pt-lg-0 order-1  d-flex justify-content-center order-lg-2 header-image" >
                <img src="Images/login4.png" width={270} height={300} className="" alt="" />
              </div>
              <form className="col-lg-6 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" action="" method="">
                <h2 style={{ fontWeight: "700" }}>SIGN UP</h2>
                <i class="fa-solid fa-envelope  fa-xm r_icon_mail" ></i>
                <input
                  className="pt-3 px-4 r_em_in"
                  type="text"
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
                <i class="fa-solid fa-lock fa-xm r_icon_pass" ></i>
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
                  className="my-0 mt-2 pt-3 px-4 r_pass_in"
                  required
                />
                <i
                  className={eye}
                  id="togglePassword"
                  style={{ marginLeft: "-25px", cursor: "pointer", position: "relative", cursor: "pointer" }}
                  onClick={handletogglepass}
                ></i>
                {formik.touched.password && formik.errors.password && (
                  <div className="formik_error">{formik.errors.password}</div>
                )}
                <br />
                <button
                  type="button"
                  className="p-2 my-4 r_btn_sub"
                  value="register"
                  onClick={handleRegister}
                >
                  Register
                </button>
                <br />
                <p><a href="/loginasp" style={{ textDecoration: "none" }}>Already Have An Account??</a></p>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  };
}