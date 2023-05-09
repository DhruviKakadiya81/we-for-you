import { AdminNavbar } from './AdminNavbar';
import React from 'react'
import { useState,useEffect } from 'react'
import managecity from '../services/managecity'
import { Button,Modal } from 'react-bootstrap';

export const ManageCity = () => {
    const [cityname, setcityname] = useState('');
    const [citydata, setcitydata] = useState([]);
    const [isEdit,setisEdit]=useState(true);
    let counter = 1;
    const handleAddCity = async () => {
        // alert(cityname);
        const data = { cityname };
        const response = await managecity.addcity({ cityname });
        // console.log("response", response);
        setisEdit(false);
        if (response.data.success === true) {
            alert("added successfully");
        }
        else {
            alert("add another city");
        }
    }

    const handleCityData = async () => {
    
        const response = await managecity.getcity();
        console.log("response", response);
        setcitydata(response.data.data);
        console.log("citydata ---",citydata);
    }

   useEffect(() => {
    console.log("isedit",isEdit);
    isEdit && handleCityData();
    setisEdit(true);
    }, [isEdit])
    
    

    return (
        <>
            <AdminNavbar>
                <div className="bg-danger">
                    <input type="text" name="cityname" onChange={(event) => { setcityname(event.target.value) }} />
                    <input type="button" value="Add City" onClick={handleAddCity} />
                </div>


                {citydata != undefined && citydata.length > 0 && (
                    <div className="tablemain" id='abc'>
                        <table className="table">
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
                                            <Delete id={city._id} handleIsEdit={() => setisEdit(!isEdit)}/>

                                        </td>
                                        <td>
                                            {/* <UpdateService s_icon={product.s_icon} s_name={product.s_name} s_id={product._id} /> */}
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

const Delete = (props)=>{
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
       <Button variant="contained" style={{backgroundColor:"black",color:"white"}} onClick={initmodel}>
         Delete
        </Button>
        <Modal show={isshow} style={{overflowX:"scroll",width:"100%",marginTop:"400px"}} >
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
            </Modal.Footer>
        
        </Modal>
       
      </>
    )
  }
  
