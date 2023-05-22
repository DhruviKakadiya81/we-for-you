import React from 'react'
import "../css/Contact.css";
import { Navbar } from './Navbar'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {TextField,Button} from "@mui/material";
import { Link } from 'react-router-dom';
import {Footer} from './Footer'

export const Contact = () => {
    
  return (
    
    <>
    <Navbar/>
    <div class="c_container2 hero-image" style={{background:`url(Images/cont_first.png)`,backgroundSize:"cover"}}>
        <div class="hero-text c_p_container">
          <p class="c_par1">Contact Us</p>
          <p class="c_par2">We're easy to get in touch with</p>
        </div>
      </div>
      <div class="c_container3">
      </div>
      <div class="c_container4 hero-text">
        <div class="container text-center">
          <div class="row">
            <div class="col c_detail_container">
              <p class="main_head">
                Get Into Touch
              </p>
              <hr/>
              <div class="c_details">
                <p class="c_add_head">
                  Address:
                </p>
                <p class="c_add_detail1">
                  58, Ralph Ave
                </p>
                <p class="c_add_detail2">
                  New York,New York 1111
                </p>
                <p class="c_phone_continer">
                  <span class="c_phone_head">Phone:</span><span class="c_phone_detail"> +1 800 000 111</span>
                </p>
                <p class="c_email_container">
                  <span class="c_email_head">Email:</span><span class="c_email_detail"> Contact@Example.com</span>
                </p>
              </div>              
            </div>
            <div class="col c_form_container">
              <div class="d-flex justify-content-center">
                <input type="text" name="firstName" class="c_input_first_name mx-2 my-2" placeholder="Enter First Name"/>
                <input type="text" name="Last name" class="c_input_last_name mx-2 my-2" placeholder="Enter Last Name"/>
              </div>
              <div class="d-flex justify-content-center">
                <input type="number" name="phoneNumber" class="c_input_phone_number mx-2 my-2" placeholder="Phone Number"/>
                <input type="Email" name="Email" class="c_input_email_address mx-2 my-2" placeholder="Email Address"/>
              </div>
               <textarea name="message" class="c_input_message mx-2 my-2" placeholder="Your Valuable FeedBack"></textarea><br/>
               <button type="submit" class="c_send_btn mb-5">Send FeedBack</button>
            </div>
          </div>
        </div>
      </div>
      <div class="c_container5 hero-text">
        <div class="c_inner_container">
          <p class="c_loc_header px-3">
            Location Of Restaurants All Over The India
          </p>
          <hr class="c_hr_c5"/>
          <div class="container text-center">
            <div class="d-flex justify-content-evenly c_loc_outer">
              <div class="c_loc_inner my-2">
                <img src="/images/Vector.png" alt="" height="40px"/>
                <p class="c_loc_title">Jarkhand</p>
                <p class="c_loc_desc">58,Ralph Ave New York,New York 111</p>
              </div>
              <div class="c_loc_inner my-2">
                <img src="/images/Vector.png" alt="" height="40px"/>
                <p class="c_loc_title">Vadodara</p>
                <p class="c_loc_desc">58,Ralph Ave New York,New York 111</p>
               </div> 
               <div class="c_loc_inner my-2">
                <img src="/images/Vector.png" alt="" height="40px"/>
                <p class="c_loc_title">Bhopal</p>
                <p class="c_loc_desc">58,Ralph Ave New York,New York 111</p>
              </div>
            </div>
          </div>
          <div class="c_second_header">
            <p class="c_second_heading">Upcoming</p>
            <div class="container text-center">
              <div class="d-flex justify-content-evenly c_sec_loc_outer">
                <div class="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px"/>
                  <p class="c_loc_sec_title">Indore</p>
                  <p class="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div class="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px"/>
                  <p class="c_loc_sec_title">Bengaluru</p>
                  <p class="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div class="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px"/>
                  <p class="c_loc_sec_title">Chennai</p>
                  <p class="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div class="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px"/>
                  <p class="c_loc_sec_title">Jamshedpur</p>
                  <p class="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div class="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px"/>
                  <p class="c_loc_sec_title">Patna</p>
                  <p class="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div class="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px"/>
                  <h5 class="c_loc_sec_title">Patna</h5>
                  <p class="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
              </div>
            </div>
          </div>
          
      </div>
      <div class="map_container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7441.68091850823!2d72.78242768220215!3d21.15874651462442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675149979922!5m2!1sen!2sin" width="1600" height="460" style={{bo
        :"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="c_map"></iframe>
      </div>
      </div>
      <Footer/>
    </>
  )
}