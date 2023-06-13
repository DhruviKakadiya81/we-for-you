import React from 'react'
import "../css/Ser_pro_contact.css"
import { Ser_Pro_Navbar } from "./Ser_Pro_Navbar";
import { Footer } from './Footer';
import contact from '../services/contact';
import { useState } from 'react';
import {Button,Modal} from "react-bootstrap"

export const Ser_pro_contact = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [message, setmessage] = useState('');
    const [msg, setmsg] = useState();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }

    const handleadd = async () => {
        const data = { firstname, lastname, email, phone, message }
        if (data.firstname === '' || data.lastname === '' || data.email === '' || data.phone === '' || data.message === '') {
            setmsg("Fill All The Fields!!");
      initmodel(); 
            // alert("enter all data", data);
            console.log("data", data);
        } else {
            const response = await contact.cntuspadd(data);
            if (response.data.success === true) {
                setmsg("Your Message Delivered Successfully!!");
        initmodel();
                // alert("your message delivered successfully");
            }
            else {
                setmsg("Please Add Your Message Again!!");
        initmodel();
                // alert("please add your message again")
            }
        }
    }
    return (
        <>
            <Ser_Pro_Navbar />
            <Modal show={isshow}  >
                <Modal.Header className='text-center'>
                    <Modal.Title className='' >
                        Contact Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {msg}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" onClick={initmodel}>
                       OK
                    </Button>
                </Modal.Footer>
                </Modal>
            <section class="chome d-xs-none d-sm-block d-md-block d-lg-block" style={{ marginTop: "-30px", zIndex: "-5" }}>
                <div class="chome  d-xs-none d-sm-block d-md-block d-lg-block">
                    <svg viewBox="0 0 500 500"
                        preserveAspectRatio="xMinYMin meet"
                        style={{ zIndex: "-2" }}>

                        <path d="M0, 100 C150, 200 350,
                0 500, 100 L500, 00 L0, 0 Z"
                            style={{
                                stroke: "none",
                                fill: 'rgba(80, 90, 80, 0.5)'
                            }}>
                        </path>
                    </svg>
                </div>

                <div class="chome ">
                    <svg viewBox="0 0 500 500"
                        preserveAspectRatio="xMinYMin meet"
                        style={{ zIndex: "-1" }}>

                        <path d="M0, 80 C300, 0 400,
                300 500, 50 L500, 00 L0, 0 Z"
                            style={{
                                stroke: "none",
                                fill: 'rgb(90, 80, 80, 0.5)'
                            }}>
                        </path>
                    </svg>
                </div>

                <div class="chome ">
                    <svg viewBox="0 0 500 500"
                        preserveAspectRatio="xMinYMin meet"
                        style={{ zIndex: "-3" }}>

                        <path d="M0, 100 C150, 300 350,
                0 500, 100 L500, 00 L0, 0 Z"
                            style={{
                                stroke: "none",
                                fill: 'rgba(120,120,120, 0.5)'
                            }}>
                        </path>
                    </svg>
                </div>
            </section>
            <section class="contact-form-sec">
                <div class="container" style={{ marginTop: "0px" }}>
                    <div class="row d-flex justify-content-lg-between justify-content-md-center">
                        <div class="mb-3 mt-2 text-center ">
                            <h3 class="mt-0" >Get Best Services</h3>
                            <p className="text-lg-light text-md-dark text-sm-dark">Call us, Email us or Submit your enquiry below.</p>
                        </div>
                        <div class="col-lg-5 col-md-10  col-sm-12 order-1 contact-info mt-5">

                            <div class="contact-info-div">
                                <span><i class="fa-sharp fa-solid fa-location-dot bg-dark" style={{ color: "white" }}></i></span>
                                <div class="">
                                    <h6>Address</h6>
                                    <p>Office - Bhd. Shivalik Complex, Opp. Bharucha Hospital, Ellora Park,Gorwa - Subhanpura
                                        Road,
                                        Vadodara.</p>
                                </div>
                            </div>
                            <div class="contact-info-div">
                                <span><i class="fa-sharp fa-solid fa-phone bg-dark" style={{ color: "white" }}></i></span>
                                <div class="ms-2">
                                    <h6>Phone</h6>
                                    <p>7574003377, 9601277779</p>
                                </div>
                            </div>
                            <div class="contact-info-div">
                                <span><i class="fa-regular fa-envelope bg-dark" style={{ color: "white" }}></i></span>
                                <div class="ms-2">
                                    <h6>Email</h6>
                                    <p>we4uservices3@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-md-10 contact-form">
                            <form class="row g-3">
                                <h1 className='text-center' style={{ color: "white" }}>Contact Us</h1>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" onChange={(event) => { setfirstname(event.target.value) }} />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" onChange={(event) => { setlastname(event.target.value) }} />
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Your Email" onChange={(event) => { setemail(event.target.value) }} />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Your Mobile No." onChange={(event) => { setphone(event.target.value) }} />
                                </div>

                                <div class="col-12">
                                    <div class="mb-3">

                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                            placeholder="Write Message...." onChange={(event) => { setmessage(event.target.value) }} ></textarea>
                                    </div>
                                </div>

                                <div class="col-12 text-center">
                                    <button type="button" class="s_cnt_btn px-5 py-2" onClick={handleadd}>Contact Us </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
