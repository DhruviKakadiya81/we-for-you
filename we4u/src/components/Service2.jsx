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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
    const [spid, setspid] = useState();
    const [msg, setmsg] = useState();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }

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
        console.log("first==>", service.subname._id);
        const data = { subserid: service.subname._id }
        const response = await detail.getdetailbysubser(data);
        console.log(response.data.data);
        setspdetail(response.data.data);
    }

    const get_user = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setmsg("Login First!!");
            initmodel();
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
                // alert("make profile first");
                setmsg("Make Profile First!!");
                initmodel();
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
        // alert(serviceid);

        if (serviceid !== null || serviceid !== undefined) {
            const bookdata = { userid, serviceid, spid }
            const response = await cartservice.addtocart(bookdata);
            console.log("response of book service === >", response);
            if (response.data.success === false) {
                setmsg("This Service is Added Already!! ");
                initmodel();
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

    return (
        <>
            <Modal show={isshow}  >
                {/* <Modal.Header className='text-center'>
                    <Modal.Title className='' style={{ fontWeight: "bold" }}>
                        Book Service
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body style={{fontWeight:"bold"}}>
                    {msg}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" onClick={initmodel}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
            <Navbar />
            {/* <section className='mt-5 pt-3'>
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

            </section> */}
            <section className='mt-5 pt-4'>
                <div className="container p-lg-5 p-sm-0 p-md-0 ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-7">
                            <div className='mb-4 Ser_2_head'>{service.subname.subname}</div>
                            <div className='Ser_2_desc'>{`We Provide You Many Service Provider And Their Details. They Provide You Many Service In Different Different Cost And Different Different Style. You Can Choose One From Them As Per You Requirement And As Per Your Budget By Comparing Them. They Provide Services Like ${service.subname.subname} And Many More. `}</div>
                        </div>
                        <div className="col-lg-5">
                            <img src={"http://localhost:4000/image/" + service.subname.image} alt="images" height={"250px"} className='mx-auto d-flex mt-lg-0  mt-md-0  mt-sm-5 mt-xm-5' />
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-4 mb-5'>

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
                                                        <div class="card ser_2_main_card px-2 py-2 mx-auto my-4">

                                                            <div class="card-body">
                                                                <p className='ser_2_head'>{sp.shopname}</p>
                                                                <p className='ser_2_label' key={sp.serviceid._id}><span>Name : </span>{sp.firstname} {sp.lastname}</p>
                                                                <p className='ser_2_label'><span>Gmail : </span>{sp.pemail}</p>
                                                                {/* <p className='ser_2_label'><span>Mobile No : </span>{sp.mobileno}</p> */}
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
                                                                <div className='row text-center'>
                                                                    <div class="col-sm-6">
                                                                        <ViewMore shopname={sp.shopname} address={sp.address} gmail={sp.pemail} mobileno={sp.mobileno} city={sp.cityid.cityname} area={sp.areaid.areaname} gender={sp.gender} firstname={sp.firstname} lastname={sp.lastname} prize={sp.subserid} />
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <button type='button' onClick={(event) => { handlebookser(sp) }} className='ser_2_hire_btn px-3 py-2 my-2'>Hire</button>
                                                                    </div>
                                                                </div>
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
            <Footer />
        </>
    )
}

const ViewMore = (props) => {
    console.log(props);
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }

    return (
        <>
            <Button variant="" className='my-2 ser_2_hire_btn' onClick={initmodel}>
                View More
            </Button>
            <Modal show={isshow} style={{ overflowX: "scroll", width: "100%", marginTop: "px" }} >
                <Modal.Header className='mx-auto'>
                    <Modal.Title className='f-w-500' style={{ fontWeight: "bold", fontSize: "25px" }}>
                        {props.shopname}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ps-2'>
                        <p className='modal_det_par'><span className='Modal_details'>Name : </span>{props.firstname} {props.lastname}</p>
                        <p><span className='Modal_details'>Address : </span>{props.address}</p>
                        <p><span className='Modal_details'>Email : </span>{props.gmail}</p>
                        <p><span className='Modal_details'>Mobile No : </span>{props.mobileno}</p>
                        <p><span className='Modal_details'>Gender : </span>{props.gender}</p>
                        <p><span className='Modal_details'>City : </span>{props.city}</p>
                        <p><span className='Modal_details'>Area : </span>{props.area}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" onClick={initmodel}>
                        CLOSE
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}
