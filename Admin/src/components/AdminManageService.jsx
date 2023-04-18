import React from 'react'
import { AdminNavbar } from './AdminNavbar'
import "../../src/css/AddServices.css"
import { useState } from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';
import addserv from '../services/addservice';

const AdminManageService = () => {
  const [s_name, setsname] = useState('');
  const [s_icon, sets_icon] = useState('');

  const handleAddServices = async(event)=>{
    event.preventDefault();
    const addser = { s_name , s_icon };
    alert(addser);
    const respo = await addserv.create(addser);
    alert(respo);
  }
  return (
    <AdminNavbar>

    <FormGroup className='main_container mx-auto'>
                    <Typography variant="h4" className='add_ser_heading'>Add Service</Typography>
                    {/* <Stack direction="horizontal" gap={2}> */}
                    <div className='mt-5 mx-auto'>
                                <FormControl className='mb-3 detail_container'>
                                    <InputLabel className='mx-3' >Enter Service Name</InputLabel>
                                    <Input type="text" name="name" className='mx-3 my-3'  />
                                    </FormControl><br/>
                                    <FormControl className='mb-3 detail_container'>
                                    <Input type='file' name='image' className='mx-3 my-3 ser_image' style={{borderBottom:"none"}}/>
                                    </FormControl><br/>
                                    <FormControl className='mb-3 mx-auto'>
                                    <Button className='add_btn my-3 px-5 py-3' style={{backgroundColor:"rgb(50,50,50)",color:"white",marginLeft:"150px"}}>Add Agent</Button>
                                </FormControl>
                    </div>
                    {/* </Stack> */}
      </FormGroup>


      
    {/* <div className='add_service_container px-5'>
     <p className="add_services_Heading pt-5">
      Add services
     </p>
     <div className="add_services mx-5 px-5">
     <form action="" method="post" onSubmit={handleAddServices} >
      <input type="text" name="s_name" onChange={(event)=>setsname(event.target.value)} className='Ser_name my-4 mt-4'/>
      <label for="">Enter The Service Name</label><br />
      <input type="file" name="s_icon" placeholder='choose the image' onChange={(event)=>sets_icon(event.target.value)} className='Ser_image my-4'/><br/>
      <button type='submit' className='add_btn mx-5 px-5 my-3'>Add Service</button>
     </form>
     </div>     
    </div> */}
    </AdminNavbar>
  )
}

export default AdminManageService
