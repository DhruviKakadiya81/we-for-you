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

export const Contact = () => {
    
  return (
    
    <>
    <Navbar/>
 
     <div className="container" style={{zIndex:"-1"}}>
        <div className="form">
            <div className="contact-info order-2 order-lg-1">
                <h3 className="title">Let's Contact With Us</h3>
                <p className="text">
                    We Love to Give Service Who Love Us.
                </p>

                <div className="info">
                    <div className="information">
                        <FaEnvelope className='icon'/>
                        <p className='info_detail'>we4uservices3@gmail.com</p>
                    </div>
                    <div className="information">
                        <FaPhoneAlt className='icon'/>
                        <p className='info_detail'>9035627167</p>
                    </div>
                </div>

                <div className="social-media">
                    <p>Connect With Us : </p>
                    <div className="social-icons">
                        <Link to="#">
                            <FaFacebook className='sub_social_icon'/>
                        </Link>
                        <Link to="#">
                            <FaTwitter className='sub_social_icon'/>
                        </Link>
                        <Link to="#">
                            <FaInstagram className='sub_social_icon'/>
                        </Link>
                        <Link to="#">
                            <FaLinkedin className='sub_social_icon'/>
                        </Link>
                    </div>
                </div>
            </div>

             <div className="contact-form order-1 order-lg-2 p-2">
            <form action="#" autoComplete='off' className='cont_form'>
            <h3 className="title mb-5">Contact Us</h3>
            <div className="input-container">
            <TextField id="outlined-basic" label="UserName" variant="outlined" className='input' style={{width:"90%"}}/>
            </div>
            <div className="input-container">
            <TextField id="outlined-basic" label="Email" variant="outlined" className='input' style={{width:"90%"}}/>
            </div>
            <div className="input-container">
            <TextField id="outlined-basic" label="Phone" variant="outlined" className='input' style={{width:"90%"}}/>
            </div>
            <div className="input-container">
            <TextField id="outlined-textarea" label="Message" multiline className='input' style={{width:"90%"}}/>
            </div>
            <Button variant="contained" className='btn'>Send</Button>
            </form>
            </div>
        </div>
     </div>
    </>
  )
}

