import React from 'react'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import subser from '../services/Subservice';
import service from '../services/Services';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FormControl, FormGroup, Input, InputLabel, Typography, Select, MenuItem } from '@mui/material'



export const Ser_servicepage = () => {
    const [spid, setspid] = useState('');
    const [serdata, setserdata] = useState([]);
    const [isEdit, setisEdit] = useState(true);
    const handleser = async () => {
        const response = await subser.getsubserbyspid({ spid });
        console.log(response);
        setserdata(response.data.data);
    }
    const getspclient = async () => {
        try {
            const id = localStorage.getItem("sptoken");
            const response = await service.getspid({ id });
            setspid(response.data.data._id);
            if (spid) {
                handleser();
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        isEdit && getspclient();

    }, [spid, isEdit]);


    console.log("spid", spid);

    return (
        <>
            <Ser_Pro_Navbar />
            <section className='mt-5 pt-5'>
                <div className="container">
                    {
                        (!spid || !serdata) ?
                            <div className="d-flex justify-content-center ">
                                <div className="spinner-border d-flex align-items-center" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>

                            : (!serdata.length > 0) ?

                                <div className="d-flex justify-content-center ">

                                    not added services

                                </div>

                                :
                                <div>
                                    <div className="container">
                                        <div className="row d-flex justify-content-center">

                                            {(
                                                serdata.map((sr) => (

                                                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                                                        <div className="row" >
                                                            <div className="col-6 h-20">
                                                                <img className="mx-auto w-100" src={"http://localhost:4000/image/" + sr.subname.image} alt="" height={"100%"} width={"50%"} />
                                                            </div>
                                                            <div className="col-6 h-20" >
                                                                <h1>{sr.subname.subname}</h1>
                                                                <p className="price">{sr.prize}</p>
                                                                {sr.discription ? <p>{sr.discription}</p> : <p><br /></p>}
                                                                <div className="d-flex justify-content-lg-around">
                                                                    <Update data={sr} handleIsEdit={() => setisEdit(!isEdit)} />
                                                                    <Delete data={sr} />
                                                                </div>


                                                            </div>
                                                        </div>



                                                    </div>


                                                ))
                                            )}
                                        </div>
                                    </div>

                                </div>

                    }
                </div>
            </section>

        </>
    )
}
const Update = (props) => {
    console.log(props.data.subname);
    const [getser, setgetser] = useState([]);
    const [serviceid, setserviceid] = useState(props.data.serviceid);
    const [subname, setsubname] = useState(props.data.subname._id);
    const [prize, setprize] = useState(props.data.prize);
    const [discription, setdiscription] = useState(props.data.discription);
    const [id, setid] = useState(props.data._id);
    const [getsubser, setgetsubser] = useState([]);

    const handleservice = async () => {
        try {
            const response = await service.getservice();
            setgetser(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }


    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }


    const handleupdate = async (event) => {
        alert(prize);
        const response = await subser.updateser({ id, subname, prize, discription, serviceid });
        if (response.data.success === true) {
            initmodel();
            window.location.reload();
        }

        console.log(response);
    }

    const handlesubservice = async () => {
        try {
            const response = await subser.getsubserbymain({ serviceid });
            setgetsubser(response.data.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleservice();
        setsubname(props.data.subname._id)
    }, []);
    useEffect(() => {
        handlesubservice();
    }, [serviceid]);

    useEffect(() => {
        setsubname(props.data.subname._id);
        setprize(props.data.prize);
        setdiscription(props.data.discription);
        setserviceid(props.data.serviceid);
        setid(props.data._id);
    }, [props]);
    console.log("subname ===>", subname);
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

                    <form className="s_add__form_container" autoComplete='off'>
                        <FormControl variant="standard" sx={{ minWidth: 260 }} className='mb-4 area_detail_container'>
                            <InputLabel id="demo-simple-select-standard-label">Select Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Select service"
                                name="serviceid"
                                defaultValue={serviceid}
                                onChange={(event) => { setserviceid(event.target.value); }}
                            >
                                {getser ? getser.map(ser => (
                                    <MenuItem value={ser._id}>{ser.s_name}</MenuItem>
                                )) :
                                    <MenuItem>Loading...</MenuItem>}
                            </Select>
                        </FormControl><br />
                        <FormControl variant="standard" sx={{ minWidth: 260 }} className='mb-4 area_detail_container'>
                            <InputLabel id="demo-simple-select-standard-label" className='sel_ser'>Select Sub Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Select service"
                                name="subname"
                                defaultValue={subname}
                                onChange={(event) => {
                                    setsubname(event.target.value);
                                }}

                            >
                                {getsubser ? getsubser.map(ser => (
                                    <MenuItem value={ser._id}>{ser.subname}</MenuItem>
                                )) :
                                    <MenuItem>Loading...</MenuItem>}
                            </Select>

                        </FormControl><br />
                        <label>Price</label><br />
                        <input type="Number" className=" px-2 py-1 mb-3" name="Price" defaultValue={prize} onChange={(event) => { setprize(event.target.value) }} /><br />
                        <label>Description</label><br />
                        <textarea type="number" className=" px-2 py-1 mb-3" name="description" defaultValue={discription} onChange={(event) => { setdiscription(event.target.value) }} /><br />
                    </form>
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

const Delete = (props) => {
    const [isshow, invokemodel] = useState(false);
    console.log(props.data._id)
    const initmodel = () => {
        return invokemodel(!isshow);
    }
    const handledelete = async (id, e) => {
        alert(id);
        const data = { id };
        const respo = await subser.deleteser(data);
        console.log(respo);
        if (respo.data.success === true) {
            initmodel();
            window.location.reload();
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
                        Delete service
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="dlt">
                        Are You Sure to Delete Service?
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="" className="mx-3" onClick={initmodel}>
                        CLOSE
                    </Button>
                    <Button variant="" className="mx-3" type='submit' style={{ backgroundColor: "red" }} onClick={(e) => handledelete(props.data._id, e)}>
                        Delete
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}