import { AdminNavbar } from './AdminNavbar';
import React from 'react'
import { useState, useEffect } from 'react'
import managearea from '../services/managearea'
import managecity from '../services/managecity'
import "../css/ManageArea.css";
import { Button, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import { FormControl, FormGroup, Input, InputLabel, Typography,Select,MenuItem } from '@mui/material'
import {useFormik} from "formik"

export const ManageArea = () => {
    const [areaname, setareaname] = useState('');
    const [cityname, setcityname] = useState('');
    const [cityid, setcityid] = useState("");
    const [citydata, setcitydata] = useState([]);
    const [area, setAreaData] = useState([]);
    const [isEdit, setisEdit] = useState(true);
    const errors={};
    let counter = 1;
    const handleAddArea = async (event) => {
        const data = { areaname, cityid }
        // alert(data);
        // console.log("data----", data);
        const response = await managearea.addarea(data);
        console.log("response", response);
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
        // console.log("response", response);
        setcitydata(response.data.data);
        // console.log("citydata ---", citydata);
    }
    const handleAreaData = async () => {

        const response = await managearea.getarea();
        console.log("responsearea----", response);
        setAreaData(response.data.data);
        console.log("area ---", area);
    }
    const handleSelect = (eventKey, event) => {
        console.log("hello---",event.target.getAttribute('data-value'));
        alert(eventKey)
        setcityid(event.target.getAttribute('data-value'));
        setcityname(event.target.getAttribute('value'));
        alert(cityname);
    }

    useEffect(() => {
        console.log("isedit", isEdit);
        setAreaData(area);
        isEdit && handleAreaData();
        setisEdit(true);
    },[isEdit]);

    useEffect(() => {
        handleCityData();
    }, []);

    const validate = values => {

        if (!values.area) {
          errors.area = 'Required';
        }else if (!/^[a-zA-Z\\s]+$/i.test(values.area)) {
            errors.area = 'You Can Insert Only Characters';
        }

        if (!values.Select_city) {
            errors.Select_city = 'Required';
          }
        return errors;
      };
    
      const formik = useFormik({
        initialValues: {
            areaname,
            cityid
        },
        validate,
        validateOnChange: true,
      });


    return (
        <>
            <AdminNavbar>

<FormGroup className='mx-auto area_container'>
                <Typography variant='h4' className='add_area_heading'>Add Area</Typography>
                <div className="mt-5 mx-auto main_area_container">
                   <FormControl className='area_detail_container' sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel className=''>Enter Area Name</InputLabel>
                    <Input variant='dark' type='text' name='area' onChange={(event)=>{
                    formik.handleChange(event);
                    setareaname(event.target.value);
                }} onBlur={formik.handleBlur} className='my-3'/>
                {formik.touched.area && formik.errors.area && (
                        <div>{formik.errors.area}</div>
                )}
                   </FormControl><br/>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='mb-3 area_detail_container'>
                    <InputLabel id="demo-simple-select-standard-label">Select City</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    name='Select_city'
                    id="demo-simple-select-standard"
                    label="Select City"
                    onChange={(event)=>{
                    formik.handleChange(event);
                    setcityid(event.target.value);
                    }} 
                onBlur={formik.handleBlur}
                    >
                    {citydata.map(city => (
                            <MenuItem key={city._id}   onSelect={handleSelect} data-value={city._id} value={city._id}>{city.cityname}</MenuItem>

                    ))}
                    </Select>
                    {formik.touched.Select_city && formik.errors.Select_city && (
                        <div>{formik.errors.Select_city}</div>
                )}
                   </FormControl><br/>

                   {/* <FormControl className='area_detail_container'  >
                        <InputLabel className=''>Selected City Name</InputLabel>
                        <Input variant="dark" type="text" name="name" value={cityname}  className='mx-3 my-3' style={{ color: "black" }} readOnly />
                    </FormControl><br /> */}

                   <FormControl className='mb-3 mx-auto'>
                    <Button type='submit' className='my-3 px-5 py-3' style={{backgroundColor:"rgb(50,50,50)",border:"none",color:"white"}} onClick={handleAddArea}>ADD AREA</Button>
                   </FormControl>

                </div>
            </FormGroup>
                {area != undefined && area.length > 0 && (
                    <div className="tablemain" id='abc'>
                        <table className="table table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>Area name</th>
                                    <th>City name</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>

                            </thead>
                            <tbody>

                                {area.map(area => (

                                    <tr key={area._id}>
                                        <td>{counter++}</td>
                                        <td>{area.areaname}</td>
                                        <td>{area.cityid.cityname}</td>

                                        <td>
                                            <Delete id={area._id} handleIsEdit={() => setisEdit(!isEdit)} />

                                        </td>
                                        <td>
                                            <Update areaname={area.areaname} id={area._id} cityid={area.cityid} handleIsEdit={() => setisEdit(!isEdit)} />
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

        const respo = await managearea.deleteData(id);
        props.handleIsEdit();


    }
    return (
        <>
            <Button variant="contained" style={{ backgroundColor: "rgb(50,50,50)", color: "white" }} onClick={initmodel}>
                Delete
            </Button>
            <Modal show={isshow} style={{ overflowX: "scroll", width: "100%", marginTop: "180px" }} >
                <Modal.Header closeButton onClick={initmodel}>
                    <Modal.Title className='' >
                        Delete City
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="dlt">
                        Are You Sure to Delete Area?
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

        </>
    )
}

const Update = (props) => {
    // const navigate = useNavigate();
    const [citydata, setcitydata] = useState([]);
    const [isshow, invokemodel] = useState(false);
    const [areaname, setareaname] = useState(props.areaname);
    const [cityname, setcityname] = useState(props.cityname);
    const [cityid, setcityid] = useState(props.cityid);
    const [id, setid] = useState(props.id);

    const handleCityData = async () => {

        const response = await managecity.getcity();
        console.log("response", response);
        setcitydata(response.data.data);
        console.log("citydata ---", citydata);
    }
    const initmodel = () => {
        return invokemodel(!isshow);
    }


    const handleSelect = (eventKey, event) => {
        console.log(eventKey);
        setcityid(eventKey);
        setcityname(event.target.getAttribute('value'));
    }

    const handleupdate = async (event) => {
        alert(id);
        const data = { areaname, cityid, id }
        alert(data);
        const respo = await managearea.updateData(data);
        console.log("updated---", respo);
        props.handleIsEdit();
        if (respo.data.success === true) {
            alert("updated")
            initmodel();
            //   window.location.reload();
            //alert("successful");
        }
        else {
            alert("enter another city");
        }

        // console.log(respo);
        // event.target.reset();
    }


    useEffect(() => {

        handleCityData();

    }, []);

    useEffect(() => {
        setareaname(props.areaname);
        setcityname(props.cityname);
        setcityid(props.cityid);
        setid(props.id);
    }, [props])



    return (

        <>
            <Button variant="contained" style={{ backgroundColor: "rgb(50,50,50)", color: "white" }} onClick={initmodel}>
                Edit
            </Button>
            <Modal show={isshow} style={{ overflowX: "scroll", width: "80%" }} >
                <Modal.Header closeButton onClick={initmodel}>
                    <Modal.Title className='' >
                        Update Product
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <div className="mt-5 text-center">
                        <FormControl className=''  >
                            <InputLabel className=''>Enter Area Name</InputLabel>
                            <Input variant="dark" type="text" value={areaname} name="name" onChange={(event) => setareaname(event.target.value)} className='mx-3 my-3' style={{ color: "black" }} />
                        </FormControl><br />
                        <br/>
                        <DropdownButton
                            title="Select City"
                            variant='Secondary'
                            onSelect={handleSelect}
                        >
                            {citydata.map(city => (
                                <Dropdown.Item key={city._id} eventKey={city._id} value={city.cityname}>{city.cityname}</Dropdown.Item>

                            ))}
                        </DropdownButton>
                        <FormControl className=''  >
                            <InputLabel className=''>Selected City Name</InputLabel>
                            <Input variant="dark" type="text" name="name" value={cityname} onChange={(event) => setcityname(event.target.value)} className='mx-3 my-3' style={{ color: "black" }} readOnly />
                        </FormControl><br />
                        <br />

                    </div>
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
