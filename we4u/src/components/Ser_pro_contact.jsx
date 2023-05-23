import React from 'react'
import "../css/Ser_pro_contact.css"
import {Ser_Pro_Navbar} from "./Ser_Pro_Navbar"; 

export const Ser_pro_contact = () => {
  return (
    <>
    <Ser_Pro_Navbar/>
    <section class="contact-form-sec">
        <div class="container">
            <div class="row justify-content-between">
                <div class=" col-4 contact-info ">
                    <div class="mb-5">
                        <h3 class="mb-3">Get Best Services</h3>
                        <p>Call us, Email us or Submit your enquiry below.</p>
                    </div>
                    <div class="contact-info-div">
                        <span><i class="fa-sharp fa-solid fa-location-dot bg-dark" style={{color:"white"}}></i></span>
                        <div class="ms-2">
                            <h6>Address</h6>
                            <p>Office - Bhd. Shivalik Complex, Opp. Bharucha Hospital, Ellora Park,Gorwa - Subhanpura
                                Road,
                                Vadodara.</p>
                        </div>
                    </div>
                    <div class="contact-info-div">
                        <span><i class="fa-sharp fa-solid fa-phone bg-dark" style={{color:"white"}}></i></span>
                        <div class="ms-2">
                            <h6>Phone</h6>
                            <p>7574003377, 9601277779</p>
                        </div>
                    </div>
                    <div class="contact-info-div">
                        <span><i class="fa-regular fa-envelope bg-dark" style={{color:"white"}}></i></span>
                        <div class="ms-2">
                            <h6>Email</h6>
                            <p>connect@holidaybugs.in</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 contact-form">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="inputEmail4" placeholder="First Name"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name"/>
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Your Email"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Your Mobile No."/>
                        </div>
                        <div class="col-12">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select City</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
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
    </>
  )
}

