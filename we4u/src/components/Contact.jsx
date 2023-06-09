import React, { useState } from 'react'
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
import { TextField, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { Footer } from './Footer'
import cntuser from '../services/contact'

export const Contact = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setmessage] = useState('');

  const handleadd = async () => {
    const data = { firstname, lastname, email, phone, message }
    if (data.firstname === '' || data.lastname === '' || data.email === '' || data.phone === '' || data.message === '') {
      alert("enter all data", data);
      console.log("data", data);
    } else {
      const response = await cntuser.cntuseradd(data);
      if (response.data.success === true) {
        alert("your message delivered successfully");
      }
      else {
        alert("please add your message again")
      }
    }
  }

  return (

    <>
      <Navbar />
      <div className="c_container2 hero-image" style={{ background: `url(Images/cont_first.png)`, backgroundSize: "cover" }}>
        <div className="hero-text c_p_container mx-5 px-5">
          <p className="c_par1">Contact Us</p>
          <p className="c_par2">We're easy to get in touch with</p>
        </div>
      </div>
      <div className="c_container3">
      </div>
      <div className="c_container4 hero-text">
        <div className="container text-center">
          <div className="row">
            <div className="col c_detail_container">
              <p className="main_head">
                Get Into Touch
              </p>
              <hr />
              <div className="c_details">
                <p className="c_add_head">
                  Address:
                </p>
                <p className="c_add_detail1">
                  58, Ralph Ave
                </p>
                <p className="c_add_detail2">
                  New York,New York 1111
                </p>
                <p className="c_phone_continer">
                  <span className="c_phone_head">Phone:</span><span className="c_phone_detail"> +1 800 000 111</span>
                </p>
                <p className="c_email_container">
                  <span className="c_email_head">Email:</span><span className="c_email_detail"> Contact@Example.com</span>
                </p>
              </div>
            </div>
            <div className="col c_form_container">
              <form action="" method="post" >
                <div className="d-flex justify-content-center">
                  <input type="text" name="firstName" className="c_input_first_name mx-2 my-2 px-4 py-2" placeholder="Enter First Name" onChange={(event) => { setfirstname(event.target.value) }} />
                  <input type="text" name="Last name" className="c_input_last_name mx-2 my-2 px-4 py-2" placeholder="Enter Last Name" onChange={(event) => { setlastname(event.target.value) }} />
                </div>

                <div className="d-flex justify-content-center">
                  <input type="number" name="phoneNumber" className="c_input_phone_number mx-2 my-2 px-4 py-2" placeholder="Phone Number" onChange={(event) => { setphone(event.target.value) }} />
                  <input type="Email" name="Email" className="c_input_email_address mx-2 my-2 px-4 py-2" placeholder="Email Address" onChange={(event) => { setemail(event.target.value) }} />
                </div>
                <textarea name="message" className="c_input_message mx-2 my-2" placeholder="Your Message" onChange={(event) => { setmessage(event.target.value) }}></textarea><br />
              </form>
              <button type="button" className="c_send_btn px-5 py-2 mb-5" onClick={handleadd}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="c_container5 hero-text">
        <div className="c_inner_container">
          <p className="c_loc_header px-3">
            Location Of Restaurants All Over The India
          </p>
          <hr className="c_hr_c5" />
          <div className="container text-center">
            <div className="d-flex justify-content-evenly c_loc_outer">
              <div className="c_loc_inner my-2">
                <img src="/images/Vector.png" alt="" height="40px" />
                <p className="c_loc_title">Jarkhand</p>
                <p className="c_loc_desc">58,Ralph Ave New York,New York 111</p>
              </div>
              <div className="c_loc_inner my-2">
                <img src="/images/Vector.png" alt="" height="40px" />
                <p className="c_loc_title">Vadodara</p>
                <p className="c_loc_desc">58,Ralph Ave New York,New York 111</p>
              </div>
              <div className="c_loc_inner my-2">
                <img src="/images/Vector.png" alt="" height="40px" />
                <p className="c_loc_title">Bhopal</p>
                <p className="c_loc_desc">58,Ralph Ave New York,New York 111</p>
              </div>
            </div>
          </div>
          <div className="c_second_header">
            <p className="c_second_heading">Upcoming</p>
            <div className="container text-center">
              <div className="d-flex justify-content-evenly c_sec_loc_outer">
                <div className="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px" />
                  <p className="c_loc_sec_title">Indore</p>
                  <p className="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div className="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px" />
                  <p className="c_loc_sec_title">Bengaluru</p>
                  <p className="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div className="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px" />
                  <p className="c_loc_sec_title">Chennai</p>
                  <p className="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div className="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px" />
                  <p className="c_loc_sec_title">Jamshedpur</p>
                  <p className="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div className="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px" />
                  <p className="c_loc_sec_title">Patna</p>
                  <p className="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
                <div className="c_sec_loc_inner my-2">
                  <img src="/images/Vector.png" alt="" height="40px" />
                  <h5 className="c_loc_sec_title">Patna</h5>
                  <p className="c_loc_sec_desc">58,Ralph Ave New York,New York 111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map_container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7441.68091850823!2d72.78242768220215!3d21.15874651462442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675149979922!5m2!1sen!2sin" width="1600" height="460" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="c_map"></iframe>
        </div>
      </div>

      <Footer />
    </>
  )
}