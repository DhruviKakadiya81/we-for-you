import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer';
import '../css/Home.css';
import showservice from '../services/Services';
import { useState } from 'react';
import { useEffect } from 'react';
import '../css/About.css'
import ReactPlayer from 'react-player'
export const Home = () => {
  const [service, setService] = useState([]);
  var ser;
  const fetchSer = async (event) => {
    // event.prventDefault();
    ser = await showservice.getservice();
    console.log("data :", ser.data.data[0].s_name);
    setService(ser);
    // console.log("data2 :", service.data.data.length);
  }
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);


  useEffect((event) => {

    service && fetchSer();
  }, []);
  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid p-0">
       
          <div className="s01" style={{
            background: `url("images/homeimag9.jpg")`, backgroundSize: "cover",
            backgroundPosition: "center center", width: "auto"
          }}>
            <form className=" reveal fade-In">
              <fieldset className="inner-form mb-0 pb-0" style={{ fontSize: "30px", width: "90%", margin: "auto" }}>
                <legend className="pb-0 mb-0" style={{ fontSize: "40px", width: "90%" }}> Discover the Amazing Services</legend>
              </fieldset>
              <div className="inner-form" style={{ width: "90%", margin: "auto" }}>


                <div className="input-field first-wrap">
                  <input id="search" type="text" placeholder="What are you looking for?" />
                </div>
                <div className="input-field second-wrap">
                  <input id="location" type="text" placeholder="location" />
                </div>
                <div className="input-field third-wrap">
                  <button className="btn-search" type="button">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>




      <section className="services1">
        <h1 className='serviceh1'>  Our Services </h1>
         <div className='services_scroll'>
          {service.data != undefined && service.data.data.length > 0 && (
            <section className="services">
              <div className="d-flex flex-wrap justify-content-center">
                {service.data.data.map(product => (
                  <div className='row m-2'>
                    <div className="card" style={{ width: "10rem", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }} >
                      <img src={'http://localhost:4000/image/' + product.s_icon} className="card-img-top" alt="..." style={{ height: "60px", width: "80px", textAlign: "center", marginTop: "5px", margin: "auto" }} />
                      <div className="card-body">
                        <h6 className="card-title text-center"> {product.s_name}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>




      <section className="progress-section mt-5 pb-3" style={{backgroundImage:`url(Images/get_start.jpg)`,backgroundSize:"cover"}}>
        <div className="container">
            <div className="row mb-4 justify-content-center">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="process-heading text-center pt-5"  style={{color:"white"}}>
                        <span className="gradient-text">How to Get Started</span>
                        <h2 className="mb-3 mt-3">Get Services By Easy Process</h2>
                        <p>Transparent and fair costs, with no hidden fees</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center  reveal fade-In">
                <div className="progress-img">
                    <img className="w-100 line_img" src="images/get-started.png"  alt="progress"/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-10">
                    <div className="progress-card">
                        <div className="progress-card-body text-center" style={{color:"white"}}>
                            <img src="/images/search_service.png" alt="apply" width="80px" style={{borderRadius:"100%"}}/>
                            <h5 className="card-title mt-3 mb-3">Search Service</h5>
                            <p className="p mt-2 mb-5">Search Service Which You Want and As Per Your Need</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-10">
                    <div className="progress-card">
                        <div className="progress-card-body text-center" style={{color:"white"}} >
                            <img src="images/cart.jpg" alt="disition" width="80px" style={{borderRadius:"100%"}}/>
                            <h5 className="card-title mt-3 mb-3">Add to Cart</h5>
                            <p className="p mt-2 mb-5">After Finding Service Add Your Service Into Cart</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-10">
                    <div className="progress-card">
                        <div className="progress-card-body text-center" style={{color:"white"}}>
                            <img src="images/funded.png" alt="funded" width="80px"/>
                            <h5 className="card-title mt-3 mb-3">Get Services</h5>
                            <p className="p mt-2 mb-5">Get Services On Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>








      <section className='beauty_saloon pt-5 pb-3'>
        <h1 className='beauty_saloon_title'>Beauty Saloon</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card mx-4 my-4">
            <img src="Images/manicure.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Manicure</h5>
              <p className="card-text">A Manicure usually consists of filing and shaping the free edge of nails, pushing and clipping.</p>
            </div>
          </div>
          <div className="card mx-4 my-4">
            <img src="Images/keratin.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Keratin</h5>
              <p className="card-text">A keratin treatment is a process that smooths and often straightens hair.</p>
            </div>
          </div>
          <div className="card mx-4 my-4">
            <img src="Images/hair_cutting.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hair Cutting</h5>
              <p className="card-text">We Are Doing Many Types Of Hair Cutting like layered, one-length, Face-Look.</p>
            </div>
          </div>
        </div>

      </section>

      <Footer />


    </>

  )
}