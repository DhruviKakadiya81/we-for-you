import React from 'react'
import { AdminNavbar } from './AdminNavbar'
import "../../src/css/AddServices.css"
import { FormControl, FormGroup, Input, InputLabel, Typography} from '@mui/material';
import { useState } from 'react'
import addserv from '../services/manageservice';
import {useFormik} from "formik"
import {Button, Modal } from 'react-bootstrap';

const AdminManageService = () => {
  const [s_name, setsname] = useState('');
  const [s_icon, sets_icon] = useState('');
  const [msg, setmsg] = useState();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }
  const errors={};

  const handleAddServices = async(event)=>{
    event.preventDefault();
    const addser = { s_name , s_icon };
    setmsg("Service Added Succesfully!!");
    initmodel();
    const respo = await addserv.create(addser);
    // alert(respo);
  }

  const validate = values => {

    if (!values.service) {
      errors.service = 'Required';
    }else if (!/^[a-zA-Z ]*$/i.test(values.service)) {
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
    <Modal show={isshow}  >
                {/* <Modal.Header className='text-center'>
                    <Modal.Title className='' >
                    Service Added Details
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body style={{fontWeight:"bold"}}>
                    {msg}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" type='submit' onClick={initmodel}>
                        Ok
                    </Button>
                </Modal.Footer>
                </Modal>
    <FormGroup className='ser_main_container mx-auto'>
                <Typography variant='h4' className='add_ser_heading'>Add Service</Typography>
                <div className="mx-auto mt-5">
                   <FormControl className='mb-3 ser_detail_container'>
                    <InputLabel className='mx-3'>Enter Service Name</InputLabel>
                    <Input type='text' name='service' onChange={(event)=>{
                    formik.handleChange(event);
                    setsname(event.target.value);
                }} onBlur={formik.handleBlur} className='mx-3 my-3'/>
                   {formik.touched.service && formik.errors.service && (
                        <div className="formik_error">{formik.errors.service}</div>
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
                        <div className="formik_error">{formik.errors.image}</div>
                 )}
                   </FormControl><br/>
                   <FormControl>
                    <Button type='submit' className='px-4 py-3 mb-4' style={{backgroundColor:"rgb(50,50,50)",border:"none",color:"white"}} onClick={handleAddServices}>ADD SERVICE</Button>
                   </FormControl>
                </div>
            </FormGroup>
    </AdminNavbar>
  
  )
}

export default AdminManageService
