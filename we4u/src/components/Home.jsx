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
              <div class="d-flex flex-wrap justify-content-center">
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




      <section class="progress-section">
        <div class="container">
            <div class="row mb-4 justify-content-center">
                <div class="col-lg-7 col-md-12 col-sm-12">
                    <div class="process-heading text-center mb-5 ">
                        <span class="gradient-text">How to Get Started</span>
                        <h2 class="mb-3 mt-3">Fast & Easy Application Process.</h2>
                        <p>Transparent and fair costs, with no hidden fees</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="progress-img">
                    <img className="w-100" src="images/get-started.png"  alt="progress"/>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-10">
                    <div class="progress-card">
                        <div class="progress-card-body text-center">
                            <img src="/images/apply.png" alt="apply" width="80px"/>
                            <h5 class="card-title mt-3 mb-3">Apply In 10 Minutes</h5>
                            <p class="p mt-2 mb-5">Submission of Online document with Basic details Docs can be
                                submitted via
                                Email or Whatsapp as well</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-10">
                    <div class="progress-card">
                        <div class="progress-card-body text-center">
                            <img src="images/disition.png" alt="disition" width="80px"/>
                            <h5 class="card-title mt-3 mb-3">A Decision In 24 Hours</h5>
                            <p class="p mt-2 mb-5">Get a call and Instant quotes(Rate / Loan amount ) with options of
                                banks</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-10">
                    <div class="progress-card">
                        <div class="progress-card-body text-center">
                            <img src="images/funded.png" alt="funded" width="80px"/>
                            <h5 class="card-title mt-3 mb-3">Your Loan Is Funded</h5>
                            <p class="p mt-2 mb-5">Submission of docs with bank or Finance company for further process
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <button class="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    </section>








      <section className='beauty_saloon pt-3 pb-3'>
        <h1 className='beauty_saloon_title'>Beauty Saloon</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card mx-4 my-4">
            <img src="Images/manicure.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Manicure</h5>
              <p class="card-text">A Manicure usually consists of filing and shaping the free edge of nails, pushing and clipping.</p>
            </div>
          </div>
          <div className="card mx-4 my-4">
            <img src="Images/keratin.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Keratin</h5>
              <p class="card-text">A keratin treatment is a process that smooths and often straightens hair.</p>
            </div>
          </div>
          <div className="card mx-4 my-4">
            <img src="Images/hair_cutting.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Hair Cutting</h5>
              <p class="card-text">We Are Doing Many Types Of Hair Cutting like layered, one-length, Face-Look.</p>
            </div>
          </div>
        </div>

      </section>

      <Footer />


    </>

  )
}