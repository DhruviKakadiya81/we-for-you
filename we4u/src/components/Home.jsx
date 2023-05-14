import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer';
import '../css/Home.css';
import showservice from '../services/Services';
import { useState } from 'react';
import { useEffect } from 'react';
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
  
  useEffect((event) => {
    
   service && fetchSer();
  },[]);
  return (
    <>
      <Navbar />
      <div className="home">
        <div className=""  >
           <div id="carouselExampleCaptions" style={{ backgroundImage:"Images/homeimg1.jpg"}} className="carousel carousel-dark carousel-fade  slide" data-bs-ride="carousel">
           
            <div className="carousel-inner">
            <div className="carousel-item active  outer-slider"  data-bs-interval="2000" style={{height:"90%"}}>
                {/* <img src="Images/homeimg1.jpg" className="d-block mainpost img-fluid" alt="..." /> */}
                <video src="images/v2.mp4"  style={{objectFit:"cover",width:"100%"}} muted autoPlay  controls={false} alt="hello"></video>

                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item  outer-slider"  style={{height:"90%"}}>
                {/* <img src="Images/homeimg1.jpg" className="d-block mainpost img-fluid" alt="..." /> */}
                <video src="images/v2.mp4"  style={{objectFit:"cover",width:"100%"}} muted autoPlay  controls={false} alt="hello"></video>

                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item  outer-slider" style={{height:"90%"}}>
                {/* <img src="Images/electrician.jpg" className="d-block mainpost img-fluid" alt="..." /> */}
                <video src="images/v2.mp4"  style={{objectFit:"cover",width:"100%"}} muted autoPlay   controls={false} alt="hello"></video>

                <div className="carousel-caption d-none d-md-block">

                </div>
              </div>
            </div>
            <button className="carousel-control-prev" style={{backgroundColor:"white" ,opacity: "0.9", width:"50px" , height:"50px" , borderRadius:"50%" ,position:"absolute",top:"45%",left:"5%"}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span  style={{   color:"pink",  width:"30px"}} className="carousel-control-prev-icon"  aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" style={{backgroundColor:"white" ,opacity: "0.9", width:"50px" , height:"50px" , borderRadius:"50%" ,position:"absolute",top:"45%",right:"5%"}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators" style={{position:"relative"}}>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
          </div> 
          <div className="overlay">
            {/* <ReactPlayer url={'images/v1.mp4'}  controls={true} /> */}
          </div>
        </div>
        <section className="services1">
          
          <h1 className='serviceh1'>  Our Services </h1>
       
          
           <div className='services_scroll'>
           {service.data != undefined && service.data.data.length > 0 && (
            <section className="services">
                 <div class="d-flex flex-wrap justify-content-center">
              {service.data.data.map(product => (
               
               <div className='row p-3 '>
                  <div className="card" style={{ width: "10rem" , boxShadow:"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}} >
                  <img src={'http://localhost:4000/image/' + product.s_icon} className="card-img-top" alt="..." style={{height:"60px",width:"80px",textAlign:"center",marginTop:"5px",margin:"auto"}}/>
                  <div className="card-body">
                    <h6  className="card-title text-center"> {product.s_name}</h6>
                  </div>
                </div>
                </div>
                
              ))}
                </div>

            </section>

          )}
          
           </div>
        </section>
        <section className='beauty_saloon'>

        <h1 className='beauty_saloon_title'>Beauty Saloon</h1>
        <div className="d-flex flex-wrap justify-content-center">
        <div className="card mx-4 my-4">
        <img src="Images/manicure.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Manicure</h5>
          <p class="card-text">A Manicure usually consists of filing and shaping the free edge of nails, pushing and clipping.</p>
        </div>
        </div>
        <div className="card mx-4 my-4">
        <img src="Images/keratin.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Keratin</h5>
          <p class="card-text">A keratin treatment is a process that smooths and often straightens hair.</p>
        </div>
        </div>
        <div className="card mx-4 my-4">
        <img src="Images/hair_cutting.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Hair Cutting</h5>
          <p class="card-text">We Are Doing Many Types Of Hair Cutting like layered, one-length, Face-Look.</p>
        </div>
        </div>
        </div>
        
        </section>
      </div>
      <Footer/>
    </>

  )
}