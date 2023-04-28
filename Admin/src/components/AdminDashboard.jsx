import React from 'react'
import { AdminNavbar } from './AdminNavbar';
import "../css/AdminNavbar.css";

const AdminDashboard = () => {
  return (
    
   <AdminNavbar>
   <div style={{height:"1500px",backgroundColor:"red"}}>
    hello Dashboard pageDashboard pageDashboard pageDashboard pageDashboard page
    </div>
    <button type="button" class="btn btn-secondary tooltip-bg-white" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
 </AdminNavbar>

  )
}

export default AdminDashboard
