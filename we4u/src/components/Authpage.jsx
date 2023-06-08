import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import getuser from '../services/GetUser'
import { useNavigate } from 'react-router-dom'
import cartser from '../services/cartservics'
import userdata from '../services/UserProfile'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
export const Authpage = () => {
  const [userid, setuserid] = useState();
  const [cartdata, setcartdata] = useState([]);
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }
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
  useEffect(() => {
    userid && handlebookser();
  }, [userid])

  console.log(cartdata);

  return (
    <>
      <Navbar />
      <section className='mt-5 pt-5'>
        <div className='text-center pb-5'><b>You Added Services</b> </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {
              (cartdata === undefined) ?
                <div className="row d-flex justify-content-center pt-5">
                  <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "80%", left: "50%" }}>
                  </div>

                </div>
                : (cartdata.length === 0) ?
                  <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                    <span>Not Added Services</span>

                  </div>
                  :
                  <div className="sp">
                    <div className='bg-danger'></div>

                    <div className="row d-flex justify-content-center ">

                      {
                        cartdata.map((sp) => (
                          <>
                            <div className="col-8 p-3 m-3 mt-0" style={{ border: "2px solid grey", borderRadius: "15px" }}>
                              <div className="text-center row  d-flex justify-content-center" key={sp._id}>
                                <div className="col-6"><p>{sp.serviceid.subname.subname}</p>
                                  <p>Prize: <span>{sp.serviceid.prize}</span></p>
                                  <Update data={sp} />
                                </div>
                                <div className="col-4" style={{ height: "150px", width: "150px" }}>
                                  <img style={{ border: "2px solid lightgray", height: "150px", width: "150px", backgroundSize: "contain", borderRadius: "15px" }} src={"http://localhost:4000/image/" + sp.serviceid.subname.image} alt="images" />
                                </div>

                              </div>
                            </div>



                          </>


                        ))
                      }
                    </div>

                  </div>
            }

          </div>
        </div>


      </section>

    </>

  )
}

const Update = (props) => {
  const [data, setdata] = useState(props.data);
  const [mobileno, setmobileno] = useState();
  const [date, setdate] = useState();
  const [start_time, setstart_time] = useState();

  // const navigate = useNavigate();
  console.log(props)
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }

  const handlebook = async () => {

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
                      <input type="time" className="form-control  p-2" id="inputPassword4" onChange={(event) => { setstart_time(event.target.value) }} />

                    </div>


                    <div className="col-12">
                      <div className="mb-3">

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                          placeholder="Write Your Current Address...."></textarea>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button type="button" className="s_cnt_btn px-5 py-2">Book Service </button>
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
          <Button variant="dark" className="mx-3" type='submit' >
            Update
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}