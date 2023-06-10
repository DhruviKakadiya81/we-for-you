import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import showservice from '../services/Subservice';
import '../css/Subser.css';
import '../css/Subservice.css';

import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import detail from '../services/spservice';
import { useNavigate } from 'react-router-dom';

export const SubService = () => {
    const [serviceid, setserviceid] = useState(localStorage.getItem("serviceid"));
    const [servicedata, setservicedata] = useState([]);
    const [city, setcity] = useState('');
    const [location, setLocation] = useState(null);
    const [spdetail, setspdetail] = useState([]);
    const navigate = useNavigate();
    const getsubservice = async () => {
        const response = await showservice.getsubserbymain({ serviceid });
        console.log(response);
        setservicedata(response.data.data);

    }

    function handleLocationClick(event) {

        // alert("hello");
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
        // setLocation({ latitude, longitude });
        console.log("hello");
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
                var city = response.address.city;
                var address = response.address;
                setLocation(city);
                localStorage.setItem("cityname", city);
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
        const data = { city, serviceid }
        const response = await detail.getdetailbycity(data);
        console.log(response.data.data);
        setspdetail(response.data.data);
    }

    const handleservice2 = async (service) => {
        console.log("main service data", service);
        const subname = service._id;
        const response = await detail.getserdetailbysubname({ subname });
        console.log("response of subservice data", response);
        localStorage.setItem("subservicedata", JSON.stringify(response.data.data));
        navigate("/service2");
    }


    useEffect(() => {
        setserviceid(localStorage.getItem("serviceid"));
        serviceid && getsubservice();
        setcity(sessionStorage.getItem("cityname"));
        handledetail();
    }, []);
    console.log("serviceid", spdetail);

    const options =
    {
        loop: false,
        center: false,
        left: true,
        left: true,
        items: 8,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            275: {
                items: 2
            },
            410: {
                items: 3
            },
            600: {
                items: 4
            },
            750: {
                items: 5
            },
            900: {
                items: 6
            },
            1200: {
                items: 6
            },
            1300: {
                items: 7
            },
            1500: {
                items: 10
            }
        }
    }

    const owl = React.useRef(null);
    return (
        <>
            <Navbar />
            <h3 className="text-left pt-5 pb-0  mt-5 mb-0  " style={{ color: "black", marginLeft: "98px", fontWeight: "600", fontSize: "30px" }}>Book your Services</h3>
            <section className="servicepage mt-4   text-center" >
                <div className="container-fluid text-center krupa_try" style={{ width: "100%" }} >
                    <div className="row d-flex justify-content-around" id="feedback-carousel">
                        {

                            (servicedata === undefined) ?
                                <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                                    <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "50%", left: "50%" }}>
                                    </div>

                                </div>
                                : (servicedata.length === 0) ?
                                    <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                                        <span>no data found</span>

                                    </div>
                                    :

                                    <OwlCarousel ref={owl} options={options}>

                                        {servicedata.map((service) => (
                                            <>

                                                <div class="cards" onClick={(event) => { handleservice2(service) }} >
                                                    <figure class="card" style={{ width: "130px", height: "130px" }}>
                                                        <img className="" src={"http://localhost:4000/image/" + service.image} alt="" />
                                                        <figcaption style={{ color: "black", backgroundColor: "white", fontSize: "10px" }}>{service.subname}</figcaption>
                                                    </figure>
                                                </div>

                                            </>
                                        ))}
                                    </OwlCarousel>
                        }
                    </div>
                </div>

            </section>

            <hr style={{ color: "black", height: "3px", margin: "10px auto", width: "80%" }} />
            <section>
                {/* <h1 className="text-left">Hire Your Service Provider</h1> */}
                <h3 className="text-left pt-5 pb-0  mt-3 mb-0" style={{ color: "black", marginLeft: "98px", fontWeight: "600", fontSize: "30px" }}>Hire Your Service Provider</h3>

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
                                <div className='bg-danger'></div>
                                {/* <div class="container"> */}
                                <div class="row d-flex justify-content-center">
                                    {
                                        spdetail.map((sp) => (
                                            <>

                                                <div class="flip-card">
                                                    <div class="flip-card-inner">
                                                        <div className="flip-card-front text-left " style={{ textAlign: "left" }}>

                                                            <h2 className='text-center mt-4'>    {sp.shopname}  </h2>
                                                            <p className="mt-4 ps-5 " key={sp.serviceid._id} style={{ fontSize: "17px" }}> Service Provider :: {sp.firstname} {sp.lastname}</p>

                                                            {/* <p>{sp.gender}</p> */}

                                                            <p className=" ps-5 " style={{ fontSize: "17px" }}>  Address :: {sp.address}  <br /><br />  {sp.cityid ? <p className=" " style={{ fontSize: "17px" }} >City :: {sp.cityid.cityname} </p> : <br />}</p>
                                                            <p className=" ps-5 " style={{ fontSize: "17px" }}> {sp.areaid ? <p style={{ fontSize: "17px" }}>Area:: {sp.areaid.areaname}</p> : <br />}</p>



                                                            <p className=" ps-5 " style={{ fontSize: "17px" }}> Contact Us :: {sp.mobileno} </p>
                                                            <p className=" ps-5 " style={{ fontSize: "17px" }}> Email Id :: {sp.pemail} </p>

                                                        </div>
                                                        <div class="flip-card-back">
                                                            <h1 className='d-flex justify-content-center mb-5'>My Services</h1>
                                                            <p>{sp.subserid.map((key) => (
                                                                <>
                                                                    <div className='text-center'>
                                                                        <p> {key.subname.subname} : {key.prize} Rs</p>
                                                                    </div>





                                                                </>
                                                            ))}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>


                                        ))
                                    }
                                </div>
                                {/* </div> */}

                            </div>



                }
            </section>

        </>
    )
}