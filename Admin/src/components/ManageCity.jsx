import { AdminNavbar } from './AdminNavbar';
import React from 'react'
import { useState, useEffect } from 'react'
import managecity from '../services/managecity'
import "../css/ManageCity.css";
import { Button,Modal} from 'react-bootstrap';
import { FormControl, FormGroup, Input, InputLabel, Typography} from '@mui/material';
export const ManageCity = () => {
    const [cityname, setcityname] = useState('');
    const [citydata, setcitydata] = useState([]);
    const [isEdit, setisEdit] = useState(true);
    let counter = 1;
    const handleAddCity = async () => {
        // alert(cityname);

        const response = await managecity.addcity({ cityname });
        // console.log("response", response);
        setisEdit(false);
        if (response.data.success === true) {
            alert("added successfully");
            setcityname("");
        }
        else {
            alert("add another city");
        }
    }

    const handleCityData = async () => {

        const response = await managecity.getcity();
        console.log("response", response);
        setcitydata(response.data.data);
        console.log("citydata ---", citydata);
    }

    useEffect(() => {
        console.log("isedit", isEdit);
        isEdit && handleCityData();
        setisEdit(true);
    }, [isEdit])

    const columns = [
        { dataField: 'Index', text: 'Index' },
        { dataField: 'cityname', text: 'Name' }
      ];
      
    //   const data = [
    //     { id: 1, name: 'John', age: 25 },
    //     { id: 2, name: 'Jane', age: 30 },
    //     { id: 3, name: 'Bob', age: 40 },
    //   ];
      

    return (
        <>
            <AdminNavbar>
            <FormGroup className='city_main_container mx-auto'>
                <Typography variant='h4' className='add_city_heading'>Add City</Typography>
                <div className="mx-auto mt-5">
                   <FormControl className='mb-3 city_detail_container'>
                    <InputLabel className='mx-3'>Enter City Name</InputLabel>
                    <Input type='text' name='name' value ={cityname} onChange={(event)=>setcityname(event.target.value)} className='mx-3 my-3'/>
                   </FormControl><br/>
                   <FormControl>
                    <Button type='submit' className='my-3 px-5 py-3' onClick={handleAddCity} style={{backgroundColor:"rgb(50,50,50)",border:"none",color:"white"}}>ADD CITY</Button>
                   </FormControl>
                </div>
            </FormGroup>

                {citydata != undefined && citydata.length > 0 && (
                    <div className="tablemain pagination" id='abc'>
                        <table id="dtBasicExample" className="table table-striped table-sm" cellSpacing="1" width="100%" >
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>City name</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>

                            </thead>
                            <tbody>

                                {citydata.map(city => (

                                    <tr key={city._id}>
                                        <td>{counter++}</td>
                                        <td>{city.cityname}</td>
                                        <td>
                                            <Delete id={city._id} handleIsEdit={() => setisEdit(!isEdit)} />

                                        </td>
                                        <td>
                                            <Update cityname={city.cityname} id={city._id} handleIsEdit={() => setisEdit(!isEdit)} />
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                )} 
 
  
              
            </AdminNavbar>
        </>
    )
}

const Delete = (props) => {
    const [isshow, invokemodel] = useState(false);

    const initmodel = () => {
        return invokemodel(!isshow);
    }
    const handledelete = async(id,e) =>{
   
      const respo = await managecity.deleteData(id);
      props.handleIsEdit();
      
   
     }
    return(
      <>
       <Button variant="contained" style={{backgroundColor:"rgb(50,50,50)",color:"white"}} onClick={initmodel}>
         Delete
        </Button>
        <Modal show={isshow} style={{overflowX:"scroll",width:"100%",marginTop:"px"}} >
          <Modal.Header closeButton onClick={initmodel}>
            <Modal.Title className='' > 
              Delete City
            </Modal.Title>
          </Modal.Header>
        
            <Modal.Body>
                <div className="dlt">
                  Are You Sure to Delete City?
                </div> 
            </Modal.Body>
            <Modal.Footer>
              <Button variant="" className="mx-3"  onClick={() => {initmodel}} style={{backgroundColor:"red"}}>
                CLOSE
              </Button>
              <Button variant=""  className="mx-3" type='submit' style={{backgroundColor:"red"}} onClick={(e)=>handledelete(props.id,e)}>
                Delete
            </Button>
            <Modal show={isshow} style={{ overflowX: "scroll", width: "100%", marginTop: "px" }} >
                <Modal.Header closeButton onClick={initmodel}>
                    <Modal.Title className='' >
                        Delete City
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="dlt">
                        Are You Sure to Delete City?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="" className="mx-3" onClick={() => { initmodel }} style={{ backgroundColor: "red" }}>
                        CLOSE
                    </Button>
                    <Button variant="" className="mx-3" type='submit' style={{ backgroundColor: "red" }} onClick={(e) => handledelete(props.id, e)}>
                        Delete
                    </Button>
                </Modal.Footer>

            </Modal>
            </Modal.Footer>
        </Modal>
      </>
    )
}

const Update = (props) => {
    // const navigate = useNavigate();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }
    const [cityname, setname] = useState(props.cityname);
    const [id, setid] = useState(props.id);

    useEffect(() => {
        setid(props.id);
        setname(props.cityname);
    }, [props])


    const handleupdate = async (event) => {
        alert(id);
        const data = { cityname, id }
        alert(data);
        const respo = await managecity.updateData(data);
        props.handleIsEdit();
        if (respo.data.success === true) {
            alert("updated successfully")
            initmodel();
        }
        else {
            alert("enter another city");
        }

        // console.log(respo);
        // event.target.reset();    
    
      }
  return ( 

     <>
     <Button variant="contained" style={{backgroundColor:"rgb(50,50,50)",color:"white"}} onClick={initmodel}>
        Edit
      </Button>
      <Modal show={isshow} style={{overflowX:"scroll",width:"80%"}} >
        <Modal.Header closeButton onClick={initmodel}>
          <Modal.Title className='' > 
            Update Product
          </Modal.Title>
        </Modal.Header>
      
          <Modal.Body>
       
              <FormControl className='detail_container'  >
              <InputLabel className=''>Enter cityName</InputLabel>
              <Input variant="dark" type="text" name="name" value ={cityname} onChange={(event)=>setname(event.target.value)} className='mx-3 my-3' style={{color:"black"}} />
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
                    <Button variant="dark" className="mx-3" type='submit' onClick={handleupdate}>
                        Update
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}




