import React from 'react'
import { AdminNavbar } from './AdminNavbar'
import "../../src/css/AddServices.css"
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';
import { useState } from 'react'
import addserv from '../services/manageservice';
import {useFormik} from "formik"

const AdminManageService = () => {
  const [s_name, setsname] = useState('');
  const [s_icon, sets_icon] = useState('');
  const errors={};

  const handleAddServices = async(event)=>{
    event.preventDefault();
    const addser = { s_name , s_icon };
    alert(addser);
    const respo = await addserv.create(addser);
    alert(respo);
  }

  const validate = values => {

    if (!values.service) {
      errors.service = 'Required';
    }else if (!/^[a-zA-Z\\s]+$/i.test(values.service)) {
        errors.service = 'You Can Insert Only Characters';
      }

      if (!values.image) {
        errors.image = 'Required';
      }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      s_name,
      s_icon
    },
    validate,
    validateOnChange: true,
  });
  
  return (
    <AdminNavbar>
 
    <FormGroup className='city_main_container mx-auto'>
                <Typography variant='h4' className='add_city_heading'>Add Service</Typography>
                <div className="mx-auto mt-5">
                   <FormControl className='mb-3 city_detail_container'>
                    <InputLabel className='mx-3'>Enter Service Name</InputLabel>
                    <Input type='text' name='service' onChange={(event)=>{
                    formik.handleChange(event);
                    setsname(event.target.value);
                }} onBlur={formik.handleBlur} className='mx-3 my-3'/>
                   {formik.touched.service && formik.errors.service && (
                        <div>{formik.errors.service}</div>
                    )}
                   </FormControl><br/>
                   <FormControl className='mb-3 city_detail_container'>
                                    <Input type='file' name='image'
                                    onChange={(event)=>{
                    formik.handleChange(event);
                    sets_icon(event.target.files[0]);
                }} onBlur={formik.handleBlur}
                 className='mx-3 my-3' style={{borderBottom:"none"}}/>
                 {formik.touched.image && formik.errors.image && (
                        <div>{formik.errors.image}</div>
                )}
                                    </FormControl><br/>
                   <FormControl>
                    <Button type='submit' className='my-3 px-4 py-3' style={{backgroundColor:"rgb(50,50,50)",border:"none",color:"white"}}>ADD SERVICE</Button>
                   </FormControl>
                </div>
            </FormGroup>

    {/* <FormGroup className='main_container mx-auto'>
                    <Typography variant="h4" className='add_ser_heading'>Add Service</Typography>
                 
                    <div className='mt-5 mx-auto'>
                                <FormControl className='mb-3 detail_container'  >
                                    <InputLabel className='mx-3' >Enter Service Name</InputLabel>
                                    <Input type="text" name="ser_name"
                                    onChange={(event)=>{
                                      formik.handleChange(event);
                                      setsname(event.target.value);
                                  }} 
                                  onBlur={formik.handleBlur}
                                     className='mx-3 my-3'  />
                                     {formik.touched.ser_name && formik.errors.ser_name && (
                        <div>{formik.errors.ser_name}</div>
                )}
                                    </FormControl><br/>
                                    <FormControl className='mb-3 detail_container'>
                                    <Input type='file' name='image' onChange={(event)=>sets_icon(event.target.files[0])} className='mx-3 my-3 ser_image' style={{borderBottom:"none"}}/>
                                    </FormControl><br/>
                                    <FormControl className='mb-3 mx-auto'>
                                    <Button type='submit' className='add_btn my-3 px-5 py-3 ' onClick={handleAddServices} style={{backgroundColor:"rgb(50,50,50)",color:"white",marginLeft:"150px"}}>Add Agent</Button>
                                </FormControl>
                    </div>
                  
      </FormGroup> */}




    
    </AdminNavbar>
  
  )
}

export default AdminManageService
