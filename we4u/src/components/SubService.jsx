import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import showservice from '../services/Subservice';
import '../css/Subser.css';
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';


export const SubService = () => {
    const [serviceid, setserviceid] = useState(localStorage.getItem("serviceid"));
    const [servicedata, setservicedata] = useState([]);
    const getsubservice = async () => {
        const response = await showservice.getsubserbymain({ serviceid });
        console.log(response);
        setservicedata(response.data.data);

    }

    useEffect(() => {
        setserviceid(localStorage.getItem("serviceid"));
        serviceid && getsubservice();
    }, []);
    console.log("serviceid", servicedata);

    const options =
    {
        loop: true,
        center: true,
        items: servicedata.length,
        autoplay: true,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     768: {
        //         items: 2
        //     },
        //     1170: {
        //         items: 3
        //     }
        // }
    }

    const owl = React.useRef(null);
    return (
        <>
            <Navbar />
            <section className="servicepage">

                {/* <div className="container-fluid m-5">
                    {

                        (servicedata === undefined) ?
                            <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                                <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "50%", left: "50%" }}>
                                </div>

                            </div>
                            : (servicedata.length === 0) ?
                                <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                                    <span>no data found</span>

                                </div>
                                :
                                <div className="container pt-5">
                                    {servicedata.map((service) => (
                                        <>

                                            <h1>{service.subname}</h1>
                                            <h1>{service.prize}</h1>
                                            <h1>{service.discription}</h1>
                                            <img src={"http://localhost:4000/image/" + service.image} alt="" height={"100px"} width={"100px"} />
                                        </>
                                    ))}
                                </div>

                    }
                </div>
                hello */}
                <div className="row d-flex justify-content-center" id="feedback-carousel">
                    {

                        (servicedata === undefined) ?
                            <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                                <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "50%", left: "50%" }}>
                                </div>

                            </div>
                            : (servicedata.length === 0) ?
                                <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                                    <span>no data found</span>

                                </div>
                                :

                                <OwlCarousel ref={owl} options={options}>

                                    {servicedata.map((service) => (
                                        <>
                                            <div class="cards">
                                                <figure class="card">
                                                    <img src={"http://localhost:4000/image/" + service.image} alt="" />
                                                    <figcaption>Dota 2</figcaption>
                                                </figure>
                                            </div>

                                            {/* <h1>{service.subname}</h1>
                                                <h1>{service.prize}</h1>
                                                <h1>{service.discription}</h1> */}

                                        </>
                                    ))}


                                </OwlCarousel>
                    }
                </div>
                {/* <div className="owl-carousel__nav">
                    <button className="owl-carousel__next" onClick={handleNextClick}>Next</button>
                    <button className="owl-carousel__prev" onClick={handlePrevClick}>Prev</button>
                </div> */}


            </section >

        </>
    )
}
