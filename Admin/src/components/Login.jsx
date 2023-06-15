import React from 'react'
import '../css/Login.css'
import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';

import { useState } from 'react';
export const Login = () => {
    const navigate = useNavigate();
    const [password, setpassword] = useState('');
    const [admin, setadmin] = useState('');
    const [msg, setmsg] = useState();
    const [isshow, invokemodel] = useState(false);
    const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
    const initmodel = () => {
        return invokemodel(!isshow);
    }
    const handlelogin = ()=>{
        if(admin === "admin" && password === "admin@123")
        {
            // alert("login success");
            setmsg("Login Successfull!!");
            initmodel();
            navigate("/dashboard")
        }
        else{
            // alert("login fail");
            setmsg("Login Fail!!");
            initmodel();
        }
    }

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
                <img src="/images/we4U_login.png" width={350} height={360} className="" alt="" />
              </div>
              <form className="col-lg-6 mt-5 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h2 style={{ fontWeight: "700" }}>SIGN IN</h2>
                <i class="fa-solid fa-envelope  fa-xm icon_mail" ></i>
                <input
                  className="pt-3 px-4 em_in"
                  type="text"
                  placeholder="Enter Your Email"
                  name="admin"
                  onChange={(e)=>{setadmin(e.target.value)}}
                  
                 
                  required
                />
                            {/* <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Enter Email" onChange={(e)=>{setadmin(e.target.value)}}/>
                            </div> */}
                            {/* <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" id="id_password" placeholder="Enter Password" onChange={(e)=>{setpassword(e.target.value)}} />
                                <i
                                className={eye}
                                id="togglePassword"
                                style={{ marginLeft: "-25px", cursor: "pointer", position: "relative", cursor: "pointer" }}
                                onClick={handletogglepass}
                                ></i>
                            </div> */}

                            <i class="fa-solid fa-lock  fa-xm icon_pass" ></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the password"
                  onChange={(e)=>{setpassword(e.target.value)}}
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

                <br /><br /><br />
                            <button type='button' className="p-2 btn_sub" onClick={handlelogin}>
                                Login
                                
                            </button>

                            
                        </form>
                        
                    </div>
                   
                </div>
            </section>
        </>
    )
}