import React from 'react'
import { Navbar } from './Navbar'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button,FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material';
import "../css/Profile.css";
import { makeStyles,TextField } from '@material-ui/core';
import {Modal} from 'react-bootstrap';
import { useState } from 'react';

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
    <FormGroup>
      <Typography>Profile</Typography>
       <div>
        <FormControl>
          <InputLabel>Enter First Name</InputLabel>
          <Input type='text'/>
        </FormControl>
        <FormControl>
          <InputLabel>Enter Second Name</InputLabel>
          <Input type='text'/>
        </FormControl>
        <FormControl>
          <InputLabel>Enter Second Name</InputLabel>
          <Input type='text'/>
        </FormControl>
        <FormControl>
          <InputLabel>Enter Second Name</InputLabel>
          <Input type='text'/>
        </FormControl>
        <FormControl>
          <InputLabel>Enter Second Name</InputLabel>
          <Input type='text'/>
        </FormControl>
        <FormControl>
          <TextField 
            id='date'
            label='Birthday'
          />
        </FormControl>
       </div>
    </FormGroup>
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