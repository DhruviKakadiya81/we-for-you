import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import showservice from '../services/Subservice';
import '../css/Subser.css';
import '../css/Subservice.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import detail from '../services/spservice';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import getuser from '../services/GetUser';
import userdata from '../services/UserProfile';
import cartservice from '../services/cartservics';

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
            <h3 className="text-center pt-5 pb-0  mt-5 mb-0  " style={{ color: "black", marginLeft: "98px", fontWeight: "600", fontSize: "30px" }}>Book your Services</h3>
            <section className="servicepage mt-4   text-center" >
                <div className="container-fluid text-center" style={{ width: "100%" }} >
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
            <section className='mb-5 mt-5'>
                {/* <h1 className="text-left">Hire Your Service Provider</h1> */}
                <h3 className="hire_header mb-5">Hire Your Service Provider</h3>

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
                                                    <div className="col-lg-4">
                                                        <div className="card ser_2_main_card px-2 py-2 mx-auto my-4">
                                                            <div className="card-body">
                                                                <h2 className='ser_2_head mb-3'> {sp.shopname}  </h2>
                                                                <p className="ser_2_label " key={sp.serviceid._id}> Name : {sp.firstname} {sp.lastname}</p>
                                                                {/* <p>{sp.gender}</p> */}
                                                                {/* <p className=" ps-5 " style={{ fontSize: "17px" }}>  Address :: {sp.address}  <br /><br />  {sp.cityid ? <p className=" " style={{ fontSize: "17px" }} >City :: {sp.cityid.cityname} </p> : <br />}</p> */}
                                                                {/* <p className=" ps-5 " style={{ fontSize: "17px" }}> {sp.areaid ? <p style={{ fontSize: "17px" }}>Area:: {sp.areaid.areaname}</p> : <br />}</p> */}
                                                                <p className="ser_2_label"> Mobile No : {sp.mobileno} </p>
                                                                <p className="ser_2_label "> Email : {sp.pemail} </p>
                                                                {/* <h1 className='my-4'>My Services</h1> */}
                                                                {/* <p>{sp.subserid.map((key) => (
                                                                <>
                                                                <div className='row'>
                                                                    <div>
                                                                    <p className='ser_2_label ser_all_ser_prize'> {key.subname.subname} : {key.prize} Rs.</p>
                                                                    </div>
                                                                    <div class="col-sm-4">
                                                                    <button className='px-2 py-1 my-1' style={{border:"none",borderRadius:"5px"}}>Book Now</button>
                                                                    </div>
                                                                    </div> 
                                                                </>
                                                            ))}</p> */}

                                                                <div className='row text-center'>
                                                                    <div class="col-sm-6">
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <ViewMore shopname={sp.shopname} firstname={sp.firstname} lastname={sp.lastname} address={sp.address} area={sp.areaid.areaname} mobileno={sp.mobileno} gmail={sp.pemail} prize={sp.subserid} sp={sp} />
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
                            </div>
                }
            </section>
            <Footer />
        </>
    )
}

const ViewMore = (props) => {

    console.log("prop.sp", props.sp);
    console.log(props.prize)
    const [isshow, invokemodel] = useState(false);

    const [data, setdata] = useState(props.sp);
    const [msg, setmsg] = useState();
    const navigate = useNavigate();
    const initmodel = () => {
        return invokemodel(!isshow);
    }

    const [isshow1, invokemodel1] = useState(false);
    const initmodel1 = () => {
        return invokemodel1(!isshow1);
    }


    const [userid, setuserid] = useState();
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
            setuserid(response2.data.data._id);

        }

    }
    // useEffect(() => {
    //     adddata()
    // }, [userid]);
    const handledata = async (spid, serviceid) => {
        const token = localStorage.getItem("token");
        if (!token) {
            setmsg("Login First!! ");
            initmodel1();
        }
        else {
            const data = { id: token }
            console.log(data);
            const response = await getuser.sendauth(data);
            console.log("response===>", response.data.data._id);

            const response2 = await userdata.getdata({ userid: response.data.data._id })
            console.log("userdata2==>", response2);
            setuserid(response2.data.data._id);
            adddata(spid, serviceid, response2.data.data._id);
        }

    }

    const adddata = async (spid, serviceid, userid) => {

        if (serviceid !== null || serviceid !== undefined || userid !== null || userid !== undefined) {
            alert(userid);
            const bookdata = { userid, serviceid, spid }
            const response = await cartservice.addtocart(bookdata);
            console.log("response of book service === >", response);
            if (response.data.success === true) {
                navigate("/cart");

            }
            else if (response.data.success === false) {
                initmodel();
                setmsg("This Service is Added Already!! ");
                initmodel1();

            }

        } else {
            initmodel();
            setmsg("some issue are there!! ");
            initmodel1();
        }
    }

    useEffect(() => {
        setdata(props.sp);
    }, [props])


    return (
        <>
            <Modal show={isshow1}  >
                <Modal.Body>
                    <div className="">
                        <b>
                            {msg}
                        </b>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" type='submit' onClick={initmodel1}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <Button variant="" className='my-1 ser_hire_btn justify-content-right' onClick={initmodel}>
                View More
            </Button>
            <Modal show={isshow} style={{ overflowX: "scroll", width: "100%" }} >
                <Modal.Header className='mx-auto'>
                    <Modal.Title className='' style={{ fontWeight: "bold", fontSize: "25px" }}>
                        {props.shopname}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ps-2'>
                        <p className='modal_det_par'><span className='Modal_details'>Name : </span>{props.firstname} {props.lastname}</p>
                        <p className='modal_det_par'><span className='Modal_details'>Address : </span>{props.address}</p>
                        <p className='modal_det_par'><span className='Modal_details'>Email : </span>{props.gmail}</p>
                        <p className='modal_det_par'><span className='Modal_details'>Mobile No : </span>{props.mobileno}</p>
                        <p className='modal_det_par'><span className='Modal_details'>Area : </span>{props.area}</p>

                        <p>{props.prize.map((key) => (
                            <>
                                <div className='row'>
                                    <div class="col">
                                        <p className='ser_2_label ser_all_ser_prize my-1 py-2'><span className='Modal_details'>{key.subname.subname} : </span>{key.prize}  Rs.</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <button className='px-2 py-1 my-1' style={{ border: "none", borderRadius: "5px", backgroundColor: "rgb(50,50,50)", color: "white" }} onClick={(event) => { handledata(props.sp._id, key._id) }}>Book Now</button>
                                    </div>
                                </div>
                            </>
                        ))}</p>
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