import React from 'react';
import "../css/Forget.css";
import { useState } from 'react'
import LoginData from '../services/LoginData';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { useEffect } from 'react';


export const Forget = (props) => {
    const [email, setEmail] = useState('');
    const [state, setState] = useState(1);
    const [otp, setotp] = useState();
    const [wrong, setwrong] = useState(false)
    const [pwdError, setPwdError] = useState(false);
    const [token, setToken] = useState('');
    const [msg, setmsg] = useState('');
    const [isshow, invokemodel] = useState(false);
    const [isshow2, invokemodel2] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(61);
    const initmodel = () => {
        return invokemodel(!isshow);
    }


    let nevigate = useNavigate();



    const handleotp = async (event) => {

        event.preventDefault();
        try {
            if (email !== "") {
                setmsg("we are sending Otp in Your email...please wait")
                invokemodel(!isshow);
                const data = { email, state: props.state }
                const respo = await LoginData.getemail(data);
                if (respo.data.success === true) {
                    if (props.state === 1) {
                        localStorage.setItem("email", email);
                        nevigate("/verify")
                    }
                    else {
                        localStorage.setItem("email", email);
                        nevigate("/verifyasp")
                    }

                    // setSeconds(60);
                    // setState(2);

                }
                else {
                    setmsg(respo.data.msg);
                    initmodel();
                }
            }
            else {
                setmsg("Provide Your Registered Email !!");
                initmodel();
            }

        } catch (error) {
            console.log("error" + error);
            console.error(error);
        }
    }


    // const verifyotp = async (event) => {

    //     alert(otp);
    //     event.preventDefault();
    //     let sendotp = { email, otp, token, state: props.state };
    //     console.log(sendotp);
    //     const respo = await LoginData.getotp(sendotp);
    //     if (respo.data.success === false) {
    //         setotp('');
    //         let x = document.getElementsByClassName("input-value");
    //         for (let i = 0; i < 6; i++) {
    //             x[i].value = ''
    //             x[1].disabled = 'true'
    //             x[2].disabled = 'true'
    //             x[3].disabled = 'true'
    //             x[4].disabled = 'true'
    //             x[5].disabled = 'true'
    //             x[0].focus();
    //         }
    //         setmsg(respo.data.msg);
    //         initmodel();
    //     }
    //     else {
    //         setmsg(respo.data.msg);
    //         initmodel();
    //         // setState(3);
    //     }


    // }

    // const validPassword = new RegExp(
    //     '^[0-9]{1,6}$'
    // );

    // const validate = () => {
    //     if (!validPassword.test(otp)) {
    //         setPwdError(true);
    //     }
    // }

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setSeconds((prevSeconds) => prevSeconds - 1);
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);



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

                <section className="d-flex">
                    <div className='container p-5 forget_container'>
                        <h2 className=''>Recover your Password</h2>
                        <form action="" method="post" onSubmit={handleotp}>
                            <i class="fa-solid fa-envelope fa-xl"></i>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className='forget_email mx-2 my-4'
                                onChange={(event) => setEmail(event.target.value)}
                            /><br />
                            <button type="submit" value="register" className='my-2 mx-4 p-2 forget_btn'>
                                Send OTP
                            </button>
                            <p className='my-2 mx-2 forget_login'>Goto Login Page?<a href="/login">Login Page</a></p>
                            <span></span>
                        </form>
                    </div>
                </section>
            </>
        )
    }
    else {
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
                <section className="d-flex">
                    <div className='container p-5 forget_container'>
                        <h2 className=''>Recover your Password</h2>
                        <form action="" method="post" onSubmit={handleotp}>
                            <i class="fa-solid fa-envelope fa-flip fa-xl"></i>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className='forget_email mx-2 my-4'
                                onChange={(event) => setEmail(event.target.value)}
                            /><br />
                            <button type="submit" value="register" className='my-2 mx-4 p-2 forget_btn'>
                                Send OTP
                            </button>
                            <p className='my-2 mx-2 forget_login'>Goto Login Page?<a href="/loginasp">Login Page</a></p>
                            <span></span>
                        </form>
                    </div>
                </section>
            </>
        )
    }



}