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
    return (
        <>
         <Modal show={isshow}  >
                <Modal.Header className='text-center'>
                    <Modal.Title className='' >
                    Sub Service Added Details
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
            <div className='container d-flex justify-content-center align-items-center mx-5 me-0 mx-lg-0 mt-5' style={{ marginTop: "60px" }}>
                <div class="screen">
                    <div class="screen__content">
                        <img src="/images/logo2.png" className="" alt="hello" style={{ height: "100px", width: "100px", position: "relative", left: "38%", top: "70px", borderRadius: "50%", border: "5px solid grey" }} />
                        <form class="login  ">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Enter Email" onChange={(e)=>{setadmin(e.target.value)}}/>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Enter Password" onChange={(e)=>{setpassword(e.target.value)}} />
                            </div>
                            <button class="button login__submit" onClick={handlelogin}>
                                <span class="button__text" >Login</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div class="social-login">
                            <div class="social-icons">
                                <i href="https://instagram.com/isikabatay06" class="social-login__icon fab fa-instagram"></i>
                                <i href="#" class="social-login__icon fab fa-facebook"></i>
                                <i href="https://twitter.com/isikabatay06" class="social-login__icon fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </>
    )
}
