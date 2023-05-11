import React from 'react'
import { AdminNavbar } from './AdminNavbar';
import "../css/AdminNavbar.css";
import "../css/AdminDashboard.css";

const AdminDashboard = () => {
  return (
 <AdminNavbar>
   <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Service Provider</h5>
        <p class="card-text">89</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Customer</h5>
        <p class="card-text">40</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total serivces</h5>
        <p class="card-text">40</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Customer</h5>
        <p class="card-text">40</p>
      </div>
    </div>
  </div>
</div>
 <div class="row mt-3">
  <div class="col-sm-8">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Service Provider</h5>
        <p class="card-text">89</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Customer</h5>
        <p class="card-text">40</p>
      </div>
    </div>
  </div>
</div>
 </AdminNavbar>
  )
}

export default AdminDashboard
