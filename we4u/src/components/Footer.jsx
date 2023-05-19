import React from 'react'
import "../css/Footer.css";


export const Footer = () => {
  return (
    <>
  
   

<footer class="text-center footer-section d-sticky mb-0 ">

        <div class="container py-5 " style={{minHeight:"45vh" , marginTop:"70px"}}>

            <div class="row ">
                <div class="col-lg-3 col-md-6 mb-4 mb-md-3 ">
                    <img src="./images/Logo.png" alt="" class="mb-5"/>
                    <p class="f_desc">Satisfy Your Craving And Indulge in Delicious Flvaors, Join Us For A Meal!</p>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-3">
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-3 row w-100">
                        <h2 class="text-uppercase f_add_title">address</h2>
                        <p class="my-2 f_add_detail">58 Ralph Ave New York,New York 1111</p>

                        <p class="my-2 f_add_detail">P:+1 800 000 111 E:Contact@Example.Com</p>

                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-3 ">
                    <h5 class="text-uppercase mb-3 f_quick_title">quick links</h5>
                    <ul class="list-unstyled f_quick_desc">
                        <li>
                            <a href="#" class="text-white" style={{}}>Home</a>
                        </li>
                        <li>
                            <a href="#" class="text-white">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="text-white">Gallery</a>
                        </li>
                        <li>
                            <a href="#" class="text-white">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-3 ">
                    <h5 class="text-uppercase mb-3 f_open_title">open hours</h5>

                    <ul class="list-unstyled f_open_desc">
                        <li>
                            Monday-Sunday
                        </li>
                        <li>
                            Lunch:12PM-2PM
                        </li>
                        <li>
                            Dinner:6PM-10PM
                        </li>
                        <li class="mt-2">
                            Happy Hours:4PM-6PM
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="hrStyle" />
        <div class="d-flex justify-content-between footerEnd">
            <p class="text-muted"> 2023 © Foodie Corner </p>
            <div>
                <i class="fa-brands fa-facebook-f mx-2"></i>
                <i class="fa-brands fa-twitter mx-2"></i>
                <i class="fa-brands fa-instagram mx-2"></i>
            </div>
        </div>
    </footer>
    </>
  )
}


