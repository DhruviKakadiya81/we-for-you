import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import '../css/About.css';
// import '../css/exa.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TestiMonials from '../../../TestiMonials/TestiMonials.js';
// import TestiMonialsDetails from './TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import '../../../TestiMonials/TestiMonials.css'
const About = () => {
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
  const testiMonials = [
    {
      name: 'Krupa',
      description: 'Krupa Mavani leads Technology And Product Development At We4U. She Loved To Do Free Lancing Work And Play Guitar In Her Free Time. ',
      address: 'India',
      img: 'images/krupa_img.jpeg'
    },
    {
      name: 'Dhruvi',
      description: 'Dhruvi Kakadiya is Responsible for Marketing And Product Growth At We4U. She Is Enjoying To Take Part In Different Different Activity. ',
      address: 'India',
      img: 'images/dhruvi_img.jpg'
    },
    {
      name: 'Mansi',
      description: 'Mansi Rathod is Responsible For Operations And Service Provider On-boarding At We4U. Before Build Of We4U, She Is Loved To Take Part In Sports Activity At State Level.',
      address: 'India',
      img: 'images/mansi_img.jpg'
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
    dots: false,
    autoplayTimeout: 4000,
    smartSpeed: 250,
    // nav: false,

  };
  return (
    <>
      <Navbar />

      <div class="container pt-5 pt-sm-0 ">
        <div className="row justify-content-center align-items-center mt-5 pt-5 pt-sm-0">
          <div className="col-lg-5  col-md-8  col-sm-11 d-flex align-items-center  mt-5 pt-5">
            <div className="imgdiv">
              <img className='img_div' src="images/electrician.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class=" col-lg-7 col-md-12 col-sm-12 txt_div" style={{ textAlign: "justify" }}>
            <h2 className='text-center mt-5 pt-5'>We Here For You</h2>
            <p className='p-1 text-left mx-lg-5 mx-md-0 mx-sm-0 txt' style={{ fontSize: "17px" }}>
              WE4U is a technology platform offering a variety of services at home. Customers use our platform to book services such as beauty treatments, haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting etc. These services are delivered in the comfort of their home and at a time of their choosing. We promise our customers a high quality, standardised and reliable service experience. To fulfill this promise, we work closely with our hand-picked service partners, enabling them with technology, training, products, tools, financing, insurance and brand, helping them succeed and deliver on this promise.
            </p>
          </div>
        </div>

      </div>
      <section className="ourmembers">
        <div className="d-flex justify-content-center mt-5">
          <h1 className='text-center head'>Our Members</h1>
        </div>



        <div className="test" >
          <div id="testimonial" className="testimonials reveal fade-bottom" >
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                  {
                    testiMonials.length === 0 ?
                      {} :
                      testiMonials.map(testiMonialDetail => {
                        return (
                          <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key}/>
                        )
                      })
                  }
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>


      <h1 className='text-center mt-5'>AboutUs</h1>

      <div className="d-flex justify-content-center flex-wrap reveal fade-up" id="grid1">


        <div className="center_text">
          <div className="cen_text" >
            <h2 className='number'>45000+</h2>
            <p>Trained Proffessor</p>
          </div>
        </div>

        <div className="center_text">
          <div className="cen_text">
            <h2 className='number'>45000+</h2>
            <p>Trained Proffessor</p>
          </div>
        </div>
        <div className="center_text">
          <div className="cen_text">

            <h2 className='number'>45000+</h2>
            <p>Trained Proffessor</p>
          </div>
        </div>

        <div className="center_text">
          <div className="cen_text">

            <h2 className='number'>45000+</h2>
            <p>Trained Proffessor</p>
          </div>
        </div>

      </div>



      <h1 className='text-center' style={{ marginTop: "70px" }}> How We Do It </h1>

      <div className="text-center mt-5 mx-auto w-75 p-5 reveal fade-In" style={{ boxShadow: "rgb(105,105,105) 0px 12px 28px 0px, rgb(105,105,105) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }}>
        <p>We4U provide customer-centric approach, where it ensures a seamless experience for customers. Customers can also rate and review the service providers, which helps maintain service quality and build trust among customers.
          <br /><br />
          We4U has a rigorous vetting process for its service providers to ensure that they meet its quality standards. Service providers have to go through background checks, training, and assessments before they can provide services on the platform. This helps maintain service quality and ensures that customers receive the best possible service.
        </p>
      </div>

      <br /><br />


      <Footer />




    </>
  )
}

export default About


const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail)
  return (
      <div className='d-flex justify-content-center flex-wrap'>
          <div className="row">
              <div class="item col" style={{ width: "400px" }}>
                  <div class="shadow-effect">
                      <img class="img-circle" src={img} />
                      <p>{description}</p>
                  </div>
                  <div class="testimonial-name">
                      <h5>{name}</h5>
                      <small>{address}</small>
                  </div>
              </div>
          </div>
      </div>

  );
};