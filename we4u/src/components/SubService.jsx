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

                        (servicedata.length === 0 || servicedata === undefined) ?
                            <div class="spinner-border m-5" role="status">
                                <span class="visually-hidden">Loading...</span>
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
