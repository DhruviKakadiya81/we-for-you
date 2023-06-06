import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import showservice from '../services/Subservice';
import '../css/Subser.css';
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
                items: 8
            },
            1300: {
                items: 9
            },
            1500: {
                items: 11
            }
        }
    }

    const owl = React.useRef(null);
    return (
        <>
            <Navbar />
            <h3 className="text-left pt-5 pb-0 mx-5 mt-4 mb-0" style={{ color: "black" }}>Book your Services</h3>
            <section className="servicepage">

                <div className="row d-flex justify-content-center" id="feedback-carousel">
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
                                                    <img src={"http://localhost:4000/image/" + service.image} alt="" />
                                                    <figcaption style={{ color: "black", backgroundColor: "white", fontSize: "10px" }}>{service.subname}</figcaption>
                                                </figure>
                                            </div>
                                        </>
                                    ))}
                                </OwlCarousel>
                    }
                </div>
            </section>
            <section>
                {city ?
                    <>
                        <p>your location</p>
                        <input id="location" type="button" placeholder="location" value={city} onClick={handleLocationClick} />
                    </>

                    :

                    <>
                        <p>Give access Your Location so that we can provide best service providers of your city</p>
                        <input id="location" type="button" placeholder="location" value={location ? location : "click to access your city"} onClick={handleLocationClick} />

                    </>
                }

            </section>

            <section>
                Hire your service provider
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
                                {
                                    spdetail.map((sp) => (
                                        <>
                                            <div className="card text-center">
                                                <p key={sp.serviceid._id}>{sp.firstname}</p>
                                                <p>{sp.lastname}</p>
                                                <p>{sp.mobileno}</p>
                                                <p>{sp.gender}</p>
                                                <p>{sp.shopname}</p>
                                                <p>{sp.address}</p>
                                                {sp.cityid ? <p>{sp.cityid.cityname} </p> : <br />}
                                                {sp.areaid ? <p>{sp.areaid.areaname}</p> : <br />}


                                                <p>{sp.pemail}</p>
                                                <h1>my services</h1>
                                                <p>{sp.subserid.map((key) => (
                                                    <>
                                                        <p>

                                                            {/* {key.subname.subname} */}
                                                            <p>{key.subname.subname} :  {key.prize}Rs</p>
                                                        </p>

                                                    </>
                                                ))}</p>
                                            </div>


                                        </>


                                    ))
                                }
                            </div>

                }
            </section>

        </>
    )
}