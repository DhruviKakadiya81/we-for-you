import { AdminNavbar } from './AdminNavbar';
import React from 'react'
import { useState, useEffect } from 'react'
import managecity from '../services/managecity'
import styled from '@emotion/styled'
import "../css/ManageCity.css";
import { Button, Modal } from 'react-bootstrap';
import { FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { useFormik } from "formik"


const FlexColumnContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  box-sizing: border-box;
`;
const StepContainer = styled('div')`
  width: 100%;
  height: 100%;
`;


export const ManageCity = () => {
  const [msg, setmsg] = useState();
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const [cityname, setcityname] = useState('');
  const [citydata, setcitydata] = useState([]);
  const [isEdit, setisEdit] = useState(true);
  let counter = 1;

  const errors = {};
  const handleAddCity = async () => {
    // alert(cityname);

    const response = await managecity.addcity({ cityname });
    // console.log("response", response);
    setisEdit(false);
    if (response.data.success === true) {
      setmsg("Added Successfully!!");
      initmodel();
    }
    else {
      setmsg("Already Added!! Add Another City");
      initmodel();
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


  const validate = values => {

    if (!values.city) {
      errors.city = 'Required';
    } else if (!/^[a-zA-Z\\s]+$/i.test(values.city)) {
      errors.city = 'You Can Insert Only Characters';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      cityname
    },
    validate,
    validateOnChange: true,
  });


  return (
    <>
      <AdminNavbar>
        <Modal show={isshow}  >
          <Modal.Header className='text-center'>
            <Modal.Title className='' >
              City Added Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {msg}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" className="mx-3" onClick={initmodel}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <StepContainer>
      <div className="outer_container">
        <div
          className="inner_container"
        >
          <FlexColumnContainer>
            <div className="step_heading_container">
              Add City
            </div>
            <FlexColumnContainer width="100%">
              <div className="step_form_container">
                <label>Enter City Name</label><br />

                <input type="text" className="px-2 py-1 mb-3 step_input" name="city" value ={cityname} onChange={(event)=>{
                    formik.handleChange(event);
                    setcityname(event.target.value);
                }} onBlur={formik.handleBlur}/><br />

                     {formik.touched.city && formik.errors.city && (
                        <div>{formik.errors.city}</div>
                )}

                <input type='button' value="Add City" className='mx-4 px-3 py-2 my-2' style={{backgroundColor:"rgb(50,50,50)",borderRadius:"5px",color:"white"}}/>
                
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer> */}



        <FormGroup className='city_main_container mx-auto'>
          <Typography variant='h4' className='add_city_heading'>Add City</Typography>
          <div className="mx-auto mt-5">
            <FormControl className='mb-3 city_detail_container'>
              <InputLabel className='mx-3'>Enter City Name</InputLabel>
              <Input type='text' name='city' value={cityname} onChange={(event) => {
                formik.handleChange(event);
                setcityname(event.target.value);
              }} onBlur={formik.handleBlur} className='mx-3 my-3' />
              {formik.touched.city && formik.errors.city && (
                <div className="formik_error">{formik.errors.city}</div>
              )}
            </FormControl><br />
            <FormControl>
              <Button type='submit' className='my-3 px-5 py-3' onClick={handleAddCity} style={{ backgroundColor: "rgb(50,50,50)", border: "none", color: "white" }}>ADD CITY</Button>
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
  const handledelete = async (id, e) => {

    const respo = await managecity.deleteData(id);
    props.handleIsEdit();


  }
  return (
    <>
      <Button variant="contained" style={{ backgroundColor: "rgb(50,50,50)", color: "white" }} onClick={initmodel}>
        Delete
      </Button>
      <Modal show={isshow} style={{ overflowX: "scroll", width: "100%", marginTop: "px" }} >
        <Modal.Header closeButton onClick={initmodel}>
          <Modal.Title className='' style={{ fontWeight: "bold" }}>
            Delete City
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="dlt">
            Are You Sure To Delete City?
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="mx-3" onClick={initmodel}>
            CLOSE
          </Button>
          <Button variant="danger" className="mx-3" type='submit' onClick={(e) => handledelete(props.id, e)}>
            Delete
          </Button>
        </Modal.Footer>

      </Modal>

    </>
  )
}

const Update = (props) => {
  // const navigate = useNavigate();
  const [isshow, invokemodel] = useState(false);
  const [msg, setmsg] = useState();
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const [isshow1, invokemodel1] = useState(false);
  const initmodel1 = () => {
    return invokemodel1(!isshow1);
  }
  const [cityname, setname] = useState(props.cityname);
  const [id, setid] = useState(props.id);

  useEffect(() => {
    setid(props.id);
    setname(props.cityname);
  }, [props])


  const handleupdate = async (event) => {
    // alert(id);
    const data = { cityname, id }
    // alert(data);
    const respo = await managecity.updateData(data);
    props.handleIsEdit();
    if (respo.data.success === true) {
      initmodel();
      setmsg("Updated Successfully")
      initmodel1();
    }
    else {
      alert("enter another city");
    }

    // console.log(respo);
    // event.target.reset();    

  }
  return (

    <>
      <Modal show={isshow1}  >
        <Modal.Body>
          <div className="">
            <b>
              {msg}
            </b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="mx-3" type='submit' onClick={initmodel1}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="contained" style={{ backgroundColor: "rgb(50,50,50)", color: "white" }} onClick={initmodel}>
        Edit
      </Button>
      <Modal show={isshow} style={{ overflowX: "scroll", width: "100%" }} >
        <Modal.Header closeButton onClick={initmodel}>
          <Modal.Title className='' style={{ fontWeight: "bold" }} >
            Update City
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <FormControl className='mx-auto detail_container'  >
            <InputLabel className=''>Enter Cityname</InputLabel>
            <Input variant="dark" type="text" name="name" value={cityname} onChange={(event) => setname(event.target.value)} className='mx-3 my-3' style={{ color: "black" }} />
          </FormControl><br />


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




