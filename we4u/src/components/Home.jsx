import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer';
import '../css/Home.css';
import showservice from '../services/Services';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player'
// import { Footer } from './Footer';
import { Contact } from './Contact';
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
  }, []);
  return (
    <>
      <Navbar />

      {/* <div className="home"> */}


      {/* <body> */}
    <div class="s01" style={{background:`url("images/homeimag9.jpg")` , backgroundSize: "cover",
  backgroundPosition: "center center"}}>
      <form>
      <fieldset className = "inner-form mb-0 pb-0"style={{fontSize:"30px",width:"90%",margin:"auto"}}>
          <legend  className = "pb-0 mb-0" style={{fontSize:"40px",width:"90%"}}> Discover the Amazing Services</legend>
        </fieldset>
        <div className="inner-form"style={{width:"90%",margin:"auto"}}>
        
       
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
  
    <section className="services1">
          
          <h1 className='serviceh1'>  Our Services </h1>
       
          
          
           {service.data != undefined && service.data.data.length > 0 && (
            
              
            <div className="d-flex flex-wrap justify-content-center w-75 mx-auto">
        
              {service.data.data.map(product => (
              
                  
                     <div className="card mx-3 my-4" style={{width:"12rem", height:"11rem" ,   boxShadow:"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}} >
                  {/* <img src={'http://localhost:4000/image/' + product.s_icon} className="card-img-top" alt="..." style={{height:"60px",width:"80px",textAlign:"center",marginTop:"5px",margin:"auto"}}/> */}
                  <div className='text-center mt-2' >
        <img src={'http://localhost:4000/image/' + product.s_icon} width="100" height="100"  alt="..."/>
        </div>
                  <div className="card-body">
                   
                   
          
            <p class="card-text text-center">
            <h5>{product.s_name} </h5>
            </p>
        </div>
                  


          


                
                </div> 
                
                
                

                  
                
                
             
              ))}
                </div>
            

          )}
          
         
        </section>
        <div class="parallax mb-0" style={ {
  /* The image used */
  backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/homeimag9.jpg")`,
  
  /* Set a specific height */
  minHeight: "600px",

  /* Create the parallax scrolling effect */
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}}>
     <section className='beauty_saloon ' >

<h1 className='beauty_saloon_title text-white'>Beauty Saloon</h1>
<div className="d-flex flex-wrap justify-content-center" >
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
  <h5 class="card-title">Hair Cut</h5>
  <p class="card-text">We Are Doing Many Types Of Hair Cutting like layered, one-length, Face-Look.</p>
</div>
</div>
</div>

</section>
</div>


      {/* </div> */}
      <Footer/>
        {/* </body> */}
      {/* </div> */}
     
    </>

   

  )
}