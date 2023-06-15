import React from 'react'
import "../css/Ser_pro_contact.css"
import { Ser_Pro_Navbar } from "./Ser_Pro_Navbar";
import { Footer } from './Footer';
import contact from '../services/contact';
import { useState } from 'react';
import { Button, Modal } from "react-bootstrap"

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
                {/* <Modal.Header className='text-center'>
                    <Modal.Title className='' >
                        Contact Details
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body style={{fontWeight:"bold"}}>
                    {msg}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" onClick={initmodel}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            <section class="contact-form-sec">
                <div class="container" style={{ marginTop: "0px" }}>
                    <div class="row d-flex justify-content-lg-between justify-content-md-center">
                        <div class="mb-3 mt-2 text-center ">
                            <h3 class="mt-0" ><b>Get Best Services</b></h3>
                            <p className="text-lg-light text-md-dark text-sm-dark">Call us, Email us or Submit your enquiry below.</p>
                        </div>
                        <div class="col-lg-5 col-md-10  col-sm-12 order-1 contact-info mt-5">

                            <div class="contact-info-div d-flex mb-4">
                                <span><i class="fa-sharp fa-solid fa-location-dot bg-dark mt-1" style={{ color: "white" }}></i></span>
                                <div class="ms-3">
                                    <b>
                                        <h6><b>Address</b></h6>
                                        <p>J P Dawer Institute Of Information

Science & Technology</p></b>
                                </div>
                            </div>
                            <div class="contact-info-div d-flex mb-4">
                                <span><i class="fa-sharp fa-solid fa-phone bg-dark mt-1" style={{ color: "white" }}></i></span>
                                <div class="ms-3">
                                    <h6><b>Phone</b></h6>
                                    <p><b>+91 90160 63452</b></p>
                                </div>
                            </div>
                            <div class="contact-info-div d-flex mb-4">
                                <span><i class="fa-regular fa-envelope bg-dark mt-1" style={{ color: "white" }}></i></span>
                                <div class="ms-3">
                                    <h6><b>Email</b></h6>
                                    <p><b>we4uservices3@Gmail.Com</b></p>
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
