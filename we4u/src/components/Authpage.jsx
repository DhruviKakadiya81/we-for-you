import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import getuser from '../services/GetUser'
import { useNavigate } from 'react-router-dom'
import cartser from '../services/cartservics'
import userdata from '../services/UserProfile'
import Modal from 'react-bootstrap/Modal';
import bookkingser from '../services/bookservice';
import Button from 'react-bootstrap/Button';
import "../css/Auth.css";


import { FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
export const Authpage = () => {
  const [userid, setuserid] = useState();
  const [cartdata, setcartdata] = useState();

  const [isshow, invokemodel] = useState(false);
  const [total, settotal] = useState(0);
  let totalrs = 0;
  const navigate = useNavigate();

  const get_user = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("you have to first login");
      navigate("/login");
    }
    else {
      const data = { id: token }
      console.log(data);
      const response = await getuser.sendauth(data);
      console.log("response===>", response.data.data._id);

      const response2 = await userdata.getdata({ userid: response.data.data._id })
      console.log("userdata2==>", response2);
      setuserid(response2.data.data._id);

    }

  }
  useEffect(() => {
    get_user()
  }, []);
  const handlebookser = async () => {
    const response = await cartser.getcartdata({ userid })
    console.log("response===>", response);
    setcartdata(response.data.data);
  }

  const handlemap = () => {
    cartdata.map((key) => {
      totalrs += key.serviceid.prize;
      console.log("total", totalrs)
    });
    settotal(totalrs);
  }



  const handledata = (data) => {
    localStorage.setItem("BookingData", JSON.stringify(data));
    navigate("/book");

  }
  useEffect(() => {
    userid && handlebookser();
  }, [userid]);

  useEffect(() => {
    cartdata && handlemap();
  }, [cartdata])


  console.log(cartdata);


  return (
    <>
      <Navbar />
      <section className='mt-5 pt-4'>
        <div className='text-center'><b> <h1> Your Services</h1></b> </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {
              (cartdata === undefined) ?
                <div className="row d-flex justify-content-center pt-5">
                  <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "50%", left: "50%" }}>

                  </div>
                  <p className='text-center'> Your Network May interrupted</p>
                </div>


                : (cartdata.length <= 0) ?
                  <div className="d-flex justify-content-center" >
                    <img src="images/emptycart.jpg" alt="not image" />
                  </div>


                  :
                  <div className="sp">
                    <div class="container padding-bottom-3x mb-1">


                      <div class="table-responsive shopping-cart mx-auto" style={{ width: "100%" }}>
                        <table class="table" >
                          <thead>
                            <tr>
                              <th>Product Name</th>

                              <th class="text-center">Prize</th>

                              <th class="text-center">Service Provider</th>

                              <th class="text-center">Shop Name</th>

                              <th class="text-center">Book Service</th>


                              <th class="text-center"><a class="btn btn-sm btn-outline-danger bg-danger text-white" href="#">Clear Cart</a></th>


                            </tr >
                          </thead >



                          {
                            cartdata.map((sp) => (
                              <>




                                <tbody>
                                  <tr>


                                    <td class=""><img style={{ width: "150px", height: "100px" }} src={"http://localhost:4000/image/" + sp.serviceid.subname.image} alt="Product" /><span className='ps-3'>{sp.serviceid.subname.subname}</span></td>
                                    <td class="text-center text-lg text-medium">{sp.serviceid.prize} Rs</td>
                                    <td class="text-center text-lg text-medium">{sp.spid.firstname}</td>
                                    <td class="text-center text-lg text-medium">{sp.spid.shopname}</td>
                                    <td class="text-center text-lg text-medium"> <Button variant="contained" style={{ backgroundColor: "lightgray", color: "black" }} onClick={(event) => { handledata(sp) }}>
                                      Book Service
                                    </Button> </td>

                                    <td class="text-center"><Delete id={sp._id} /></td>
                                  </tr >
                                </tbody >

                              </>


                            ))
                          }




                        </table >

                        <table style={{ width: "100%", border: "none" }}>

                          <tr className='pt-3' >
                            <td style={{ alignItems: "right", float: "right", border: "none" }}>
                              <div class="column text-lg"> <h5>Total: <span class="text-medium">{total} Rs</span></h5></div>
                            </td>




                          </tr>

                        </table>

                        <table style={{ width: "100%", marginTop: "20px", border: "none" }}>

                          <tr className='pt-5' >
                            <td style={{ alignItems: "right", float: "right", border: "none" }}>

                              <div class="column "><a class="btn btn-success " href="#">Book Now</a></div>
                            </td>

                            <td style={{ alignItems: "right", float: "left", border: "none" }}>
                              <div class="column "><a style={{ backgroundColor: "rgb(100,100,100)" }} class="btn btn-outline-secondary w-100 text-white" href="#"><i class="icon-arrow-left"></i>&nbsp;Back to Shopping</a></div>

                            </td>
                          </tr>

                        </table>



                      </div >

                    </div >


                  </div >
            }

          </div >
        </div >


      </section >

    </>

  )
}

