import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer';
import '../css/Home.css';
import showservice from '../services/Services';
import { useState } from 'react';
import { useEffect } from 'react';
import '../css/About.css';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import service1 from '../services/Services'
import { event } from 'jquery';

export const Home = () => {
  const [getser, setgetser] = useState('');
  const [serviceid, setserviceid] = useState('');
  const [location, setLocation] = useState(null);
  const [searchser, setsearchser] = useState('');
  const [searchid, setsearchid] = useState('');
  const navigate = useNavigate();

  function handleLocationClick(event) {

    // alert("hello");
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  const handlebeauty = () => {
    // event.preventDefault();
    localStorage.setItem("serviceid", "6479f8bc4fe5a1498d94527f");
    navigate("/service")
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
        var city = response.address.state_district;
        var address = response.address;
        setLocation(city);
        sessionStorage.setItem("cityname", city);
        console.log(response);
        return;
      }
    }

  }

  function error() {
    console.log("Unable to retrieve your location");
  }


  const options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 1
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  const handleNextClick = () => {
    owl.current.next();
  };

  const handlePrevClick = () => {
    owl.current.prev();
  };

  const owl = React.useRef(null);

  const [service, setService] = useState([]);
  var ser;
  const fetchSer = async (event) => {

    ser = await showservice.getservice();
    setService(ser);
  }

  const handleservice = async () => {
    try {
      const response = await service1.getservice();
      setgetser(response.data.data);
      getser.map((key) => {
        if (key.s_name === searchser) {
          setsearchid(key._id);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  const handle = () => {
    // alert("hello")
    // event.preventDefault();
    localStorage.setItem("serviceid", searchid);
    navigate("/service")

  }



  useEffect((event) => {
    handleservice();
    service && fetchSer();
    // handleLocationClick();
  }, [searchser]);
  console.log("ser", getser);
  console.log("serchid==", searchid);
  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid p-0">

          <div className="s01" style={{
            background: `url("images/homeimag9.jpg")`, backgroundSize: "cover",
            backgroundPosition: "center center", width: "auto"
          }}>
            <form className="">
              <fieldset className="inner-form mb-0 pb-0" style={{ fontSize: "30px", width: "90%", margin: "auto" }}>
                <legend className="pb-0 mb-0" style={{ fontSize: "40px", width: "90%" }}> Discover the Amazing Services</legend>
              </fieldset>
              <div className="inner-form" style={{ width: "90%", margin: "auto" }}>
                <div className="input-field first-wrap">
                  <datalist id="browsers" style={{ backgroundColor: "white" }}>
                    {getser ? getser.map(ser => (
                      <option style={{ backgroundColor: "white" }} value={ser.s_name}>{ser.s_name}</option>
                    )) : getser.length > 0 ?
                      <option>no found</option>
                      : <option>Loading...</option>}
                  </datalist>

                  <input id="search" type="text" list="browsers" placeholder="What are you looking for?" onChange={(event) => { setsearchser(event.target.value) }} />
                </div>
                {/* <div className="input-field second-wrap">
                  <input id="location" type="button" placeholder="location" value={location ? location : "Location"} onClick={handleLocationClick} />
                </div> */}
                <div className="input-field third-wrap">

                  <button className="btn-search" type="button" onClick={handle}>Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="services1" style={{ minHeight: "300px", cursor: "pointer" }}>

        <h1 className='serviceh1 mt-5' style={{ fontWeight: "700" }}>  Our Services </h1>



        {service.data != undefined && service.data.data.length > 0 && (


          <div className="d-flex flex-wrap justify-content-center w-75 mx-auto mt-2">

            {service.data.data.map(product => (


              <div className="card mx-3 my-4" onClick={(event) => { event.preventDefault(); localStorage.setItem("serviceid", product._id); navigate("/service") }} style={{ width: "12rem", height: "11rem", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }} >
                {/* <img src={'http://localhost:4000/image/' + product.s_icon} className="card-img-top" alt="..." style={{height:"60px",width:"80px",textAlign:"center",marginTop:"5px",margin:"auto"}}/> */}
                <div className='text-center mt-1' >
                  <img src={'http://localhost:4000/image/' + product.s_icon} width="125" height="125" alt="..." />
                </div>
                <div className="card-body">



                  <p className="card-text text-center">
                    <h5>{product.s_name} </h5>
                  </p>
                </div>

              </div>

            ))}
          </div>


        )}


      </section>
      <div class="parallax mb-0" style={{
        /* The image used */
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/homeimg3.jpg")`,

        /* Set a specific height */
        minHeight: "500px",

        /* Create the parallax scrolling effect */
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>

        <section className="progress-section mt-5 pb-3">
          <div className="container">
            <div className="row mb-4 justify-content-center">
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="process-heading text-center pt-5" style={{ color: "white" }}>
                  <span className="gradient-text mt-5">How to Get Started</span>
                  <h2 className="mb-3 mt-3">Get Services By Easy Process</h2>
                  <p>Transparent and fair costs, with no hidden fees</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center  ">

              <div className="progress-img">
                <img className="w-100 line_img" src="images/get-started.png" alt="progress" />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-10">
                <div className="progress-card">
                  <div className="progress-card-body text-center" style={{ color: "white" }}>
                    <img src="/images/search_service_10.png" alt="apply" width="80px" style={{ borderRadius: "100%" }} />
                    <h5 className="card-title mt-3 mb-3">Search Service</h5>
                    <p className="p mt-2 mb-5">Search Service Which You Want and As Per Your Need</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-10">
                <div className="progress-card">
                  <div className="progress-card-body text-center" style={{ color: "white" }} >
                    <img src="images/cart.jpg" alt="disition" width="80px" style={{ borderRadius: "100%" }} />
                    <h5 className="card-title mt-3 mb-3">Add to Cart</h5>
                    <p className="p mt-2 mb-5">After Finding Service Add Your Service Into Cart</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-10">
                <div className="progress-card">
                  <div className="progress-card-body text-center" style={{ color: "white" }}>
                    <img src="images/get_service_9.jpg" alt="funded" width="80px" style={{ borderRadius: "100%" }} />
                    <h5 className="card-title mt-3 mb-3">Get Services</h5>
                    <p className="p mt-2">Get Services On Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>










      <section className="feedback-section pt-4 mb-5">
        <div className="container">

          <div className="row mb-4 justify-content-center">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="process-heading text-center mb-5 ">
                {/* <span className="gradient-text feedback_title">Feedback</span> */}
                <h2 className="mb-3 mt-3">Our Trending Services</h2>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">



            <div className="card my-1 m-5">
              <img src="Images/manicure.jpg" className="mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center" style={{fontWeight:"bold"}}>Manicure</h5>
                <p className="card-text text-justify">A Manicure usually consists of filing and shaping the free edge of nails, pushing and clipping.</p>
                <div className="text-center">
                <button className='btn home_view_more_btn' type='button' onClick={handlebeauty}>view more</button>
                </div>
              </div>


            </div>
            <div className="card my-1 m-5">
              <img src="Images/Pre_bridal_grooming.png" className="mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center" style={{fontWeight:"bold"}}>Pre Bridal Grooming</h5>
                <p className="card-text text-justify">Pre Bridal Grooming Is Include Facial Treatment, Manicure, Shaping Eye-Brows and Etc.</p>
                <div className="text-center">
                <button className='btn home_view_more_btn' type='button' onClick={handlebeauty}>view more</button>
                </div>
              </div>

            </div>

            <div className="card my-1 m-5">
              <img src="Images/hair_cutting.jpg" className="mt-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center" style={{fontWeight:"bold"}}>Hair Cutting</h5>
                <p className="card-text text-justify">We Are Doing Many Types Of Hair Cutting like layered, one-length, Face-Look.</p>
                <div className="text-center">
                <button className='btn home_view_more_btn' type='button' onClick={handlebeauty}>view more</button>
                </div>
              </div>
            </div>


          </div>
          {/* <div className="owl-carousel__nav">
            <button className="owl-carousel__prev" onClick={handlePrevClick}>previous</button>
            <button className="owl-carousel__next" onClick={handleNextClick}>Next</button>

          </div> */}
        </div>


      </section>
      <Footer />


    </>

  )
}