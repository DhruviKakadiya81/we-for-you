
import React from 'react'
import service from '../services/Services'
import { Ser_Pro_Navbar } from "./Ser_Pro_Navbar";
import Chart from "react-apexcharts";
import bookservice from "../services/bookservice";
import { useState } from "react";
import { useEffect } from "react";
import GetUser from "../services/GetUser";



export const Ser_dashboard = () => {
    let counter = 1;
    const [scheduled, setschedule] = useState([]);
    const [active, setactive] = useState([]);
    const [spid, setspid] = useState();
    const [Edit, setEdit] = useState();
    const getuser = async () => {
        try {
            const id = localStorage.getItem("sptoken");
            const response = await service.getspid({ id });
            setspid(response.data.data._id);
        } catch (error) {
            console.log(error);
        }
    }

    const handleschedule = async () => {
        const response = await bookservice.shduledsp({ id: spid });
        setschedule(response.data.data);

    }
    const handleactive = async () => {
        const response = await bookservice.getactivesersp({ id: spid });
        console.log(response);
        setactive(response.data.data);
    }
    const handleUpdate = async (id) => {

        const data = { id: id, status: "Active" }
        const response = await bookservice.active(data);
        setEdit(true);
        console.log(response);
    }

    console.log("response==>", active);
    useEffect(() => {
        getuser();
        spid && handleschedule();
        spid && handleactive();
    }, [spid]);

    useEffect(() => {

        spid && handleschedule();
        spid && handleactive();
    }, [Edit]);


    const [state2, setstate2] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]

    })

    return (
        <>
            <Ser_Pro_Navbar />

            {/* <div class="container  " style={{ marginTop: "100px" }}>
                <div class="row d-flex justify-content-center">

                    <div class="card  dashbord-card" style={{ border: "none", height: "170px", flexDirection: "row", width: "300px", marginLeft: "20px", marginTop: "20px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }}>


                        <div class="card-body">

                            <h3 class="card-title">Total order</h3>
                            <p className=" card-text">245</p>


                        </div>
                    </div>


                    <div class="card  dashbord-card" style={{ border: "none", height: "170px", flexDirection: "row", width: "300px", marginLeft: "20px", marginTop: "20px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }}>


                        <div class="card-body">

                            <h3 class="card-title">Total order</h3>
                            <p className="card-text">245</p>


                        </div>
                    </div>
                    <div class="card dashbord-card" style={{ border: "none", height: "170px", flexDirection: "row", width: "300px", marginLeft: "20px", marginTop: "20px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }}>

                        <div class="card-body">

                            <h3 class="card-title">Total order</h3>
                            <p className=" card-text">245</p>


                        </div>
                    </div>


                </div>
            </div> */}

            {
                (active === undefined) ?

                    <div className="row d-flex justify-content-center pt-5">
                        <div class="spinner-grow text-dark" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>

                    </div>
                    : (active.length <= 0) ?
                        <div className="d-flex justify-content-center" >

                        </div>
                        :
                        <div class="main-card mb-3  mx-auto  w-75 card overflow-x-hidden" style={{ marginTop: "100px" }}>
                            <div class="card-header text-center" style={{ backgroundColor: "lightgreen" }}>Active Services Details
                            </div>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Index</th>
                                            <th>Cutomer Details Details</th>
                                            <th class="text-center">Service Name</th>
                                            <th class="text-center">Address</th>
                                            <th class="text-center">Date</th>
                                            <th class="text-center">Time</th>
                                            {/* <th class="text-center">Time counting</th> */}
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
                                                                    <div class="widget-heading"><span><b>Name : </b></span>{key.userid.firstname}  {key.userid.lastname}</div>
                                                                    <div class="widget-subheading opacity-7"><span><b>Mobile No :</b></span>{key.mobileno}</div>
                                                                    <div class="widget-subheading opacity-7"><span><b>Email :</b></span>{key.userid.userid.email}</div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center">
                                                        <div class="widget-heading"><span><b>{key.serviceid.subname.serviceid.s_name}</b></span></div>
                                                        <div class="widget-heading"><span>{key.serviceid.subname.subname}</span></div>
                                                    </td>
                                                    <td class="text-center">
                                                        <div class=""><span>{key.address}</span></div>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm">{key.date ? key.date.split("T")[0] : "date"}</button>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm">{key.hour}:{key.minutes}</button>
                                                    </td>
                                                    <td class="text-center">
                                                        {/* <button type="button" id="PopoverCustomT-2" class="btn btn-sm btn-success" onClick={() => { handleUpdate(key._id) }}>Start</button> */}
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

                    <div className="row d-flex justify-content-center pt-5">
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
                            <div class="card-header text-center" style={{ backgroundColor: "lightgrey" }}>Scheduled Services Details

                            </div>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Index</th>
                                            <th>Cutomer Details Details</th>
                                            <th class="text-center">Service Name</th>
                                            <th class="text-center">Address</th>
                                            <th class="text-center">Date</th>
                                            <th class="text-center">Time</th>
                                            <th class="text-center">Start Service</th>
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
                                                                    <div class="widget-heading"><span><b>Name : </b></span>{key.userid.firstname}  {key.userid.lastname}</div>
                                                                    <div class="widget-subheading opacity-7"><span><b>Mobile No :</b></span>{key.mobileno}</div>
                                                                    <div class="widget-subheading opacity-7"><span><b>Email :</b></span>{key.userid.userid.email}</div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center">
                                                        <div class="widget-heading"><span><b>{key.serviceid.subname.serviceid.s_name}</b></span></div>
                                                        <div class="widget-heading"><span>{key.serviceid.subname.subname}</span></div>
                                                    </td>
                                                    <td class="text-center">
                                                        <div class=""><span>{key.address}</span></div>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm">{key.date ? key.date.split("T")[0] : "date"}</button>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm">{key.hour}:{key.minutes}</button>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-2" class="btn btn-sm btn-success" onClick={() => { handleUpdate(key._id) }}>Start</button>
                                                    </td>
                                                </tr>

                                            ))}

                                    </tbody>
                                </table>
                            </div>
                        </div >


            }

            {/* </div> */}

            {/* </div > */}
        </>
    )
}
