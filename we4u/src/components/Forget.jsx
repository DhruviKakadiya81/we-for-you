import React from 'react';
import "../css/Forget.css";
import { useState } from 'react'
import LoginData from '../services/LoginData';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const Forget = (props) => {
    const [email, setEmail] = useState('');
    const [state, setState] = useState(1);
    const [otp, setotp] = useState('');
    const [pwdError, setPwdError] = useState(false);
    const [token, setToken] = useState('');
    let nevigate = useNavigate();

    const handleotp = async (event) => {
        console.log('milan');
        event.preventDefault();
        console.log(email);
        const data = { email, state: props.state }

        try {
            console.log('here');
            const respo = await LoginData.getemail(data);
            console.log('data', respo);
            // alert(respo.data.msg);
            // setToken(respo.data.data);
            setState(2);
        } catch (error) {
            console.log("error" + error);
            console.error(error);
        }
    }

    const verifyotp = async (event) => {
        event.preventDefault();
        let sendotp = { email, otp, token, state: props.state };
        console.log(sendotp);
        const respo = await LoginData.getotp(sendotp);
        alert(respo.data.msg);
        setState(3);
    }

    const validPassword = new RegExp(
        '^[0-9]{1,6}$'
    );

    const validate = () => {
        if (!validPassword.test(otp)) {
            setPwdError(true);
        }
    }
    if (props.state === 1) {
        if (state === 1) {
            return (
                <>
                    <section className="d-flex">
                        <div className='container-fluid p-5 forget_container'>
                            <h2 className='my-2'>Recover your Password</h2>
                            <form action="" method="post" onSubmit={handleotp}>
                                <i class="fa-solid fa-envelope fa-flip fa-xl"></i>
                                <input
                                    type="text"
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
        } else if (state === 2) {
            return (
                <>
                    <section className='d-flex'>
                        <div className="container-fluid p-5 verify_container">
                            <h2 className='my-2'>Verify Your Otp</h2>
                            <form action="" method="" onSubmit={verifyotp}>
                                <i class="fa-solid fa-key"></i>
                                <input
                                    type="password"
                                    placeholder="Enter OTP"
                                    name="otp"
                                    id='otp_password'
                                    className='verify_otp mx-2 my-4'
                                    onChange={(event) => setotp(event.target.value)}
                                />
                                <br />
                                {pwdError && <p style={{ color: "red", fontWeight: '500' }}>Enter Valid Password</p>}
                                <button type="submit" value="register" className='my-2 mx-4 p-2 verify_btn' onClick={validate}>
                                    Verify
                                </button>
                                <p className='my-2 mx-2 verify_login'>Goto Login Page?<a href="/login">Login Page</a></p>
                                <span></span>
                            </form>
                        </div>
                    </section>
                </>
            )
        } else {
            return (
                <>
                    <Navigate to='/login' />
                </>
            )
        }
    }
    else {
        if (state === 1) {
            return (
                <>
                    <section className="d-flex">
                        <div className='container-fluid p-5 forget_container'>
                            <h2 className='my-2'>sp Recover your Password</h2>
                            <form action="" method="post" onSubmit={handleotp}>
                                <i class="fa-solid fa-envelope fa-flip fa-xl"></i>
                                <input
                                    type="text"
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
        } else if (state === 2) {
            return (
                <>
                    <section className='d-flex'>
                        <div className="container-fluid p-5 verify_container">
                            <h2 className='my-2'>Verify Your Otp</h2>
                            <form action="" method="" onSubmit={verifyotp}>
                                <i class="fa-solid fa-key"></i>
                                <input
                                    type="password"
                                    placeholder="Enter OTP"
                                    name="otp"
                                    id='otp_password'
                                    className='verify_otp mx-2 my-4'
                                    onChange={(event) => setotp(event.target.value)}
                                />
                                <br />
                                {pwdError && <p style={{ color: "red", fontWeight: '500' }}>Enter Valid Password</p>}
                                <button type="submit" value="register" className='my-2 mx-4 p-2 verify_btn' onClick={validate}>
                                    Verify
                                </button>
                                <p className='my-2 mx-2 verify_login'>Goto Login Page?<a href="/loginasp">Login Page</a></p>
                                <span></span>
                            </form>
                        </div>
                    </section>
                </>
            )
        } else {
            return (
                <>
                    <Navigate to='/loginasp' />
                </>
            )
        }
    }



}