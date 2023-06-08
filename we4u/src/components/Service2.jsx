import React from 'react'
import { Navbar } from './Navbar'
import { useState } from 'react';
import { useEffect } from 'react';
import detail from '../services/spservice';
import getuser from '../services/GetUser';
import { useNavigate } from 'react-router-dom';
import userdata from '../services/UserProfile';
import cartservice from '../services/cartservics';
import "../css/Service2.css"
import Collapsible from 'react-collapsible';

export const Service2 = () => {
    const [city, setcity] = useState(sessionStorage.getItem("cityname"));
    const [location, setLocation] = useState(null);
    const [image, setimage] = useState(sessionStorage.getItem("subname"));
    const [service, setservice] = useState(JSON.parse(localStorage.getItem("subservicedata")));
    const [spdetail, setspdetail] = useState([]);
    const [bookeddata, setbookeddata] = useState();
    const [serviceid, setserviceid] = useState();
    const [userid, setuserid] = useState();
    const [spid, setspid] = useState();
    const [resp, setresp] = useState();
    const navigate = useNavigate();

    function handleLocationClick(event) {
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    }

    function success(position) {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const token = "pk.abe6a7e1dc03bb5924c0341041c0abcc"

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=" + token + "&lat=" +
            latitude + "&lon=" + longitude + "&format=json", true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);

        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                var city = response.address.state_district;
                var address = response.address;
                setLocation(city);
                sessionStorage.setItem("cityname", city);
                console.log(address);
                return;
            }
        }

    }


    function error() {
        console.log("Unable to retrieve your location");
    }
    const handledetail = async () => {
        // alert("hello");

        console.log("first==>", service.subname._id);
        const data = { subserid: service.subname._id }
        const response = await detail.getdetailbysubser(data);
        console.log(response.data.data);
        setspdetail(response.data.data);
    }

    const get_user = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("you have to first login");
            navigate("/login");
        }
        else {
            const data = { id: token }
            console.log(data);
            const response = await getuser.sendauth(data);
            console.log("response===>", response.data.data._id);

            const response2 = await userdata.getdata({ userid: response.data.data._id })
            console.log("userdata2==>", response2);
            if (response2.data.data !== null) {
                setuserid(response2.data.data._id)
            }
            else {
                alert("make profile first");
            }

        }

    }
    const handlebookser = async (data) => {
        get_user();
        if (userid !== null || userid !== undefined) {
            console.log(data);
            console.log(data.subserid);

            data.subserid.map((key) => {

                if (key.subname.subname === service.subname.subname) {
                    setserviceid(key._id);
                    console.log("prize", key.subname._id)
                }
            }
            );

            console.log("data._id", data._id);
            setspid(data._id);


        }
        else {
            alert("some issues are there please try again");
        }



    }

    const handleadd = async () => {

        if (serviceid !== null || serviceid !== undefined) {
            const bookdata = { userid, serviceid, spid }
            const response = await cartservice.addtocart(bookdata);
            console.log("response of book service === >", response);
            if (response.data.success === false) {
                alert("this is added already");
            }
            else if (response.data.success === true) {
                navigate("/cart");
            }
        } else {
            alert("try again");
        }

    }


    useEffect(() => {
        handledetail();
    }, []);
    useEffect(() => {
        serviceid && userid && spid && handleadd()
    }, [serviceid, userid, spid])


    console.log("serviceid", serviceid);
    // console.log("serviceid", spdetail);
    // return (
    //     <>
    //         <Navbar />


    //         <section className=' mt-3 mb-0 pt-5'>
    //             {city ?

    //                 <>
    //                     <div className="loc_container">
    //                         <span className='loc_span'>
    //                             <i className="fa-sharp fa-solid fa-location-dot fa-xl loc_icon ps-3"></i>&nbsp;&nbsp;
    //                             <input id="location" type="button"
    //                                 className='loc_btn py-2 pe-3' placeholder="location" value={location ? location : "click to access your city"} onClick={handleLocationClick} />
    //                         </span>
    //                     </div>
    //                 </>

    //                 :

    //                 <>
    //                     <div className="location">
    //                         <input id="location" type="button"
    //                             placeholder="location" value={location ? location : "click to access your city"} onClick={handleLocationClick} />
    //                     </div>
    //                 </>
    //             }

    //         </section>

    //         <section className=''>
    //             <div className="container p-lg-5 p-sm-0 p-md-0 pt-lg-0 ">
    //                 <div className="row d-flex justify-content-center">
    //                     <div className="col-lg-7">
    //                         <div className='mb-4 Ser_2_head'>{service.subname.subname}</div>
    //                         <div className='Ser_2_desc'>{`We Provide Many Service Providers And They Provide You Many Services. You Can Choose Your Service Providers As Per Your Requirement And Cost Like We Provide Many Service Providers And They Provide You Many Services. You Can Choose Your Service Providers As Per Your Requirement And Cost Like ${service.subname.subname} `}</div>
    //                     </div>
    //                     <div className="col-lg-5">
    //                         <img src={"http://localhost:4000/image/" + service.subname.image} alt="images" height={"250px"} className='mx-auto d-flex mt-lg-0  mt-md-0  mt-sm-5 mt-xm-5' />
    //                     </div>
    //                     <div className="col">

    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //         <section className='mt-5'>
    //             <p className='hire_header'>Hire your service provider</p>

    //             {
    //                 (spdetail === undefined || spdetail.length === 0) ?
    //                     <div className="row d-flex justify-content-center pt-5">
    //                         <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "80%", left: "50%" }}>
    //                         </div>

    //                     </div>
    //                     : (spdetail.length === 0) ?
    //                         <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
    //                             <span>no data found</span>

    //                         </div>
    //                         :
    //                         <div className="sp">
    //                             <div className='bg-danger'></div>
    //                             {
    //                                 spdetail.map((sp) => (
    //                                     <>

    //                                         <div className="text-center">
    //                                             <p key={sp.serviceid._id}>{sp.firstname} {sp.lastname}</p>
    //                                             <p></p>
    //                                             <p>{sp.mobileno}</p>
    //                                             <p>{sp.gender}</p>
    //                                             <p>{sp.shopname}</p>
    //                                             <p>{sp.address}</p>
    //                                             <p>{sp.cityid.cityname}</p>
    //                                             <p>{sp.areaid.areaname}</p>
    //                                             <p>{sp.pemail}</p>
    //                                             {

    //                                                 sp.subserid.map((key) => (
    //                                                     <>

    //                                                         <p>{key.subname.subname === service.subname.subname ?
    //                                                             <p>prize := {key.prize}</p>
    //                                                             :
    //                                                             <p></p>
    //                                                         }</p>
    //                                                     </>



    //                                                 ))
    //                                             }
    //                                             <button type='button' onClick={(event) => { handlebookser(sp) }}>Hire service provider</button>
    //                                         </div>


    //                                     </>


    //                                 ))
    //                             }
    //                         </div>

    //             }
    //         </section>

    //     </>
    // )
    return (
        <>
            <Navbar />
            <section className='mt-5 pt-3'>
                {city ?
                    <>
                        <div className="loc_container">
                            <span className='loc_span'>
                                <i className="fa-sharp fa-solid fa-location-dot fa-xl loc_icon ps-3"></i>&nbsp;&nbsp;
                                <input id="location" type="button"
                                    className='loc_btn py-2 pe-3' placeholder="location" value={location ? location : "click to access your city"} onClick={handleLocationClick} />
                            </span>
                        </div>
                    </>

                    :

                    <>
                        <div className="location">
                            <input id="location" type="button"
                                placeholder="location" value={location ? location : "click to access your city"} onClick={handleLocationClick} />
                        </div>
                    </>
                }

            </section>
            <section className=''>
                <div className="container p-lg-5 p-sm-0 p-md-0 ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-7">
                            <div className='mb-4 Ser_2_head'>{service.subname.subname}</div>
                            <div className='Ser_2_desc'>{`We Provide Many Service Providers And They Provide You Many Services. You Can Choose Your Service Providers As Per Your Requirement And Cost Like We Provide Many Service Providers And They Provide You Many Services. You Can Choose Your Service Providers As Per Your Requirement And Cost Like ${service.subname.subname} `}</div>
                        </div>
                        <div className="col-lg-5">
                            <img src={"http://localhost:4000/image/" + service.subname.image} alt="images" height={"250px"} className='mx-auto d-flex mt-lg-0  mt-md-0  mt-sm-5 mt-xm-5' />
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5 mb-5'>
                <p className='hire_header mb-5'>Hire your service provider</p>

                {
                    (spdetail === undefined || spdetail.length === 0) ?
                        <div className="row d-flex justify-content-center pt-5">
                            <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "80%", left: "50%" }}>
                            </div>

                        </div>
                        : (spdetail.length === 0) ?
                            <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                                <span>no data found</span>

                            </div>
                            :

                            <div className="sp">
                                <div class="container">
                                    <div class="row mx-auto justify-content-center">

                                        {
                                            spdetail.map((sp) => (
                                                <>


                                                    <div class="col-lg-4">
                                                        <div class="card">

                                                            <div class="card-body">
                                                                <p className='ser_2_head'>{sp.shopname}</p>
                                                                <p className='ser_2_label' key={sp.serviceid._id}>{sp.firstname} {sp.lastname}</p>
                                                                <p className='ser_2_label'><span>Mobile No : </span>{sp.mobileno}</p>
                                                                <p className='ser_2_label'><span>Gender : </span>{sp.gender}</p>
                                                                <p className='ser_2_label'><span>Address : </span>{sp.address}</p>
                                                                <Collapsible trigger="View More" className='view_more_link px-2 py-1 mx-4 my-2'>
                                                                    <p className='ser_2_label'><span>City : </span>{sp.cityid.cityname}</p>
                                                                    <p className='ser_2_label'><span>Area : </span>{sp.areaid.areaname}</p>
                                                                    <p className='ser_2_label'><span>Gmail : </span>{sp.pemail}</p>
                                                                    {
                                                                        sp.subserid.map((key) => (
                                                                            <>
                                                                                <p>{key.subname.subname === service.subname.subname ?
                                                                                    <p className='ser_2_label'><span>Prize : </span>{key.prize}</p>
                                                                                    :
                                                                                    <p></p>
                                                                                }</p>
                                                                            </>



                                                                        ))
                                                                    }

                                                                </Collapsible>
                                                                <button type='button' onClick={(event) => { handlebookser(sp) }} className='ser_2_hire_btn px-3 py-2 mx-4'>Hire service provider</button>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </>


                                            ))
                                        }

                                    </div>
                                </div>
                                {/* <div className='bg-danger'></div> */}

                            </div>

                }
            </section>

        </>
    )
}