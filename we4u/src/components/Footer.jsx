import React from 'react'
import "../css/Footer.css";
import { Link} from "react-router-dom";



export const Footer = () => {
    return (
        <>



            <footer class="text-center footer-section d-sticky mb-0 ">

                <div class="container py-5" style={{ marginTop: "70px" }}>

                    <div class="row ">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-3 ">
                            {/* <img src="./images/Logo.png" alt="" class="mb-5"/> */}
                            <img src="/images/we4U.png" width="100" height="50" className="c_nav_image" />

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
                                <li>

                                    <Link className="nav-link" to="/">Home</Link>

                                </li>
                                <li>
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-3 ">
                            <h5 class="text-uppercase mb-3 f_open_title">open hours</h5>

                            <ul class="list-unstyled f_open_desc">
                                <li>
                                    Monday-Sunday
                                </li>
                            
                                <li class="mt-2">
                                    Happy Hours: 24 * 7
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="hrStyle" />
                <div class="d-flex justify-content-between footerEnd">
                    <p class="text-muted"> 2023 © We4U </p>
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

