import React from 'react'

import { AdminNavbar } from '../components/AdminNavbar';
import '../../../Admin/src/css/ShowServices.css'
import showservice from '../../../we4u/src/services/Services';
import { useState } from 'react';
import { useEffect } from 'react';
import delser from '../services/addservice';

import { AdminNavbar } from '../../../Admin/src/components/AdminNavbar'
// import '../../../Admin/src/css/ShowServices.css'

export const ShowServices = () => {
  const [service, setService] = useState([]);
  
   let counter = 1;
  var ser;
  const fetchSer = async (event) => {
    // event.prventDefault();
    ser = await showservice.getservice();
    console.log("services : ",ser);
   // console.log("data :", ser.data.data[0].s_name);
    setService(ser);
    // console.log("data2 :", service.data.data.length);
  }
  const handledelete = async(id,e) =>{
   alert(id);
    var ser_id = {id};
   const respo = await delser.deleteData(ser_id);
   alert("respo : " , respo);


  }
  
  useEffect((event) => {
    fetchSer();
  },[service]);
  return (
    <AdminNavbar>
    <h1>
      All main Services
    </h1>
    {service.data != undefined && service.data.data.length > 0 && (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th>Index</th>
                            <th>Service name</th>
                            <th>Service Icon</th>
                            <th>Delete</th>
                            <th>Update</th>
                            </tr>

                        </thead>
                        <tbody>
                          
                            {service.data.data.map(product => (
                             
                                <tr key={product._id}>
                                    <td>{counter++}</td>
                                    <td>{product.s_name}</td>
                                    <td>
                                        <img src={'http://localhost:4000/image/' + product.s_icon} alt="not" style={{ "width": "100px", "height": "100px" }} />
                                    </td>
                                    <td>
                                        <button id={product._id} onClick={(e)=>handledelete(product._id,e)}>delete</button>
                                    </td>
                                    <td>
                                      hello
                                        {/* <Updateproduct pid={product._id} pname={product.pname} prize={product.prize} qty={product.qty} desc={product.desc} image={product.image} /> */}

                                    </td>
                                </tr>
                          
                            ))}
                      
                        </tbody>
                    </table>
                )}
            
    
    </AdminNavbar>
  
  )
}