const Update = (props) => {
  const [data, setdata] = useState(props.data);
  const [mobileno, setmobileno] = useState();
  const [date, setdate] = useState();
  const [start_time, setstart_time] = useState();

  // const navigate = useNavigate();

  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }

  const [alert1, setalert] = useState(false);
  const alertmodel = () => {
    return setalert(!alert1);
  }

  const handlebook = async () => {
    // initmodel();
    const [hour, minutes] = start_time.split(":");
    alert(hour);
    const bookingdata = { spid: data.spid, userid: data.userid, serviceid: data.serviceid, hour, mobileno, minutes, date };
    const response = await bookkingser.booking(bookingdata);

    console.log("response of booking data", response);
    if (response.data.success === true) {
      alert(response.data.msg);
      initmodel();
      alertmodel();

    }
    else {
      alert(response.data.msg);
      alertmodel();
    }



  }

  useEffect(() => {
    setdata({
      ...data,
      spid: props.data.spid,
      userid: props.data.userid,
      serviceid: props.data.serviceid
    })
  }, [props]);


  return (
    <>

      <Button variant="contained" style={{ backgroundColor: "lightgray", color: "black" }} onClick={initmodel}>
        Book Service
      </Button>
      <Modal show={isshow}  >
        <Modal.Header className='text-center'>
          <Modal.Title className='' >
            Add Your Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="contact-form-sec pt-3 pb-3" style={{ padding: "0px 0px", backgroundColor: "rgba(5, 5, 5, 0.70)" }}>
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
                      <label htmlFor="" className='mx-2' style={{ color: "white" }}>Choose Date </label>
                      <input type="time" className="form-control  p-2" id="inputPassword4" min="09:00" max="22:00" onChange={(event) => { setstart_time(event.target.value) }} />

                    </div>


                    <div className="col-12">
                      <div className="mb-3">

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                          placeholder="Write Your Current Address...."></textarea>
                      </div>
                    </div>


                  </form>
                </div>
              </div>
            </div>
          </section>





        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-3" onClick={initmodel}>
            CLOSE
          </Button>
          <Button variant="dark" className="mx-3" type='submit' onClick={handlebook}>
            Book Service
          </Button>
        </Modal.Footer>

      </Modal>



      <Modal show={alert1}  >

        <Modal.Body>
          hello
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-3" onClick={alertmodel}>
            CLOSE
          </Button>
          <Button variant="dark" className="mx-3" type='submit' onClick={handlebook}>
            Book Service
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}

const Delete = (props) => {
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const deleteitem = async (id) => {
    initmodel();
    const data = { id: id };
    const response = await cartser.deletecartitem(data);
    console.log("deleteresponse", response);
    if (response.data.success === true) {
      alert("deleted successfully");
      window.location.reload();

    }
    else {
      alert("not deleted");
    }
  }
  return (
    <>

      <i class="fa fa-trash" onClick={initmodel} style={{ cursor: "pointer" }}></i>
      <Modal show={isshow}>
        <Modal.Body>
          Are You sure To Delete Service into Cart..?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-3" onClick={initmodel}>
            Cancel
          </Button>
          <Button variant="dark" className="mx-3" type='button' onClick={(event) => { deleteitem(props.id) }}>
            Yes
          </Button>
        </Modal.Footer>

      </Modal>




    </>
  )
}