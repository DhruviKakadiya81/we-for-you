import React from 'react'
import "../css/Footer.css";
import { Link} from "react-router-dom";



export const Footer = () => {
    return (
        <>



            <footer class="text-center footer-section d-sticky mb-0 ">

                <div class="container py-5">

                    <div class="row ">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-3 ">
                            {/* <img src="./images/Logo.png" alt="" class="mb-5"/> */}
                            <img src="/images/we4U.png" width="100" height="80" className="c_nav_image mb-3" />
                            <p class="f_desc">Excellent care taken ! Will definitely book again</p>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-3">
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-3 row w-100">
                                <h2 class="text-uppercase f_add_title">address</h2>
                                <p class="my-2 f_add_detail">J P Dawer Institute Of Information Science & Technology</p>

                                <p class="my-2 f_add_detail">we4uservices3@gmail.com</p>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-3 ">
                            <h5 class="text-uppercase mb-3 f_quick_title">quick links</h5>
                            <ul class="list-unstyled f_quick_desc">
                                <li className='f_link'>

                                    <Link className="nav-link" to="/">Home</Link>

                                </li>
                                <li className='f_link'>
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className='f_link'>
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-3 ">
                            <h5 class="text-uppercase mb-3 f_open_title">open hours</h5>

                            <ul class="list-unstyled f_open_desc">
                                <li className='f_open_link'>
                                    Monday-Sunday
                                </li>
                            
                                <li className="mt-2 f_open_link">
                                    Happy Hours : 9 To 9
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="hrStyle" />
                <div class="d-flex justify-content-between footerEnd">
                    <p class="text-muted"> 2023 © We4U </p>
                    <div>
                        <i class="fa-brands fa-facebook-f mx-2 f_soc_icon"></i>
                        <i class="fa-brands fa-twitter mx-2 f_soc_icon"></i>
                        <i class="fa-brands fa-instagram mx-2 f_soc_icon"></i>
                    </div>
                </div>
            </footer>
        </>
    )
}

