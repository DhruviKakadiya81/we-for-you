
import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

import '../css/About.css';
import '../css/exa.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TestiMonials from './components/TestiMonials/TestiMonials';
import TestiMonials from './TestiMonials/TestiMonials.js';
import TestiMonialsDetails from './TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './TestiMonials/TestiMonials.css'
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>







const About = () => {
  const testiMonials = [
    {
        name: 'Krupa',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        address: 'USA',
        img: 'images/nails.jpg'
    },
    {
        name: 'Dhruvi',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        address: 'USA',
        img: 'images/nails.jpg'
    },
    {
        name: 'Mansi',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        address: 'USA',
        img: 'images/nails.jpg'
    },
    ,
]
//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000,
    smartSpeed: 50,
    // nav: false,
    
};
  return (
    <>
    <Navbar/>

{/* <div className='div1 mx-auto p-5 ' style={{width:"95%" ,backgroundColor:"rgb(245,245,245)"}}>

<div style={{}}>
<h2>Who We Are</h2>
<br />
<p>We4U is a platform that provides a range of home services, including beauty and wellness services, cleaning services, pest control, plumbing, carpentry, electrical, appliance repair, and more. It connects customers with local service providers who are vetted and trained to provide high-quality services at affordable prices.

We4U has revolutionized the home services industry by providing a convenient and reliable platform for booking and managing home services. It offers transparent pricing, easy online booking, and a hassle-free experience for both customers and service providers.

</p>
</div>



<div class="d-flex justify-content-center flex-wrap " id="grid1">
<div class="row">
    <div class="col mx-1 my-1 " >
   <div  class ="center_text"> 
    <h2>45000+</h2>
    <p>Trained Proffessor</p>
    </div>
    </div>
    <div class="col mx-1 my-1">
      <div class ="center_text" style={{textAlign:"center" , marginTop:"30px" }}>
      <h2>10 Million+</h2>
      <p>Happy Customers</p>
    </div>
    </div>
    <div class="col mx-1 my-1">
     <div class ="center_text" style={{textAlign:"center" , marginTop:"40px" }}>
     <h2>63</h2>
     <p>cities</p>
    </div>
    </div>
    <div class="col mx-1 my-1">
     <div class ="center_text" style={{textAlign:"center" , marginTop:"40px" }}>
     <h2>5</h2>
     <p> Countries</p>
     </div>
    </div>
  </div>
</div>

<br /><br />
<h2>How we Do it</h2>
<br />
<p>We4U provide customer-centric approach, where it ensures a seamless experience for customers. Customers can also rate and review the service providers, which helps maintain service quality and build trust among customers.
<br /><br />
We4U has a rigorous vetting process for its service providers to ensure that they meet its quality standards. Service providers have to go through background checks, training, and assessments before they can provide services on the platform. This helps maintain service quality and ensures that customers receive the best possible service.
</p>
<br /><br />
<h2>Our Members</h2>


<div className="test" >
  <div id="testimonial" className="testimonials" >
 
  <div className="row">
  <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    {}:
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                 
  </div>
  </div>
</div>

</div> */}
<div class="d-flex justify-content-center flex-wrap mt-5 ">
 

      <img className='img_div' src="images/electrician.jpg" style={{borderRadius:"100%" , border:"4px solid gray" ,  boxShadow:  "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}  height="500" width="500" alt="" srcset="" />
   
    <div class="col-7 txt_div" style={{textAlign:"left"}}>
    <h1 className='text-center mt-5'>WE4U</h1>
    <p className='p-1 text-left mx-5' style={{fontSize:"22px"}}>We4U is a platform that provides a range of home services, including beauty and wellness services, cleaning services, pest control, plumbing, carpentry, electrical, appliance repair, and more. It connects customers with local service providers who are vetted and trained to provide high-quality services at affordable prices.

     We4U has revolutionized the home services industry by providing a convenient and reliable platform for booking and managing home services. It offers transparent pricing, easy online booking, and a hassle-free experience for both customers and service providers.

</p>
      </div>
    </div>

    <h1 className='text-center mt-5'>==: Our Members :==</h1>

<div className="test" >

  <div id="testimonial" className="testimonials" >
 
  <div className="row">
  <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    {}:
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                 
  </div>
  </div>
</div>
    
    <h1 className='text-center' style={{marginTop:"50px"}}>==: About Us :==</h1>
    
    <div class="d-flex justify-content-center flex-wrap " id="grid1">
  
{/* <div class="row mt-3">
    <div class="col mx-1 my-1 " >
   <div  class ="center_text"> 
    <h2>45000+</h2>
    <p>Trained Proffessor</p>
    </div>
    </div>
    <div class="col mx-1 my-1">
      <div class ="center_text" >
      <h2>10 Million+</h2>
      <p>Happy Customers</p>
    </div>
    </div>
    <div class="col mx-1 my-1">
     <div class ="center_text">
     <h2>63</h2>
     <p>cities</p>
    </div>
    </div>
    <div class="col mx-1 my-1">
     <div class ="center_text">
     <h2>5</h2>
     <p> Countries</p>
     </div>
    </div>
  </div> */}
  <div  class ="center_text"> 
  <div class="cen_text" >
    <h2>45000+</h2>
    <p>Trained Proffessor</p>
    </div>
    </div>

    <div   class ="center_text"> 
    <div class="cen_text">
    <h2>45000+</h2>
    <p>Trained Proffessor</p>
    </div>
    </div>

    <div  class ="center_text"> 
    <div class="cen_text">

    <h2>45000+</h2>
    <p>Trained Proffessor</p>
    </div>
    </div>

    <div  class ="center_text"> 
    <div class="cen_text">
    
    <h2>45000+</h2>
    <p>Trained Proffessor</p>
    </div>
    </div>

</div>



<h1 className='text-center' style={{marginTop:"70px"}}>==: How We Do It :==</h1>

<div className="text-center mt-5 mx-auto w-75 p-5" style={{boxShadow:  "rgb(105,105,105) 0px 12px 28px 0px, rgb(105,105,105) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}>
<p>We4U provide customer-centric approach, where it ensures a seamless experience for customers. Customers can also rate and review the service providers, which helps maintain service quality and build trust among customers.
<br /><br />
We4U has a rigorous vetting process for its service providers to ensure that they meet its quality standards. Service providers have to go through background checks, training, and assessments before they can provide services on the platform. This helps maintain service quality and ensures that customers receive the best possible service.
</p>
</div>

<br /><br />






      

    
    <Footer/>
   
    


    </>
  )
}

export default About
