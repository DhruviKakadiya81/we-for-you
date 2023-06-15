import React from 'react'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import "../css/Ser_pro_profile.css"
import { FormControl, FormGroup, Input, InputLabel, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from '@mui/material';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles, TextField } from '@material-ui/core';
import spservice from '../services/spservice';
import Services from '../services/Services';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


export const Ser_pro_profile = () => {
  const classes = useStyles();

  const [serid, setserid] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [pemail, setpemail] = useState('');
  const [useremail, setuseremail] = useState('');
  const [gender, setgender] = useState('');
  const [city, setcity] = useState('');
  const [area, setarea] = useState('');
  const [serdata, setserdata] = useState();
  const [spid, setspid] = useState('');
  const [msg, setmsg] = useState();
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const [isData, setIsData] = useState(true);
  const [isEdit, setisEdit] = useState(true);
  const navigate = useNavigate();

  const getdata = async () => {
    try {

      const response = await Services.getdetails({ spid });
      console.log("response", response);
      setserdata(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getspclient = async () => {
    try {
      const id = localStorage.getItem("sptoken");
      const response = await Services.getspid({ id });
      setspid(response.data.data._id);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    spid && getdata();
  }, [spid]);
  useEffect(() => {
    getspclient();
  }, [])

  console.log("spid", spid)
  return (
    <>
      <Ser_Pro_Navbar />
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
      {
        serdata ?
          <div className="page-content page-container" id="page-content">
            <div className="padding">
              <div className="row container d-flex justify-content-center">
                <div className="col-xl-7 col-md-12 mt-3">
                  <div className="card1 user-card-full ser_user_full_card">
                    <div className="row m-l-0 m-r-0">
                      <div className="col-sm-4 user_profile">
                        <div className="sideline_pro mx-5">

                        </div>
                      </div>
                      <div className="col-sm-8 px-4">
                        <div className="card-block ser_pro_all">
                          <p className="m-b-20 p-b-5  f-w-800 ser_pro_head">Profile</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">First Name</p>
                              <h6 className="text-muted f-w-400">{serdata.firstname}</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Last Name</p>
                              <h6 className="text-muted f-w-400">{serdata.lastname}</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Professional Email</p>
                              <h6 className="text-muted f-w-400">{serdata.pemail}</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">User Email</p>
                              <h6 className="text-muted f-w-400">{serdata.spid.email}</h6>
                            </div>
                          </div>


                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Gender</p>
                              <h6 className="text-muted f-w-400">{serdata.gender}</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">City</p>
                              <h6 className="text-muted f-w-400">{serdata.cityid.cityname ? serdata.cityid.cityname : "This city is not available"}</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Area</p>
                              <h6 className="text-muted f-w-400">{serdata.areaid.areaname ? serdata.areaid.areaname : "This city is not available"}</h6>
                            </div>
                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Edit Your Details</h6>
                            <div className="col-sm-6">
                              <ChangePass />

                            </div>
                            <div className="col-sm-6">
                              <Update data={serdata} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="row d-flex justify-content-center pt-5">
            <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "50%", left: "50%" }}>

            </div>


          </div>


      }

    </>
  )
}

const ChangePass = (props) => {
  const [isshow, invokemodel] = useState(false);
  const [setpassword, setserPass] = useState("");
  const [serid, setserid] = useState(props.serid);
  const [oldpassword, setoldpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [conpassword, setconpassword] = useState('');
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const [eye1, seteye1] = useState("fa-sharp fa-solid fa-eye-slash");
  const [eye2, seteye2] = useState("fa-sharp fa-solid fa-eye-slash");
  const [msg, setmsg] = useState('');
  const initmodel = () => {
    return invokemodel(!isshow);
  }

  const handleSerPassword = async () => {
    if (conpassword === newpassword) {
      console.log("serid==>", serid);
      const data = { serid, oldpassword, newpassword };
    } else {
      setmsg("Passwords are not matched!!");
    }
  }


  const handletogglepass = async (event) => {
    //event.preventDefault();
    var x = document.getElementById("id_password");
    if (x.type === "password") {
      x.type = "text";
      seteye("fa-solid fa-eye");
    } else {
      x.type = "password";
      seteye("fa-sharp fa-solid fa-eye-slash");
    }
  };

  const handletogglepass1 = async (event) => {
    //event.preventDefault();
    var x = document.getElementById("id_password1");
    if (x.type === "password") {
      x.type = "text";
      seteye1("fa-solid fa-eye");
    } else {
      x.type = "password";
      seteye1("fa-sharp fa-solid fa-eye-slash");
    }
  };

  const handletogglepass2 = async (event) => {
    //event.preventDefault();
    var x = document.getElementById("id_password2");
    if (x.type === "password") {
      x.type = "text";
      seteye2("fa-solid fa-eye");
    } else {
      x.type = "password";
      seteye2("fa-sharp fa-solid fa-eye-slash");
    }
  };

  useEffect(() => {
    setmsg('');
  }, [props])


  return (
    <>
      <button variant="contained" className='btn my-2' style={{ backgroundColor: "grey", color: "white" }} onClick={initmodel}>
        Change Password??
      </button>
      <Modal show={isshow} style={{ overflowX: "scroll", width: "100%" }} >
        <Modal.Header>
          <Modal.Title closeButton className='' >
            Change Password
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="dlt d-grid justify-content-center">
            <FormControl className=''>
              <InputLabel className=''>Old Password</InputLabel>
              <Input type="password" name="name" id="id_password" className='my-3' onChange={(event) => { setoldpassword(event.target.value) }} />
              <p><i
                className={eye}
                id="togglePassword"
                style={{ marginTop: "-43px", marginLeft: "150px", cursor: "pointer", position: "absolute", cursor: "pointer" }}
                onClick={handletogglepass}
              ></i></p>
            </FormControl><br />

            <FormControl className='r'>
              <InputLabel className='' >New Password</InputLabel>
              <Input type="password" name="name" id="id_password1" className='my-3' onChange={(event) => { setnewpassword(event.target.value) }} />
              <p><i
                className={eye1}
                id="togglePassword"
                style={{ marginTop: "-43px", marginLeft: "150px", cursor: "pointer", position: "absolute", cursor: "pointer" }}
                onClick={handletogglepass1}
              ></i></p>
            </FormControl><br />

            <FormControl className=''>
              <InputLabel className='' >Confirm New Password</InputLabel>
              <Input type="password" name="name" id="id_password2" className='my-3' onChange={(event) => { setconpassword(event.target.value) }} />
              <p><i
                className={eye2}
                id="togglePassword"
                style={{ marginTop: "-43px", marginLeft: "200px", cursor: "pointer", position: "absolute", cursor: "pointer" }}
                onClick={handletogglepass2}
              ></i></p>
            </FormControl><br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-3" onClick={initmodel}>
            CLOSE
          </Button>
          <Button variant="dark" className="mx-3" type='submit'>
            Change
          </Button>
        </Modal.Footer>



      </Modal>

    </>
  )
}

const Update = (props) => {
  const [isshow, invokemodel] = useState(false);

  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const classes = useStyles();
  // const [serid, setserid] = useState(props.serid);
  const [firstname, setfirstname] = useState(props.data.firstname);
  const [lastname, setlastname] = useState(props.data.lastname);
  const [pemail, setpemail] = useState(props.data.pemail);
  const [useremail, setuseremail] = useState(props.data.useremail);
  const [gender, setgender] = useState(props.data.gender);
  const [city, setcity] = useState([]);
  const [area, setarea] = useState([]);
  const [cityid, setcityid] = useState(props.data.cityid._id);
  const [areaid, setareaid] = useState(props.data.areaid._id);
  const [msg, setmsg] = useState();
  const [spid, setspid] = useState(props.data.spid);

  const [isshow1, invokemodel1] = useState(false);
  const initmodel1 = () => {
    return invokemodel(!isshow1);
  }

  const handleSerUpdate = async (event) => {
    event.preventDefault();

    const data = { spid, firstname, lastname, pemail, useremail, gender, cityid, areaid };
    const response = await spservice.updatesp(data);
    if (response.data.success === false) {
      setmsg(response.data.msg);
      initmodel1();
    }
    else {
      initmodel();
      setmsg(response.data.msg);
      invokemodel1(!isshow1);

    }

  }

  useEffect(() => {
    setfirstname(props.data.firstname);
    setlastname(props.data.lastname);
    setpemail(props.data.pemail);
    setuseremail(props.data.useremail);
    setgender(props.data.gender);
    setcityid(props.data.cityid._id);
    setareaid(props.data.areaid._id);
    // setserid(props.data.serid);
    setspid(props.data.spid);
  }, [props]);
  const handlecity = async () => {
    try {
      const response = await Services.getcity();
      setcity(response.data.data);
      console.log("city --- ", response);
    } catch (error) {
      console.log(error);
    }
  }
  const handlearea = async () => {
    try {

      console.log("cityid", city)
      const response = await Services.getarea({ cityid });
      setarea(response.data.data);
      console.log("area --- ", response);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    handlecity();
    handlearea();
  }, []);

  useEffect(() => {
    cityid && handlearea();
  }, [cityid]);

  console.log("city", cityid);
  return (
    <>
      <Modal show={isshow1}  >
        <Modal.Body>
          <div className="">
            <b>
              {msg}
            </b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="mx-3" type='submit' onClick={() => { window.location.reload(); }}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <button variant="contained" className='btn my-2' style={{ backgroundColor: "grey", color: "white" }} onClick={initmodel}>
        Update Your Detail
      </button>
      <Modal show={isshow} style={{ overflowX: "scroll", width: "100%" }} >
        <Modal.Header onClick={initmodel}>
          <Modal.Title className='' >
            Update Your Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="text-center">
              <FormControl className='mb-1 detail_container'>
                <InputLabel className='' >Enter First Name</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={firstname} onChange={(event) => { setfirstname(event.target.value) }} />
              </FormControl><br />

            </div>
            <div className="text-center">
              <FormControl className='detail_container'>
                <InputLabel className='' >Enter Second Name</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={lastname} onChange={(event) => { setlastname(event.target.value) }} />
              </FormControl><br />
            </div>

            <div className="text-center">
              <FormControl className='detail_container'>
                <InputLabel className='' >Professional Email</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={pemail} onChange={(event) => { setpemail(event.target.value) }} />
              </FormControl><br />
            </div>

            {/* <div className="text-center">
              <FormControl className='detail_container'>
                <InputLabel className='' >User Email</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={useremail} onChange={(event) => { setuseremail(event.target.value) }} />
              </FormControl><br />
            </div> */}


            <div className="text-center">
              <FormControl className='detail_container'>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" checked={gender === 'female'} control={<Radio />} label="Female" onChange={(event) => { setgender(event.target.value) }} />
                  <FormControlLabel value="male" checked={gender === 'male'} control={<Radio />} label="Male" onChange={(event) => { setgender(event.target.value) }} />
                  {/* <FormControlLabel value="other" checked={gender === 'other'} control={<Radio />} label="Other" onChange={(event) => { setgender(event.target.value) }} /> */}
                </RadioGroup>
              </FormControl><br />
            </div>

            <div className="text-left d-flex justify-content-center">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className='detail_container'>
                <InputLabel id="demo-simple-select-standard-label">Select City</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name="cityid"
                  defaultValue={cityid}
                  onChange={(event) => { setcityid(event.target.value) }}
                >
                  {city.map(city => (
                    <MenuItem value={city._id}>{city.cityname}</MenuItem>
                  ))}

                </Select>
              </FormControl><br />
            </div>

            <div className="text-left d-flex justify-content-center">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className='detail_container'>
                <InputLabel id="demo-simple-select-standard-label">Select Area</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name="areaid"
                  defaultValue={areaid}
                // onChange={handleChange}
                >
                  {area.map(city => (
                    <MenuItem value={city._id}>{city.areaname}</MenuItem>
                  ))}
                </Select>
              </FormControl><br />
            </div>
            {/* <div className="text-center">
              <FormControl className='detail_container'>
                <InputLabel className='' >City</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={city} onChange={(event) => { setcity(event.target.value) }} />
              </FormControl><br />
            </div>

            <div className="text-center">
              <FormControl className='detail_container'>
                <InputLabel className='' >Area</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={area} onChange={(event) => { setarea(event.target.value) }} />
              </FormControl><br />
            </div> */}

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-3" onClick={initmodel}>
            CLOSE
          </Button>
          <Button variant="dark" className="mx-3" type='button' onClick={handleSerUpdate}>
            Update
          </Button>
        </Modal.Footer>

      </Modal>

    </>
  )
}
