
import React from 'react'
import Chart from "react-apexcharts";
import { Navbar } from "./Navbar";
import bookservice from "../services/bookservice";
import { useState } from "react";
import { useEffect } from "react";
import GetUser from "../services/GetUser";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactStars from "react-rating-stars-component"
import dashboard from '../services/dashboard';

export const Cust_Dashboard = () => {
    let counter = 1;
    const [scheduled, setschedule] = useState();
    const [active, setactive] = useState([]);
    const [Edit, setEdit] = useState();
    const [userid, setuserid] = useState();
    const [spid, setspid] = useState();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }
    const getuser = async () => {
        let token = localStorage.getItem("token");
        const data = { id: token }
        console.log(data);
        const response = await GetUser.sendauth(data);
        setuserid(response.data.data._id);
        console.log("response===>", response.data.data._id);
    }
    const handleUpdate = async (id) => {
        const data = { id: id, status: "Completed" }
        const response = await bookservice.active(data);
        setspid(response.data.spid);
        setEdit(true);
        initmodel();

    }
    const handlerate = async () => {
        const data = { spid, userid, rate: rating };
        const response = await dashboard.rating(data);
        console.log("response", response);
        initmodel()

    }
    const handleschedule = async () => {
        const response = await bookservice.shduled({ id: userid });
        setschedule(response.data.data)
        console.log("response==>", scheduled);
    }
    const handleactive = async () => {
        const response = await bookservice.getactiveseruser({ id: userid });
        console.log(response);
        setactive(response.data.data);
        // initmodel();
    }
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    // const ratingchanged=(rating)=>{
    //     alert(`You Have Given ${rating} star Rating for us.`)
    // }

    useEffect(() => {
        getuser();
    }, []);

    useEffect(() => {
        userid && handleschedule();
        userid && handleactive();
    }, [userid]);

    useEffect(() => {
        userid && handleschedule();
        userid && handleactive();
    }, [Edit]);


    console.log(active);
    return (
        <>
            <Navbar />
            <Modal show={isshow}>
                <Modal.Header>
                    <Modal.Title closeButton className='' >
                        Give Ratting to us..!!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='m-auto start_body'>
                    <div>
                        <ReactStars size={50} count={5} value={rating} onChange={handleRatingChange} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" className="mx-3" onClick={initmodel}>
                        Cancel
                    </Button>
                    <Button variant="dark" className="mx-3" type='button' onClick={handlerate} >
                        Yes
                    </Button>
                </Modal.Footer>

            </Modal>

            {
                (active === undefined || scheduled === undefined) ?
                    <div className="row d-flex justify-content-center">
                        <div class="spinner-grow text-dark" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        {/* <p className='text-center'> Your Network May interrupted</p> */}
                    </div>


                    : (active.length === 0 && scheduled.length === 0) ?
                        <div className='mx-auto text-center mt-5 pt-5'>
                            <img src="images/Calendar-rafiki.png" alt="" srcset="" height={"400px"} width={"400px"} />
                            <h1 className="text-center">Nothing is Scheduled Yet</h1>
                        </div>


                        :


                        <>
                            {
                                (active === undefined) ?

                                    <div className="row d-flex justify-content-center" style={{ marginTop: "500px", paddingTop: "700px" }}>
                                        <div class="spinner-grow text-dark" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                        {/* <p className='text-center'> Your Network May interrupted</p> */}
                                    </div>

                                    : (active.length <= 0) ?
                                        <div className="d-flex justify-content-center" >

                                        </div>
                                        :
                                        <div class="main-card mb-3 mx-auto w-75 card overflow-x-hidden" style={{ marginTop: "100px" }}>
                                            <div class="card-header text-center" style={{ backgroundColor: "lightgreen" }}>
                                                <b>
                                                    Active Services Details
                                                </b>


                                            </div>
                                            <div class="table-responsive">
                                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-center">Index</th>
                                                            <th>Service Provider Details</th>
                                                            <th class="text-center">Service Name</th>
                                                            <th class="text-center">Prize</th>
                                                            <th class="text-center">Date</th>
                                                            <th class="text-center">Time</th>
                                                            <th class="text-center">End Service</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            active.map((key) => (


                                                                <tr>
                                                                    <td class="text-center text-muted"><b>{counter++}</b></td>
                                                                    <td>
                                                                        <div class="widget-content p-0">
                                                                            <div class="widget-content-wrapper">
                                                                                <div class="widget-content-left flex2">
                                                                                    <div class="widget-subheading opacity-7 mx-5"><span><b>{key.spid.shopname}</b></span></div>
                                                                                    <div class="widget-heading"><span><b>Name :</b></span>{key.spid.firstname}  {key.spid.lastname}</div>
                                                                                    <div class="widget-subheading opacity-7"><span><b>Mobile No :</b></span>{key.spid.mobileno}</div>
                                                                                    <div class="widget-subheading opacity-7"><span><b>Email :</b></span>{key.spid.pemail}</div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="widget-heading"><span><b>{key.serviceid.subname.serviceid.s_name}</b></span></div>
                                                                        <div class="widget-heading"><span>{key.serviceid.subname.subname}</span></div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class=""><span>{key.serviceid.prize} Rs.</span></div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm">{key.date ? key.date.split("T")[0] : "date"}</button>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm">{key.hour}:{key.minutes}</button>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-danger btn-sm" onClick={() => { handleUpdate(key._id) }}>End</button>
                                                                    </td>
                                                                </tr>

                                                            ))}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div >


                            }

                            {
                                (scheduled === undefined) ?

                                    <div className="row d-flex justify-content-center" style={{ marginTop: "400px" }}>
                                        <div class="spinner-grow text-dark" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                        {/* <p className='text-center'> Your Network May interrupted</p> */}
                                    </div>
                                    : (scheduled.length <= 0) ?
                                        <div className="d-flex justify-content-center" >

                                        </div>
                                        :
                                        <div class="main-card mb-3 mx-auto w-75 card overflow-x-hidden" style={{ marginTop: "100px" }}>
                                            <div class="card-header text-center" style={{ backgroundColor: "lightgrey" }}><b>Scheduled Services Details</b>

                                            </div>
                                            <div class="table-responsive">
                                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-center">Index</th>
                                                            <th>Service Provider Details</th>
                                                            <th class="text-center">Service Name</th>
                                                            <th class="text-center">Prize</th>
                                                            <th class="text-center">Date</th>
                                                            <th class="text-center">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            scheduled.map((key) => (


                                                                <tr>
                                                                    <td class="text-center text-muted"><b>{counter++}</b></td>
                                                                    <td>
                                                                        <div class="widget-content p-0">
                                                                            <div class="widget-content-wrapper">
                                                                                <div class="widget-content-left flex2">
                                                                                    <div class="widget-subheading opacity-7 mx-5"><span><b>{key.spid.shopname}</b></span></div>
                                                                                    <div class="widget-heading"><span><b>Name :</b></span>{key.spid.firstname}  {key.spid.lastname}</div>
                                                                                    <div class="widget-subheading opacity-7"><span><b>Mobile No :</b></span>{key.spid.mobileno}</div>
                                                                                    <div class="widget-subheading opacity-7"><span><b>Email :</b></span>{key.spid.pemail}</div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="widget-heading"><span><b>{key.serviceid.subname.serviceid.s_name}</b></span></div>
                                                                        <div class="widget-heading"><span>{key.serviceid.subname.subname}</span></div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class=""><span>{key.serviceid.prize} Rs.</span></div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm">{key.date ? key.date.split("T")[0] : "date"}</button>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm">{key.hour}:{key.minutes}</button>
                                                                    </td>
                                                                </tr>

                                                            ))}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div >


                            }

                        </>
            }


        </>
    )
}
