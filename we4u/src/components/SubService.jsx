import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import showservice from '../services/Subservice';
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
    return (
        <>
            <Navbar />
            <section className="servicepage">

                <div className="container-fluid m-5">
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
            </section>
        </>
    )
}
