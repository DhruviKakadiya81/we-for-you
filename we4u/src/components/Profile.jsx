import React from 'react'
import { Navbar } from './Navbar'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button,FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material';
import "../css/Profile.css";
import { makeStyles,TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
 <FormGroup className='mx-auto main_container'>
                    <Typography variant="h4" className='Pro_heading'>Profile</Typography>
                 
                    <div className='mt-5 mx-auto'>
                                <FormControl className='mb-3'>
                                    <InputLabel className='mx-3'>Enter First Name</InputLabel>
                                    <Input type="text" name="name" className='mx-3 my-3'  />
                                    </FormControl><br/>
                                    <FormControl className='mb-3'>
                                    <InputLabel className='mx-3' >Enter Second Name</InputLabel>
                                    <Input type="text" name="name" className='mx-3 my-3'  />
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
                                      />
                                    </FormControl><br/>
                                    <FormControl>
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
                                  <Button type='submit' variant='contained' className='my-3 px-5 py-3 '>Add Agent</Button>
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