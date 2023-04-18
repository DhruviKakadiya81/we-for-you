import React from 'react'
import { AdminNavbar } from './AdminNavbar'
import "../../src/css/AddServices.css"
import { useState } from 'react'
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


    <div className='add_service_container px-5'>
     <p className="add_services_Heading pt-5">
      Add services
     </p>
     <div className="add_services mx-5 px-5">
     <form action="" method="post" onSubmit={handleAddServices} >
      <input type="text" name="s_name" placeholder='Enter the service name' onChange={(event)=>setsname(event.target.value)}/><br />
      <input type="file" name="s_icon" id="" placeholder='choose the image' onChange={(event)=>sets_icon(event.target.files[0])}/><br/>
      <button type='submit'>add</button>
     </form>
     </div>   
    </div>
    </AdminNavbar>
  
  )
}

export default AdminManageService
