import React from 'react'
import { AdminNavbar } from './AdminNavbar'
import "../../src/css/AddServices.css"
import { useState } from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';

const AdminManageService = () => {
  const [s_name, setsname] = useState('');
  const [s_icon, sets_icon] = useState('');

  const handleAddServices = (event)=>{
    event.preventDefault();
    const addser = { s_name , s_icon };
    alert(addser);
  }
  return (
    <AdminNavbar>
    <div className='add_service_container px-5'>
     <p className="add_services_Heading mt-5">
      Add services
     </p>
     <div className="add_services mx-5 px-5">
     <form action="" method="post" onSubmit={handleAddServices} >
      <input type="text" name="s_name" placeholder='Enter the service name' onChange={(event)=>setsname(event.target.value)} className='Ser_name mx-5 my-3 mt-5'/><br />
      <input type="file" name="s_icon" placeholder='choose the image' onChange={(event)=>sets_icon(event.target.value)} className='Ser_image mx-5 my-3'/><br/>
      <button type='submit' className='add_btn mx-5 px-5 my-5'>Add Your Service</button>
     </form>
     </div>     
    </div>
    </AdminNavbar>
  )
}

export default AdminManageService
