import React, { useEffect, useState } from 'react'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { Sp } from './Sp';
import service from '../services/Services'
import { ServiceProvider } from './ServiceProvider';


export const SpmainHome = () => {
    const [spid, setspid] = useState();
    const [isData, setisData] = useState();
    const [isData1, setisData1] = useState(true);
    const [step1, setstep1] = useState({
        firstname: '',
        lastname: '',
        mobileno: '',
        gender: '',
        shopname: '',
        address: '',
        pemail: '',
        description: '',
        cityid: '',
        areaid: '',
        spid: spid
    });

    const getspclient = async () => {
        try {
            const id = localStorage.getItem("sptoken");
            const response = await service.getspid({ id });
            setspid(response.data.data._id);
            setstep1({ ...step1, spid: response.data.data._id });
        } catch (error) {
            console.log(error);
        }
    }

    const handledata = async () => {
        try {
            console.log("spid====>", spid);
            const response = await service.getdetails({spid});
            console.log("response==>",response);
            setisData(response.data.data);
        
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handledata();
        getspclient();
    }, [spid]);

   
    console.log("spid ==> ", spid);
    

    if (spid === undefined)  {

        return (
            (
                <>
                    <Ser_Pro_Navbar />
                    <div class="d-flex justify-content-center mt-5 overflow-y-hidden">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>

            )
        )
    }

    else {

        return (
            <>
                <div style={{ display:(isData === null) ? "block" : "none" }} >
                    <ServiceProvider />
                </div>
                <div style={{ display: (isData !== null) ? "block" : "none" }} >
                    <Sp />
                </div>

            </>

        )

    }
}
