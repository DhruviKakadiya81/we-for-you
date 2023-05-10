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
            <FormControl className='mb-3 detail_container'>
                    <InputLabel className='mx-3'>Enter First Name</InputLabel>
                    <Input type="text" name="name" className='my-3'  />
            </FormControl><br/>
            </div>
            <div className="pro_input_container">
            <FormControl className='mb-3 detail_container'>
                    <InputLabel className='mx-3' >Enter Second Name</InputLabel>
                    <Input type="text" name="name" className='my-3'  />
            </FormControl><br/>
            </div>
            <div className="pro_input_container">
            <FormControl className='{classes.container} mb-4 detail_container'>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2023-01-01"
                    className={classes.textField}
                    InputLabelProps={{
                          shrink: true,
                        }}
                  />
            </FormControl><br/>
            </div>
            <div className="pro_input_container">
            <FormControl className='mb-3 detail_container'>
                      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                      <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="female"
                      >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </RadioGroup>
            </FormControl><br/>
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
  
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const handledelete = async(id,e) =>{
   }
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
                  <Input type="text" name="name" className='my-3'  />
              </FormControl><br/>
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