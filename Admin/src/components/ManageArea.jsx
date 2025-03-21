import { AdminNavbar } from './AdminNavbar';
import React from 'react'
import { useState, useEffect } from 'react'
import managearea from '../services/managearea'
import managecity from '../services/managecity'
import "../css/ManageArea.css";
import { Button, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import { FormControl, FormGroup, Input, InputLabel, Typography, Select, MenuItem } from '@mui/material'
import { useFormik } from "formik"

export const ManageArea = () => {
    const [areaname, setareaname] = useState('');
    const [cityname, setcityname] = useState('');
    const [cityid, setcityid] = useState("");
    const [citydata, setcitydata] = useState([]);
    const [area, setAreaData] = useState([]);
    const [isEdit, setisEdit] = useState(true);
    const [msg, setmsg] = useState();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }
    const errors = {};
    let counter = 1;
    const handleAddArea = async (event) => {
        const data = { areaname, cityid }
        // alert(data);
        // console.log("data----", data);
        const response = await managearea.addarea(data);
        console.log("response", response);
        setisEdit(false);
        if (response.data.success === true) {
            setmsg("Added Successfully!!");
            initmodel();
        }
        else {
            setmsg("Already Added!! Add Another Area!!");
            initmodel();
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
        console.log("hello---", event.target.getAttribute('data-value'));
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
    }, [isEdit]);

    useEffect(() => {
        handleCityData();
    }, []);

    const validate = values => {

        if (!values.area) {
            errors.area = 'Required';
        } else if (!/^[a-zA-Z\\s]+$/i.test(values.area)) {
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
            <Modal show={isshow}  >
                {/* <Modal.Header className='text-center'>
                    <Modal.Title className='' >
                        Area Added Details
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body style={{fontWeight:"bold"}}>
                    {msg}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" onClick={initmodel}>
                       OK
                    </Button>
                </Modal.Footer>
                </Modal>
                <FormGroup className='mx-auto area_container'>
                    <Typography variant='h4' className='add_area_heading'>Add Area</Typography>
                    <div className="mt-5 mx-auto main_area_container">
                        <FormControl className='area_detail_container' sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel className=''>Enter Area Name</InputLabel>
                            <Input variant='dark' type='text' name='area' onChange={(event) => {
                                formik.handleChange(event);
                                setareaname(event.target.value);
                            }} onBlur={formik.handleBlur} className='my-3' />
                            {formik.touched.area && formik.errors.area && (
                                <div className='formik_error'>{formik.errors.area}</div>
                            )}
                        </FormControl><br />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='mb-3 area_detail_container'>
                            <InputLabel id="demo-simple-select-standard-label">Select City</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                name='Select_city'
                                id="demo-simple-select-standard"
                                label="Select City"
                                onChange={(event) => {
                                    formik.handleChange(event);
                                    setcityid(event.target.value);
                                }}
                                onBlur={formik.handleBlur}
                            >
                                {citydata.map(city => (
                                    <MenuItem key={city._id} onSelect={handleSelect} data-value={city._id} value={city._id}>{city.cityname}</MenuItem>

                                ))}
                            </Select>
                            {formik.touched.Select_city && formik.errors.Select_city && (
                                <div className='formik_error'>{formik.errors.Select_city}</div>
                            )}
                        </FormControl><br />

                        {/* <FormControl className='area_detail_container'  >
                        <InputLabel className=''>Selected City Name</InputLabel>
                        <Input variant="dark" type="text" name="name" value={cityname}  className='mx-3 my-3' style={{ color: "black" }} readOnly />
                    </FormControl><br /> */}

                        <FormControl className='mb-3 mx-auto'>
                            <Button type='submit' className='my-3 px-5 py-3' style={{ backgroundColor: "rgb(50,50,50)", border: "none", color: "white" }} onClick={handleAddArea}>ADD AREA</Button>
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
            <Modal show={isshow} style={{ overflowX: "scroll", width: "100%"}} >
                {/* <Modal.Header closeButton onClick={initmodel}>
                    <Modal.Title className='' style={{fontWeight:"bold"}}>
                        Delete Area
                    </Modal.Title>
                </Modal.Header> */}

                <Modal.Body style={{fontWeight:"bold"}}>
                    <div className="dlt">
                        Are You Sure To Delete Area?
                    </div>

                </Modal.Body>
                <Modal.Footer>             
                    <Button variant="danger" className="mx-3" type='submit' onClick={(e) => handledelete(props.id, e)}>
                        DELETE
                    </Button>
                    <Button variant="dark" className="mx-3" onClick={initmodel}>
              CLOSE
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
    const [msg, setmsg] = useState();
    const [areaname, setareaname] = useState(props.areaname);
    const [cityname, setcityname] = useState(props.cityname);
    const [cityid, setcityid] = useState(props.cityid);
    const [id, setid] = useState(props.id);

    const [isshow1, invokemodel1] = useState(false);
  const initmodel1 = () => {
    return invokemodel1(!isshow1);
  }

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
        // alert(id);
        const data = { areaname, cityid, id }
        // alert(data);
        const respo = await managearea.updateData(data);
        console.log("updated---", respo);
        props.handleIsEdit();
        if (respo.data.success === true) {
            // alert("updated")
            initmodel();
            setmsg("Updated Successfully")
           initmodel1();
            //   window.location.reload();
            //alert("successful");
        }
        else {
            initmodel();
            setmsg("Enter Another Area!!")
            initmodel1();
            // alert("enter another Area");
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
                    <Modal.Title className='' style={{fontWeight:"bold"}}>
                        Update Area
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <div className="mt-2">
                        <FormControl className=''  >
                            <InputLabel className=''>Enter Area Name</InputLabel>
                            <Input variant="dark" type="text" value={areaname} name="name" onChange={(event) => setareaname(event.target.value)} className='mx-3 my-3' style={{ color: "black" }} />
                        </FormControl><br />
                        <br />
                        <DropdownButton
                            title="Select City"
                            variant='Secondary'
                            onSelect={handleSelect}
                            className='mx-auto'
                        >
                            {citydata.map(city => (
                                <Dropdown.Item key={city._id} eventKey={city._id} value={city.cityname}>{city.cityname}</Dropdown.Item>

                            ))}
                        </DropdownButton>
                        {/* <FormControl className=''  >
                            <InputLabel className=''>Selected City Name</InputLabel>
                            <Input variant="dark" type="text" name="name" value={cityname} onChange={(event) => setcityname(event.target.value)} className='mx-3 my-3' style={{ color: "black" }} readOnly />
                        </FormControl><br />
                        <br /> */}

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
