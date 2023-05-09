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
      <div className="pro_div_container">
        <div className="pro_whole_div">
          <div className="pro_img_container col-9">
          <h5>We4U</h5>
           <img src="Images/test.jpg" alt="" width="100" height="100"/>
          </div>

          <div className="pro_form col-6">
            <form action="">
              <h3 className="pro_title">Profile</h3>
              <div className="pro_input">
              <input type="text" placeholder='Enter First Name'/><br/>
              <input type="text" placeholder='Enter Second Name'/><br/>
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
              <FormControl className='mb-3 mx-auto'>
                                  <Button type='submit' variant='contained' className='my-3 px-5 py-3' style={{backgroundColor:"rgb(50,50,50)",color:"white",marginLeft:"160px"}}>Add Agent</Button>
                                </FormControl><br/>
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