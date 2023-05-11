import React from 'react'
import { Modal } from 'react-bootstrap';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import addservice from '../services/manageservice';

export const UpdateService = (props) => {
    const navigate = useNavigate();
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }
    const [s_name, setsname] = useState(props.s_name);
    const [s_icon, sets_icon] = useState(props.s_icon);
    const [s_id, setid] = useState(props.s_id);
  
   
  
    const handleupdate = async (event) => {
        alert(s_id);
        const data = {_id:s_id,s_name,s_icon}
        alert(data);
        const respo = await addservice.updateService(data);
        alert(respo.data.success);
        if (respo.data.success == true) {
          initmodel();
        //   window.location.reload();
          //alert("successful");
        }
        else {
          alert("not successful");
        }
    
        // console.log(respo);
        //event.target.reset();
    
    
      }
  return ( 

     <>
     <Button variant="contained" style={{backgroundColor:"rgb(50,50,50)"}} onClick={initmodel}>
        Edit
      </Button>
      <Modal show={isshow} style={{overflowX:"scroll",width:"100%"}} >
        <Modal.Header closeButton onClick={initmodel}>
          <Modal.Title className='' > 
            Update Product
          </Modal.Title>
        </Modal.Header>
      
          <Modal.Body>
       
              <FormControl className='detail_container'  >
              <InputLabel className=''>Enter Service Name</InputLabel>
              <Input variant="dark" type="text" name="name" value ={s_name} onChange={(event)=>setsname(event.target.value)} className='mx-3 my-3' style={{color:"black"}} />
              </FormControl><br/>
              <FormControl className='detail_container'>
              <Input type='file' name='image' onChange={(event)=>sets_icon(event.target.files[0])} className='mx-3 my-3 ser_image' style={{borderBottom:"none"}}/>
              </FormControl><br/>
                                    
                   
                {/* <img src={'http://localhost:5000/uploads/' + image} alt="not" style={{ "width": "100px", "height": "100px" }} /> */}
                {/* <button type='submit' className='justify-content-center' style={{
                  "width": "200px",
                  "margin": "auto",
                  "padding": "10px"
                }} >send data</button> */}
             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" className="mx-3" onClick={initmodel}>
              CLOSE
            </Button>
            <Button variant="dark"  className="mx-3" type='submit' onClick={handleupdate}>
              Update
            </Button>
          </Modal.Footer>
      
      </Modal>
     </>
  )
}
