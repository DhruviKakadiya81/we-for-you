import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import sp from '../services/managesp';
import { AdminNavbar } from './AdminNavbar';
export const ManageSP = () => {
  let counter = 1;
  const [spdata, setspdata] = useState({})
  const handlesp = async () => {
    const response = await sp.getser();
    setspdata(response);
  }

  useEffect(() => {
    handlesp();

  }, [])
  console.log("spdata", spdata);
  return (
    <>
      <AdminNavbar>
        <h1>
          Service providers
        </h1>
        {
          spdata.data ?
            <div className="tablemain" id='abc' style={{ overflowX: "scroll" }}>
              <table className="table table table-striped ">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Professional Email</th>
                    <th>User Email</th>
                    <th>City</th>
                    <th>Area</th>
                  </tr>

                </thead>
                <tbody>

                  {spdata.data.data.map(product => (

                    <tr key={product._id}>
                      <td>{counter++}</td>
                      <td>{product.firstname}</td>
                      <td>{product.lastname}</td>
                      <td>{product.gender}</td>
                      <td>{product.pemail}</td>
                      <td>{product.spid.email}</td>
                      <td>{product.cityid.cityname}</td>
                      <td>{product.areaid.areaname}</td>

                    </tr>

                  ))}
                </tbody>
              </table>
            </div>
            :
            <div className="d-flex justify-content-center ">
              <div className="spinner-border d-flex align-items-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
        }


      </AdminNavbar>
    </>
  )
}
