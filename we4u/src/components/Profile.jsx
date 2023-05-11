import React from 'react'
import { Navbar } from './Navbar'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button,FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material';
import "../css/Profile.css";
import { makeStyles,TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import userprofile from '../services/UserProfile'
import { useEffect } from 'react';
import getLoginUser from '../services/GetUser'

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
  const [userid, setuserid] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [birthdate, setbirthdate] = useState('');
  const [gender, setgender] = useState('');
  const [image, setimage] = useState('');

  const handleProfile = async() =>{
    alert(firstname+lastname+birthdate+gender+image);
    const data ={firstname,lastname,birthdate,gender,image,userid};
    console.log("images===>",image);
    const respo = await userprofile.create(data);
    console.log("response---->",respo);
  }

  const getuser = async() => {
        console.log("hello");
        let id = localStorage.getItem("token");
        const respo = await getLoginUser.sendauth({id});
        console.log("response====>",respo.data.data._id);
        setuserid(respo.data.data._id);

  }
useEffect(() => {
  getuser();
}, [])



  return (
    <>
 <Navbar/>
 <FormGroup className='mx-auto main_container'>
                    <Typography variant="h4" className='Pro_heading'>Profile</Typography>
                 
                    <div className='mt-5 mx-auto'>
                                <FormControl className='mb-3'>
                                    <InputLabel className='mx-3'>Enter First Name</InputLabel>
                                    <Input type="text" name="name" className='mx-3 my-3' onChange={(event)=>{setfirstname(event.target.value)}} />
                                    </FormControl><br/>
                                    <FormControl className='mb-3'>
                                    <InputLabel className='mx-3' >Enter Last Name</InputLabel>
                                    <Input type="text" name="name" className='mx-3 my-3' onChange={(event)=>{setlastname(event.target.value)}} />
                                    </FormControl><br/>
                                    <FormControl className={classes.container}>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue="2023-01-01"
                                        className={classes.textField}
                                        InputLabelProps={{
                                          shrink: true,
                                        }}
                                        onChange={(event)=>{setbirthdate(event.target.value)}}
                                      />
                                    </FormControl><br/>
                                    <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                      row
                                      aria-labelledby="demo-row-radio-buttons-group-label"
                                      name="row-radio-buttons-group"
                                    
                                    >
                                      <FormControlLabel value="female" onChange={(event)=>{setgender(event.target.value)}} control={<Radio />} label="Female" />
                                      <FormControlLabel value="male" onChange={(event)=>{setgender(event.target.value)}} control={<Radio />} label="Male" />
                                      <FormControlLabel value="other" onChange={(event)=>{setgender(event.target.value)}} control={<Radio />} label="Other" />
                                    </RadioGroup>
                                  </FormControl><br/>
                                  <FormControl className='mb-3 detail_container'>
                                 <Input type='file' name='image' onChange={(event)=>setimage(event.target.files[0])} className='mx-3 my-3 ser_image' style={{borderBottom:"none"}}/>
                                    </FormControl><br/>
                                  <FormControl className='mb-3 mx-auto'>
                                  <Button type='submit' variant='contained' className='my-3 px-5 py-3' onClick={handleProfile}>Add Details</Button>
                                </FormControl><br/>
                                <FormControl>
                                  <Link to="#">Change Password?</Link>
                                </FormControl>
                    </div>
                  
      </FormGroup>
    </>
  )
}

export default Profile