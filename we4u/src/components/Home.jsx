import React from 'react'
import { Navbar } from './Navbar'
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
     
      {/* <div className="home"> */}
      

      {/* <body> */}
    <div class="s01" style={{background:`url("images/homeimag9.jpg")` , backgroundSize: "cover",
  backgroundPosition: "center center"}}>
      <form>
        <fieldset>
          <legend>Discover the Amazing City</legend>
        </fieldset>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <input id="search" type="text" placeholder="What are you looking for?" />
          </div>
          <div class="input-field second-wrap">
            <input id="location" type="text" placeholder="location" />
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button">Search</button>
          </div>
        </div>
      </form>
    </div>
  
        <section className="services1">
          
          <h1 className='serviceh1'>  Our Services </h1>
       
          
           
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
          
         
            
          
        </section>
        {/* </body> */}
      {/* </div> */}
     
    </>

  )
}