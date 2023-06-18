import React from 'react';
import "../css/Forget.css";
import { useState } from 'react'
import LoginData from '../services/LoginData';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { useEffect } from 'react';
export const Verify = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [otp, setotp] = useState();
    const [token, setToken] = useState('');
    const [msg, setmsg] = useState('');
    const [isshow, invokemodel] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(60);
    const initmodel = () => {
        return invokemodel(!isshow);
    }
    const verifyotp = async (event) => {

        alert(otp);
        event.preventDefault();
        let sendotp = { email, otp, token, state: props.state };
        console.log(sendotp);
        const respo = await LoginData.getotp(sendotp);
        if (respo.data.success === false) {
            setotp('');
            let x = document.getElementsByClassName("input-value");
            for (let i = 0; i < 6; i++) {
                x[i].value = ''
                x[1].disabled = 'true'
                x[2].disabled = 'true'
                x[3].disabled = 'true'
                x[4].disabled = 'true'
                x[5].disabled = 'true'
                x[0].focus();
            }
            setmsg(respo.data.msg);
            initmodel();
        }
        else {


            setmsg(respo.data.msg + "Kindly Login with This Information");
            invokemodel(!isshow);


        }


    }



    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const inputs = document.querySelectorAll('input[type="text"]'),
        button = document.querySelector("button");

    inputs.forEach((input, index1) => {
        input.addEventListener("keyup", (e) => {
            const currentInput = input,
                nextInput = input.nextElementSibling,
                prevInput = input.previousElementSibling;
            if (currentInput.value.length > 1) {
                currentInput.value = "";
                return;
            }
            if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }
            if (e.key === "Backspace") {
                inputs.forEach((input, index2) => {
                    if (index1 <= index2 && prevInput) {
                        input.setAttribute("disabled", true);
                        input.value = "";
                        prevInput.focus();
                    }
                });
            }
            if (!inputs[3].disabled && inputs[3].value !== "") {
                button.classList.add("active");
                return;
            }
            button.classList.remove("active");
        });
    });

    window.addEventListener("load", () => inputs[0].focus());

    if (props.state === 1) {
        if (seconds === 0) {
            navigate("/forget");
        }

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

                <section className='d-flex'>
                    <div className="container-fluid p-4 verify_container text-center">
                        <h2 className='mb-4'>Verify Your Otp</h2>
                        <form action="" method="" onSubmit={verifyotp}>

                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(event.target.value) }} maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <br /><br />
                            {/* {otp} */}
                            {`${minutes}:${seconds.toString().padStart(2, '0')}`} Time left
                            <br />
                            <button type="submit" value="register" className='my-2 mx-4 p-2 verify_btn'>
                                Verify
                            </button>
                            <p className='my-2 mx-2 verify_login'>Goto Login Page?<a href="/login">Login Page</a></p>
                            <span></span>
                        </form>
                    </div>
                </section>
            </>
        )
    }
    else {
        if (seconds === 0) {
            navigate("/forgetasp");
        }

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

                <section className='d-flex'>
                    <div className="container-fluid p-4 verify_container text-center">
                        <h2 className='mb-4'>Verify Your Otp</h2>
                        <form action="" method="" onSubmit={verifyotp}>

                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(event.target.value) }} maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <input type="text" class="input-value" placeholder='X' onChange={(event) => { setotp(otp + event.target.value) }} disabled maxLength={1} />
                            <br /><br />
                            {/* {otp} */}
                            {`${minutes}:${seconds.toString().padStart(2, '0')}`} Time left
                            <br />
                            <button type="submit" value="register" className='my-2 mx-4 p-2 verify_btn'>
                                Verify
                            </button>
                            <p className='my-2 mx-2 verify_login'>Goto Login Page?<a href="/login">Login Page</a></p>
                            <span></span>
                        </form>
                    </div>
                </section>
            </>
        )
    }

}