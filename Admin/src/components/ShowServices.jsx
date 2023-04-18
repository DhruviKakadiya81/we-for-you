import React from 'react'
import { AdminNavbar } from '../../../we4u/src/components/AdminNavbar'
import '../../../Admin/src/css/ShowServices.css'
export const ShowServices = () => {
  return (
    <AdminNavbar>
    <div>
     <h1>
      add services
     </h1>
     <div className="container add_services">
     <form action="" method="post" >
      <input type="text" name="s_name" placeholder='Enter the service name'/><br />
      <input type="file" name="s_icon" id="" placeholder='choose the image'/><br/>
      <button type='submit'>add</button>
     </form>

     </div>
     
    </div>
    </AdminNavbar>
  
  )
}
