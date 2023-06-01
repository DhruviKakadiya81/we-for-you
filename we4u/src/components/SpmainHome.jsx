import React, { useEffect, useState } from 'react'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { Sp } from './Sp';
import service from '../services/Services'
import { ServiceProvider } from './ServiceProvider';
import { useNavigate } from 'react-router-dom';

export const SpmainHome = () => {
    const navigate = useNavigate();
    const [spid, setspid] = useState();
    const [isData, setisData] = useState();
    const [isData1, setisData1] = useState(false);
    // const [step1, setstep1] = useState({
    //     firstname: '',
    //     lastname: '',
    //     mobileno: '',
    //     gender: '',
    //     shopname: '',
    //     address: '',
    //     pemail: '',
    //     description: '',
    //     cityid: '',
    //     areaid: '',
    //     spid: spid
    // });

    const getspclient = async () => {
        try {
            const id = localStorage.getItem("sptoken");
            const response = await service.getspid({ id });
            setspid(response.data.data._id);
            // setstep1({ ...step1, spid: response.data.data._id });
        } catch (error) {
            console.log(error);
        }
    }

    const handledata = async () => {
        try {
            console.log("spid====>", spid);
            const response = await service.getdetails({ spid });
            console.log("response==>", response);
            if(response.data.success === true){
                setisData(response.data.data);
                setisData1(true);
                navigate("/sphome2");
                localStorage.setItem("data",true);
            }
            else{
                setisData(response.data.data);
                setisData1(false);
                navigate("/sphome");
            }
           
            console.log("data==>",isData)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getspclient();
    }, []);

    useEffect(() => {
        if(spid){
            handledata(); 
        }
      
    }, [spid]);


    console.log("spid ==> ", isData);


    if (spid === undefined) {

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
                    <ServiceProvider/>
            </>

        )

    }
}