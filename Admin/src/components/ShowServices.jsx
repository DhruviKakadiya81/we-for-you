import React from 'react'
import { AdminNavbar } from '../components/AdminNavbar';
import '../../../Admin/src/css/ShowServices.css'
import showservice from '../../../we4u/src/services/Services';
import { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import delser from '../services/manageservice';
import { useNavigate } from 'react-router-dom'
import { UpdateService } from './UpdateService';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';
// import { AdminNavbar } from '../../../Admin/src/components/AdminNavbar'
// import '../../../Admin/src/css/ShowServices.css'

export const ShowServices = () => {
  const [service, setService] = useState([]);
  const navigate = useNavigate();

   let counter = 1;
  var ser;
  const fetchSer = async (event) => {
    // event.prventDefault();
    ser = await showservice.getservice();
    console.log("services : ",ser);
  
    setService(ser);
   
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
  console.log("not found",service.data);
  if(service.data === undefined){
    return(
      <AdminNavbar>
 <div className="d-flex justify-content-center ">
  <div className="spinner-border d-flex align-items-center" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
      </AdminNavbar>
     
    )
  }
  else if(service.data !== undefined){
     return (
    <AdminNavbar>
    <h1>
      All main Services
    </h1>
    {service.data !== undefined && service.data.data.length > 0 && (
      <div className="tablemain" id='abc'>
          <table className="table table table-striped table-sm">
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
                                      <DeleteService id = {product._id}/>
                                      
                                    </td>
                                    <td>
                                        <UpdateService s_icon={product.s_icon} s_name={product.s_name} s_id ={product._id}/>
                                    </td>
                                </tr>
                          
                            ))}
                        </tbody>
                    </table>
      </div>              
                )}
            
    
    </AdminNavbar>
  
  )
  }
 
}

const DeleteService = (props)=>{
  const [isshow, invokemodel] = useState(false);
  
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const handledelete = async(id,e) =>{
    alert(id);
    var ser_id = {id};
    const respo = await delser.deleteData(ser_id);
    alert("respo : " , respo);
 
 
   }
  return(
    <>
     <Button variant="contained" style={{backgroundColor:"rgb(50,50,50)"}} onClick={initmodel}>
       Delete
      </Button>
      <Modal show={isshow} style={{overflowX:"scroll",width:"100%",marginTop:"400px"}} >
        <Modal.Header closeButton onClick={initmodel}>
          <Modal.Title className='' > 
            Delete product
          </Modal.Title>
        </Modal.Header>
      
          <Modal.Body>
              <div className="dlt">
                Are You Sure to Delete Service?
              </div>
             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="" className="mx-3" onClick={initmodel} style={{backgroundColor:"red"}}>
              CLOSE
            </Button>
            <Button variant=""  className="mx-3" type='submit' style={{backgroundColor:"red"}} onClick={(e)=>handledelete(props.id,e)}>
              Delete
            </Button>
          </Modal.Footer>
      
      </Modal>
     
    </>
  )
}
