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
        getspclient();

    }, [spid]);


    console.log("spid", serdata);

    return (
        <>
            <Ser_Pro_Navbar />
            <section className='mt-5 pt-5'>
                <div className="container">
                    {
                        (!spid) ?
                            <div className="d-flex justify-content-center ">
                                <div className="spinner-border d-flex align-items-center" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>

                            : (!serdata.length > 0) ?

                                <div className="d-flex justify-content-center ">
                                    <div className="spinner-border d-flex align-items-center" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>

                                :
                                <div>

                                    {(
                                        serdata.map((sr) => (
                                            <div className="card">
                                                <img src={"http://localhost:4000/image/" + sr.image} alt="" />
                                                <h1>{sr.subname}</h1>
                                                <p className="price">{sr.prize}</p>
                                                <p>{sr.discription}</p>
                                                <Update />
                                            </div>
                                        ))
                                    )}
                                </div>

                    }
                </div>
            </section>

        </>
    )
}
const Update = () => {
    const [getser, setgetser] = useState('');
    const [serviceid, setserviceid] = useState('');
    const [spid, setspid] = useState('');
    const [subname, setsubname] = useState('');
    const [prize, setprize] = useState();
    const [discription, setdiscription] = useState('');
    const [image, setimage] = useState('');

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
        alert(subname + prize + serviceid + discription);
    }
    useEffect(() => {
        handleservice();
    }, [])
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

                    <form className="s_add__form_container">
                        <FormControl variant="standard" sx={{ minWidth: 260 }} className='mb-4 area_detail_container'>
                            <InputLabel id="demo-simple-select-standard-label" className='sel_ser'>Select Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Select service"
                                name="serviceid"
                                onChange={(event) => { setserviceid(event.target.value); alert(serviceid) }}
                            >
                                {getser ? getser.map(ser => (
                                    <MenuItem value={ser._id}>{ser.s_name}</MenuItem>
                                )) :
                                    <MenuItem>Loading...</MenuItem>}
                            </Select>
                        </FormControl><br />
                        <label>Enter Your Sub service</label><br />
                        <input type="text" className=" px-2 py-1 mb-3" name="Sub_service" onChange={(event) => { setsubname(event.target.value) }} /><br />
                        <label>Price</label><br />
                        <input type="Number" className=" px-2 py-1 mb-3" name="Price" onChange={(event) => { setprize(event.target.value) }} /><br />
                        <label>Description</label><br />
                        <textarea type="number" className=" px-2 py-1 mb-3" name="description" onChange={(event) => { setdiscription(event.target.value) }} /><br />
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
