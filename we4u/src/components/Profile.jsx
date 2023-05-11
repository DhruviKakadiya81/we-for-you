import React from 'react'
import { Navbar } from './Navbar'
import { FormControl, FormGroup, Input, InputLabel,Button,FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material';
import "../css/Profile.css";
import { makeStyles,TextField } from '@material-ui/core';
import {Modal} from 'react-bootstrap';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from 'react';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Profile = () => {
  const classes = useStyles();
  
  return (
    <>
    <Navbar/>
     <div className='profile_main_container'>
      <div className="profile_full_form">
        <div className="image_container order-2 order-lg-1">
          <h3 className="title pt-5 mt-5 pb-5">We4U</h3>
          <img src="Images/avtar.jpg" alt="" width="180" height="180" className='img mt-5'/>
        </div>

        <div className="profile_form_container order-1 order-lg-2 p-5">
          <form action="">
            <h3 className='title mb-5'>Profile</h3>
            <div className="pro_input_container">
            <input type="text" placeholder='Enter First Name' className='input_field px-5 py-2 my-4'/>
            </div>
            <div className="pro_input_container">
            <input type="text" placeholder='Enter Second Name' className='input_field px-5 py-2 my-2 mb-4'/>
            </div>
            <div className="pro_input_container">
            <label for="birthday" className='lbl_birthday mx-3'>Birthday : </label>
            <input type="date" id="birthday" name="birthday" className='input_date_field px-4 py-1 my-2'/>
            </div>
            <div className="pro_input_container">
            <label className='lbl_gender mx-3'>Gender : </label>
            <input type="radio" value="Female" className='radio_detail'/>
            <label For="Female" className='me-4 ms-1 radio_detail'> Female </label>
            <input type="radio" value="Female" className='radio_detail'/>
            <label For="Female" className='me-2 ms-1 radio_detail'> Male </label>
            </div>
            <div className="pro_input_container">
            <FormControl className='mb-3 mx-auto'>
                <Button type='submit' variant='contained' className='my-3 px-5 py-3' style={{backgroundColor:"rgb(50,50,50)",color:"white"}}>Add Details</Button>
            </FormControl><br/>
            </div>
            <div className="pro_input_container">
            <FormControl>
                <ChangePass/>
            </FormControl>
            </div>
          </form>
        </div>
      </div>
     </div>
    </>
  )
}

export default Profile

const ChangePass = (props)=>{
  const [isshow, invokemodel] = useState(false);
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const [password, setPass] = useState("");
  
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const handledelete = async(id,e) =>{
   }

   const handletogglepass = async (event) => {
    //event.preventDefault();
    var x = document.getElementById("id_password");
    if (x.type === "password") {
      x.type = "text";
      seteye("fa-solid fa-eye");
    } else {
      x.type = "password";
      seteye("fa-sharp fa-solid fa-eye-slash");
    }
  };
   
  return(
    <>
     <Button variant="contained" style={{backgroundColor:"white",color:"black"}} onClick={initmodel}>
       Change Password??
      </Button>
      <Modal show={isshow} style={{overflowX:"scroll",width:"100%"}} >
        <Modal.Header closeButton onClick={initmodel}>
          <Modal.Title className='' > 
            Change Password
          </Modal.Title>
        </Modal.Header>
      
          <Modal.Body>
              <div className="dlt">
              <FormControl className='mb-3 detail_container'>
               <InputLabel className='mx-3'>Old Password</InputLabel>
               <Input type="password" name="password" className='my-3' onChange={(event) => setPass(event.target.value)} id="id_password" />
              </FormControl>
              <i
                        className={eye}
                        id="togglePassword"
                        style={{ marginLeft: "-25px", cursor: "pointer" }}
                        onClick={handletogglepass} by

                      ></i>
              <br/>
              <FormControl className='mb-3 detail_container'>
                  <InputLabel className='mx-3' >New Password</InputLabel>
                  <Input type="text" name="name" className='my-3'  />
              </FormControl><br/>
              <FormControl className='mb-3 detail_container'>
                  <InputLabel className='mx-3' >Confirm New Password</InputLabel>
                  <Input type="text" name="name" className='my-3'  />
              </FormControl><br/>
              </div>             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" className="mx-3" onClick={initmodel} style={{backgroundColor:"red"}}>
              CLOSE
            </Button>
            <Button variant=""  className="mx-3" type='submit' style={{backgroundColor:"black",color:"white"}} onClick={(e)=>handledelete(props.id,e)}>
              Change
            </Button>
          </Modal.Footer>
      
      </Modal>
     
    </>
  )
}