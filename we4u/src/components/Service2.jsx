import React from 'react'
import { Navbar } from './Navbar'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import detail from '../services/spservice';
import getuser from '../services/GetUser';
import { useNavigate } from 'react-router-dom';
import userdata from '../services/UserProfile';
import cartservice from '../services/cartservics';
import "../css/Service2.css"
import $ from "jquery"
import Collapsible from 'react-collapsible';
import { Footer } from './Footer';

export const Service2 = () => {
    const [city, setcity] = useState(sessionStorage.getItem("cityname"));
    const [location, setLocation] = useState(null);
    const [image, setimage] = useState(sessionStorage.getItem("subname"));
    const [service, setservice] = useState(JSON.parse(localStorage.getItem("subservicedata")));
    const [spdetail, setspdetail] = useState([]);
    const [bookeddata, setbookeddata] = useState();
    const [serviceid, setserviceid] = useState();
    const [userid, setuserid] = useState();
    const navigate = useNavigate();

      

    // var prize;
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
            setuserid(response2.data.data._id)
        }

    }
    const handlebookser = async (data) => {
        get_user();
        if (userid !== null || userid !== undefined) {
            console.log(data);
            console.log(data.subserid);

            data.subserid.map((key) => {
                // console.log(key.subname.subname, "name");
                if (key.subname.subname === service.subname.subname) {
                    setserviceid(key.subname._id);
                    console.log("prize", key.subname._id)
                }
            }
            );

            console.log("data._id", data._id);
            if (serviceid !== null || serviceid !== undefined) {
                const bookdata = { userid, serviceid, spid: data._id }
                const response = await cartservice.addtocart(bookdata);
                console.log("response of book service === >", response);
                if (response.data.duplicate === true) {
                    alert("you already added that")

                }
                else if (response.data.success === true) {
                    navigate("/cart");
                }
            } else {
                alert("try again");
            }

        }
        else {
            alert("some issues are there please try again");
        }



    }


    useEffect(() => {
        handledetail();
    }, []);

    console.log("serviceid", serviceid);
    // console.log("serviceid", spdetail);
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
                    className='loc_btn py-2 pe-3'  placeholder="location" value={location ? location : "click to access your city"} onClick={handleLocationClick} />
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
                            <div className='Ser_2_desc'>{`We provide many service providers and they provide you many services. You can choose your service providers as per your requirement and cost like we provide many service providers and they provide you many services. you can choose your service providers as per your requirement and lost like ${service.subname.subname} `}</div>
                        </div>
                        <div className="col-lg-5">
                            <img src={"http://localhost:4000/image/" + service.subname.image} alt="images" height={"250px"} className='mx-auto d-flex mt-lg-0  mt-md-0  mt-sm-5 mt-xm-5' />
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>       
            </section>
           
            <section className='mt-5 mb-5'>
                <p className='hire_header mb-5'>Hire Your Service Provider</p>
                
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
                                        
                                           
                                            <div class="col-lg-4 ">
                                <div class="card ser_2_main_card px-2 py-2 mx-auto my-2">
               
                         <div class="card-body">
                                     <p className='ser_2_head'>{sp.shopname}</p>
                                     <p className='ser_2_label' key={sp.serviceid._id}><span>Service Provider : </span>{sp.firstname} {sp.lastname}</p>
                                     <p className='ser_2_label'><span>Mobile No : </span>{sp.mobileno}</p>
                                        {/* <p className='ser_2_label'><span>Gender : </span>{sp.gender}</p> */}
                                        <p className='ser_2_label'><span>Address : </span>{sp.address}</p>
                                <Collapsible trigger="View More Details" className='my-3 view_more_link px-2 text-center py-1 mx-auto'>
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
                           <div style={{textAlign:"center"}}>
                           <button type='button' onClick={(event) => { handlebookser(sp) }} className='ser_2_hire_btn px-3 py-2 mx-auto'>Hire service provider</button>
                           </div>

                                           
                </div>
              </div>
        </div>  
                                        </>


                                <div class="container">
                                    <div class="row mx-auto justify-content-center">

                                        {
                                            spdetail.map((sp) => (
                                                <>


                                                    <div class="col-lg-4">
                                                        <div class="card ser_2_main_card px-2 py-2" style={{ width: "350px" }}>

                                                            <div class="card-body">
                                                                <p className='ser_2_head'>{sp.shopname}</p>
                                                                <p className='ser_2_label' key={sp.serviceid._id}>{sp.firstname} {sp.lastname}</p>
                                                                <p className='ser_2_label'><span>Mobile No : </span>{sp.mobileno}</p>
                                                                <p className='ser_2_label'><span>Gender : </span>{sp.gender}</p>
                                                                <p className='ser_2_label'><span>Address : </span>{sp.address}</p>
                                                                <Collapsible trigger="View More Details" className='my-3 view_more_link px-2 text-center py-1 mx-auto'>
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
                                                                <div style={{ textAlign: "center" }}>
                                                                    <button type='button' onClick={(event) => { handlebookser(sp) }} className='ser_2_hire_btn px-3 py-2 mx-4'>Hire service provider</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>


                                            ))
                                        }

                                    ))
                                }
                
    </div>
</div>
                                {/* <div className='bg-danger'></div> */}
                                
                            </div>

                }
            </section>
            <Footer/>
        </>
    )
}

