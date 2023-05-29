import React from 'react'
import "../css/Ser_pro_contact.css"
import { Ser_Pro_Navbar } from "./Ser_Pro_Navbar";
import { Footer } from './Footer';

export const Ser_pro_contact = () => {
    return (
        <>
            <Ser_Pro_Navbar />
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
                                <div class="col-md-6 ">
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" />
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Your Email" />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Your Mobile No." />
                                </div>
                                <div class="col-12">
                                    <select class="form-select col-12" aria-label="Default select example">

                                        <option class="col-6" selected>Select City</option>
                                        <option class="col-6" value="1">One</option>
                                        <option class="col-6" value="2">Two</option>
                                        <option class="col-6" value="3">Three</option>



                                    </select>
                                </div>

                                <div class="col-12">
                                    <div class="mb-3">

                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                            placeholder="Write Message...."></textarea>
                                    </div>
                                </div>

                                <div class="col-12 text-center">
                                    <button type="submit" class="s_cnt_btn px-5 py-2">Contact Us </button>
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

