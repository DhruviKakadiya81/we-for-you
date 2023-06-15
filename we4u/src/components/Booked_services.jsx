import React from 'react'
import Modal from 'react-bootstrap/Modal';
import bookkingser from '../services/bookservice';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar';
import { Navbar } from './Navbar';
import deletecart from '../services/cartservics'
import cartservics from '../services/cartservics';
import { Footer } from './Footer';
export const Booked_services = () => {
    const [data, setdata] = useState(JSON.parse(localStorage.getItem("BookingData")));
    const [mobileno, setmobileno] = useState();
    const [date, setdate] = useState();
    const [start_time, setstart_time] = useState();
    const [address, setaddress] = useState();
    const [msg, setmsg] = useState();
    // const navigate = useNavigate();
    const navigate = useNavigate();
    const [isshow, invokemodel] = useState(false);
    const initmodel = () => {
        return invokemodel(!isshow);
    }


    const handlebook = async () => {
        let pattern = /^[0-9]{10}$/;
        if (start_time === undefined || date === undefined || data === null || mobileno === undefined || address === undefined) {
            setmsg("Enter all details Properly");
            initmodel();
            // alert("enter all details properly")
        }
        else if (!pattern.test(mobileno)) {
            setmsg("Enter Valid Mobile no");
            initmodel();
        }
        else {
            const [hour, minutes] = start_time.split(":");

            const currentDate = new Date();
            // alert(currentDate + date)
            if (new Date(date) >= currentDate) {
                const bookingdata = { spid: data.spid, userid: data.userid, serviceid: data.serviceid, hour, mobileno, minutes, date, address };
                console.log("booking data...", bookingdata)
                const response = await bookkingser.booking(bookingdata);

                console.log("response of booking data", response);
                if (response.data.success === true) {
                    const deleteitem = await cartservics.deletecartitem({ id: data._id });
                    console.log("deleteitem==>", deleteitem);
                    navigate("/custdash");
                }
                else {
                    setmsg(response.data.msg);
                    initmodel();

                }
            }
            else {
                setmsg("Choose Right Date !!");
                initmodel();
            }


        }




    }

    useEffect(() => {
        setdata({
            ...data,
            spid: data.spid,
            userid: data.userid,
            serviceid: data.serviceid
        })
    }, []);
    console.log("data", data);

    return (
        <>
            <Modal show={isshow}  >
                <Modal.Body>
                    <div className="">
                        <b>
                            {msg}
                        </b>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="mx-3" type='submit' onClick={initmodel}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <Navbar className="" />
            {(data !== null || data !== undefined) ?
                <section className="contact-form-sec mx-auto pt-3 pb-3 mb-5" style={{ padding: "0px 0px", marginTop: "100px", backgroundColor: "rgb(50, 50, 50)", borderRadius: "15px", width: "70%" }}>
                    <h1 className="text-center mb-3" style={{ color: "white" }}>Booking Data</h1>
                    <div className="container" style={{ marginTop: "0px" }}>
                        <div className="row d-flex justify-content-lg-between justify-content-md-center">
                            <div className="col-lg-12 col-sm-12 col-md-10">
                                <form className="row g-3">
                                    <div className="col-md-6 ">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Service Category : </label>
                                        <input type="text" className="form-control p-2" id="inputEmail4" defaultValue={data.serviceid.subname.serviceid.s_name} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Service Name : </label>
                                        <input type="text" className="form-control  p-2" id="inputPassword4" defaultValue={data.serviceid.subname.subname} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Service Provider Name </label>
                                        <input type="text" className="form-control  p-2" id="inputEmail4" defaultValue={data.spid.firstname + " " + data.spid.lastname} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Service Prize </label>
                                        <input type="text" className="form-control  p-2" id="inputPassword4" defaultValue={data.serviceid.prize + " Rs Only/--"} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Your First Name </label>
                                        <input type="text" className="form-control  p-2" id="inputPassword4" defaultValue={data.userid.firstname} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Your Last Name </label>
                                        <input type="text" className="form-control  p-2" id="inputPassword4" defaultValue={data.userid.lastname} readOnly />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Your Email </label>
                                        <input type="email" className="form-control  p-2" id="inputPassword4" defaultValue={data.userid.userid.email} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Enter Your Mobile No </label>
                                        <input type="number" className="form-control  p-2" id="inputPassword4" onChange={(event) => { setmobileno(event.target.value) }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Choose Date </label>
                                        <input type="date" className="form-control  p-2" id="inputPassword4" onChange={(event) => { setdate(event.target.value) }} />

                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="" className='mx-2' style={{ color: "white" }}>Choose Time </label>
                                        <input type="time" className="form-control  p-2" id="inputPassword4" min="09:00" max="22:00" onChange={(event) => { setstart_time(event.target.value) }} />

                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                placeholder="Write Your Current Address...." onChange={(event) => { setaddress(event.target.value) }}></textarea>
                                        </div>
                                    </div>

                                    <button className="btn mx-3 w-25 text-center mx-auto" type='button' onClick={handlebook} style={{ backgroundColor: "white" }}>
                                        Book Service
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <div>
                    not bookig
                </div>
            }



            <Footer />




        </>
    )
}
