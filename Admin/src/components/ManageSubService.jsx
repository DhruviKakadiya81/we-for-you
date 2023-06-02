import { AdminNavbar } from './AdminNavbar';
import React from 'react'
import { useState, useEffect } from 'react'
import "../css/ManageCity.css";
import { Button, Modal } from 'react-bootstrap';
import { FormControl, FormGroup, Input, InputLabel, Typography, Select, MenuItem } from '@mui/material';
import subservice from '../services/managesubservice';
import {useFormik} from "formik"
export const ManageSubService = () => {
    const [citydata, setcitydata] = useState([]);
    const [subname, setsubname] = useState('');
    const [image, setimage] = useState('');
    const [isEdit, setisEdit] = useState(true);
    const [serviceid, setserviceid] = useState('');
    const [getser, setgetser] = useState([]);
    const errors={};
    let counter = 1;
    const handleAddser = async () => {
        alert(serviceid + subname + image);
        const response = await subservice.addsubser({ serviceid, subname, image })
        console.log("response", response);
        setisEdit(false);
        if (response.data.success === true) {
            alert("added successfully");
            setsubname("");
        }
        else {
            alert("it is already there add another");
        }
    }

    const handlesubser = async () => {

        const response = await subservice.showser();
        console.log("response", response);
        setcitydata(response.data.data);
        console.log("citydata ---", citydata);
    }

    const handleservice = async () => {
        try {
            const response = await subservice.getsubserbymain();
            setgetser(response.data.data);
            console.log("response", getser)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        console.log("isedit", isEdit);
        isEdit && handlesubser();
        setisEdit(true);
    }, [isEdit])
    useEffect(() => {
        handleservice();
    }, [])

    console.log("hello", getser);

    const validate = values => {

        if (!values.sub_name) {
          errors.sub_name = 'Required';
        }else if (!/^[a-zA-Z ]*$/i.test(values.sub_name)) {
            errors.sub_name = 'You Can Insert Only Characters';
        }

        if (!values.ser_image) {
            errors.ser_image = 'Required';
          }

          if (!values.serviceid) {
            errors.serviceid = 'Required';
          }
        return errors;
      };
    
      const formik = useFormik({
        initialValues: {
            subname,
            image,
            serviceid
        },
        validate,
        validateOnChange: true,
      });
      

    return (
        <>
            <AdminNavbar>

                <FormGroup className='city_main_container mx-auto h-auto'>
                    <Typography variant='h5' className='add_city_heading'>Add subservice</Typography>
                    <div className="mx-auto mt-5">
                        <FormControl className='mb-3 city_detail_container'>
                            <InputLabel className='mx-3'>Enter Sub Service Name</InputLabel>
                            <Input type='text' name='sub_name' value={subname}
                            onChange={(event)=>{
                            formik.handleChange(event);
                            setsubname(event.target.value);
                        }} onBlur={formik.handleBlur} 
                             className='mx-3 my-3' />
                         {formik.touched.sub_name && formik.errors.sub_name && (
                        <div className="formik_error">{formik.errors.sub_name}</div>
                         )}    
                        </FormControl><br />
                        <FormControl className='mb-3 city_detail_container'>

                            <Input type='file' name='ser_image' onChange={(event)=>{
                    formik.handleChange(event);
                    setimage(event.target.files[0]);
                }} onBlur={formik.handleBlur} className='mx-3 my-3' />
                {formik.touched.ser_image && formik.errors.ser_image && (
                        <div className="formik_error">{formik.errors.ser_image}</div>
                )}
                        </FormControl><br />
                        <FormControl variant="standard" sx={{ minWidth: 150 }} className='mb-4 area_detail_container'>
                            <InputLabel id="demo-simple-select-standard-label" className='sel_ser'>Select Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Select service"
                                name="serviceid"
                                onChange={(event)=>{
                    formik.handleChange(event);
                    setserviceid(event.target.value);
                }} onBlur={formik.handleBlur} 
                            >
                                {getser ? getser.map(ser => (
                                    <MenuItem value={ser._id}>{ser.s_name}</MenuItem>
                                )) :
                                    <MenuItem>Loading...</MenuItem>}
                            </Select>
                            {formik.touched.serviceid && formik.errors.serviceid && (
                        <div className="formik_error">{formik.errors.serviceid}</div>
                )}
                        </FormControl><br />
                        <FormControl>
                            <Button type='button' className='my-3 px-2 py-3' onClick={handleAddser} style={{ backgroundColor: "rgb(50,50,50)", border: "none", color: "white" }}>Add Service</Button>
                        </FormControl>
                    </div>
                </FormGroup>

                {citydata != undefined && citydata.length > 0 && (
                    <div className="tablemain pagination" id='abc'>
                        <table id="dtBasicExample" className="table table-striped table-sm" cellSpacing="1" width="100%" >
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>service name</th>
                                    <th>image</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>

                            </thead>
                            <tbody>

                                {citydata.map(service => (

                                    <tr key={service._id} >
                                        <td >{counter++}</td>
                                        <td >{service.subname}</td>
                                        <td ><img src={'http://localhost:4000/image/' + service.image} alt="not" style={{ "width": "100px", "height": "100px" }} />
                                        </td>
                                        <td>
                                            <Delete data={service} handleIsEdit={() => setisEdit(!isEdit)} />

                                        </td>
                                        <td>
                                            <Update data={service} handleIsEdit={() => setisEdit(!isEdit)} />
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
    console.log(props);
    const initmodel = () => {
        return invokemodel(!isshow);
    }
    const handledelete = async () => {

        // const id = 
        // alert(id);
        const data = { id: props.data._id };
        const respo = await subservice.deleteData({ data });
        console.log("response delete", respo);
        if (respo.data.success === true) {
            props.handleIsEdit();
            initmodel();
        }



    }
    return (
        <>
            <Button variant="contained" style={{ backgroundColor: "rgb(50,50,50)", color: "white" }} onClick={initmodel}>
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
                    <Button variant="" className="mx-3" type='button' onClick={initmodel} style={{ backgroundColor: "red" }}>
                        CLOSE
                    </Button>
                    <Button variant="" className="mx-3" type='button' style={{ backgroundColor: "red" }} onClick={handledelete}>
                        Delete
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}

const Update = (props) => {
    const [serid, set_id] = useState(props.data._id);
    const [subname, setsubname] = useState(props.data.subname);
    const [image, setimage] = useState('');
    const [isEdit, setisEdit] = useState(true);
    const [serviceid, setserviceid] = useState(props.data.serviceid);
    const [getser, setgetser] = useState([]);
    // const navigate = useNavigate();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }




    const handleservice = async () => {
        try {
            const response = await subservice.getsubserbymain();
            setgetser(response.data.data);
            console.log("response", getser)
        } catch (error) {
            console.log(error);
        }
    }
    const handleupdate = async (event) => {

        const data = { id: serid, subname, serviceid, image }
        alert(data);
        const respo = await subservice.updateData(data);
        props.handleIsEdit();
        if (respo.data.success === true) {
            alert("updated successfully")
            initmodel();
        }
        else {
            alert("not updated");
        }

    }
    useEffect(() => {
        setsubname(props.data.subname);
        setimage(props.data.image);
        setserviceid(props.data.serviceid);
        set_id(props.data._id);
    }, [props])

    useEffect(() => {
        handleservice();
    }, [])

    return (

        <>
            <Button variant="contained" style={{ backgroundColor: "rgb(50,50,50)", color: "white" }} onClick={initmodel}>
                Edit
            </Button>
            <Modal className='mx-auto' show={isshow} style={{ overflowX: "", width: "" }} >
                <Modal.Header closeButton onClick={initmodel}>
                    <Modal.Title className='' >
                        Update Sub service
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <FormGroup className='city_main_container mx-auto h-auto w-75'>
                        <div className="mx-auto mt-5">
                            <FormControl className='mb-3 city_detail_container'>
                                <InputLabel className='mx-3'>Enter Sub Service Name</InputLabel>
                                <Input type='text' name='name' value={subname} onChange={(event) => setsubname(event.target.value)} className='mx-3 my-3' />
                            </FormControl><br />
                            <FormControl className='mb-3 city_detail_container'>

                                <Input type='file' name='image' onChange={(event) => setimage(event.target.files[0])} className='mx-3 my-3' />
                            </FormControl><br />
                            <FormControl variant="standard" sx={{ minWidth: 260 }} className='mb-4 area_detail_container'>
                                <InputLabel id="demo-simple-select-standard-label" className='sel_ser'>Select Service</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    label="Select service"
                                    name="serviceid"
                                    value={serviceid}
                                    onChange={(event) => { setserviceid(event.target.value) }}
                                >
                                    {getser ? getser.map(ser => (
                                        <MenuItem value={ser._id}>{ser.s_name}</MenuItem>
                                    )) :
                                        <MenuItem>Loading...</MenuItem>}
                                </Select>
                            </FormControl><br />
                        </div>
                    </FormGroup>

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




