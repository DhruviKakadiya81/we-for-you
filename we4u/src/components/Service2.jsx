import React from 'react'
import { Navbar } from './Navbar'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import detail from '../services/spservice';
import { event } from 'jquery';


export const Service2 = () => {
    const [query, setQuery] = useState('');
    const [city, setcity] = useState(sessionStorage.getItem("cityname"));
    const [location, setLocation] = useState(null);
    const [image, setimage] = useState(sessionStorage.getItem("subname"));
    const [service, setservice] = useState(JSON.parse(localStorage.getItem("subservicedata")));
    const [spdetail, setspdetail] = useState([]);
    const [bookeddata, setbookeddata] = useState();
    const [prize, setprize] = useState()
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

        console.log("first==>", service.subname._id);
        const data = { subserid: service.subname._id }
        const response = await detail.getdetailbysubser(data);
        console.log(response.data.data);
        setspdetail(response.data.data);
    }

    const handlebookser = (data) => {

        console.log(data);
        console.log(data.subserid);

        data.subserid.map((key) => {
            // console.log(key.subname.subname, "name");
            if (key.subname.subname === service.subname.subname) {
                setprize(key.prize);
                console.log("prize", key.prize)
            }
        }
        );


    }

    useEffect(() => {
        handledetail();
    }, []);

    console.log("serviceid", prize);
    // console.log("serviceid", spdetail);
    return (
        <>
            <Navbar />
            <section className='mt-5 pt-5'>
                <div>{service.subname.subname}</div>
                <div>{`we provides many service providers that provides you many services in your city and we4u helps you to get services at your home in very less time like  ${service.subname.subname} `}</div>
                <img src={"http://localhost:4000/image/" + service.subname.image} alt="images" height={"100px"} />

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

                                            <div className="text-center">
                                                <p key={sp.serviceid._id}>{sp.firstname} {sp.lastname}</p>
                                                <p></p>
                                                <p>{sp.mobileno}</p>
                                                <p>{sp.gender}</p>
                                                <p>{sp.shopname}</p>
                                                <p>{sp.address}</p>
                                                <p>{sp.cityid.cityname}</p>
                                                <p>{sp.areaid.areaname}</p>
                                                <p>{sp.pemail}</p>
                                                {

                                                    sp.subserid.map((key) => (
                                                        <>

                                                            <p>{key.subname.subname === service.subname.subname ?
                                                                <p>prize := {key.prize}</p>
                                                                :
                                                                <p></p>
                                                            }</p>
                                                        </>



                                                    ))
                                                }
                                                <button type='button' onClick={(event) => { handlebookser(sp) }}>Hire service provider</button>
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

