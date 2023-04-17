import React from 'react'
import { Navbar } from './Navbar'
import '../css/Home.css';
import showservice from '../services/Services';
import { useState } from 'react';
import { useEffect } from 'react';

export const Home = () => {
  const [service, setService] = useState([]);
  var ser;
  const fetchSer = async (event) => {
    // event.prventDefault();
    ser = await showservice.getservice();
    console.log("services : ",ser);
    console.log("data :", ser.data.data[0].s_name);
    setService(ser);
    // console.log("data2 :", service.data.data.length);
  }
  
  useEffect((event) => {
    
    fetchSer();
  },[]);
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="">
          <div id="carouselExampleCaptions" className="carousel carousel-dark carousel-fade  slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active outer-slider" data-bs-interval="2000">
                <img src="Images/homeimg1.jpg" className="d-block mainpost img-fluid" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item  outer-slider">
                <img src="Images/homeimg1.jpg" className="d-block mainpost img-fluid" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item  outer-slider">
                <img src="Images/electrician.jpg" className="d-block mainpost img-fluid" alt="..." />
                <div className="carousel-caption d-none d-md-block">

                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <section className="services1">
          
          <h1>Our Services</h1>
       
          
           
          {service.data != undefined && service.data.data.length > 0 && (
            <section className="services">
                 <div class="d-flex flex-wrap justify-content-center">
              {service.data.data.map(product => (
               
                  <div className="card mx-2" style={{ width: "10rem" }} >
                  <img src={'http://localhost:4000/image/'+ product.s_icon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title"> {product.s_name}</h6>
                  </div>
                </div>
                
              ))}
                </div>

            </section>

          )}
          
         
            
          
        </section>
      </div>
    </>

  )
}
