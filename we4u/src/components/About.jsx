
import React from 'react'
import { Navbar } from './Navbar'
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
<section className="page1 mt-5" >
<div className='div1 w-75 mx-auto p-5' style={{width:"900px"}}>
<h2>Who We Are</h2>
<br />
<p>We4U is a platform that provides a range of home services, including beauty and wellness services, cleaning services, pest control, plumbing, carpentry, electrical, appliance repair, and more. It connects customers with local service providers who are vetted and trained to provide high-quality services at affordable prices.

We4U has revolutionized the home services industry by providing a convenient and reliable platform for booking and managing home services. It offers transparent pricing, easy online booking, and a hassle-free experience for both customers and service providers.

</p>


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
<h2>How we do it</h2>
<br />
<p>We4U provide customer-centric approach, where it ensures a seamless experience for customers. Customers can also rate and review the service providers, which helps maintain service quality and build trust among customers.
<br /><br />
We4U has a rigorous vetting process for its service providers to ensure that they meet its quality standards. Service providers have to go through background checks, training, and assessments before they can provide services on the platform. This helps maintain service quality and ensures that customers receive the best possible service.
</p>
<br /><br />
<h2>Our Members</h2>

{/* <TestiMonials/> */}
<div className="test" >
  <div id="testimonial" className="testimonials" >
  {/* <div className="container "> */}
  <div className="row">
  <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    {/* <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src='images/nails.jpg' />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <
                                        div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </>
                                    </div> : */}:
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                    {/* </div> */}
  </div>
  </div>
</div>

</div>




      
    </section>
    
    


    </>
  )
}

export default About
