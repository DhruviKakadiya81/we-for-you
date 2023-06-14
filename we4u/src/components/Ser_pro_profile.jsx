import React from 'react'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import "../css/Ser_pro_profile.css"
import { FormControl, FormGroup, Input, InputLabel, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles, TextField } from '@material-ui/core';

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
  const classes=useStyles();

  const [serid,setserid]=useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [pemail,setpemail]=useState('');
  const [useremail,setuseremail]=useState('');
  const [gender, setgender] = useState('');
  const [city,setcity]=useState('');
  const [area,setarea]=useState('');
  const [serdata,setserdata]=useState();
  const [msg, setmsg] = useState();
  const [isshow, invokemodel] = useState(false);
  const initmodel = () => {
      return invokemodel(!isshow);
  }
  const [isData, setIsData] = useState(true);
  const [isEdit, setisEdit] = useState(true);
  const navigate = useNavigate();

  

  return (
    <>
    <Ser_Pro_Navbar/>
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
                                <h6 className="text-muted f-w-400">Dhruvi</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Last Name</p>
                                <h6 className="text-muted f-w-400">Kakadiya</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Professional Email</p>
                                <h6 className="text-muted f-w-400">kakadiya@gmail.com</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">User Email</p>
                                <h6 className="text-muted f-w-400">dhruvi@gmail.com</h6>
                              </div>
                            </div>


                            <div className="row">
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Gender</p>
                                <h6 className="text-muted f-w-400">Female</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">City</p>
                                <h6 className="text-muted f-w-400">Surat</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="m-b-10 f-w-600">Area</p>
                                <h6 className="text-muted f-w-400">Varachha</h6>
                              </div>
                              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Edit Your Details</h6>
                              <div className="col-sm-6">
                                <ChangePass/>

                              </div>
                              <div className="col-sm-6">
                                <Update/>
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
    </>
  )
}

const ChangePass = (props) =>{
  const [isshow, invokemodel] = useState(false);
  const [setpassword, setserPass] = useState("");
  const [serid,setserid]=useState(props.serid);
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

  const handleSerPassword=async()=>{
    if(conpassword===newpassword){
      console.log("serid==>",serid);
      const data={serid,oldpassword,newpassword};
    }else{
      setmsg("passwords are not matched!!");
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

  useEffect(()=>{
    setserid(props.serid);
    setmsg('');
  },[props])


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
                  style={{ marginTop:"-43px", marginLeft: "150px", cursor: "pointer", position: "absolute", cursor: "pointer" }}
                  onClick={handletogglepass}
                ></i></p>
            </FormControl><br />

            <FormControl className='r'>
              <InputLabel className='' >New Password</InputLabel>
              <Input type="password" name="name" id="id_password1" className='my-3' onChange={(event) => { setnewpassword(event.target.value) }} />
              <p><i
                  className={eye1}
                  id="togglePassword"
                  style={{ marginTop:"-43px", marginLeft: "150px", cursor: "pointer", position: "absolute", cursor: "pointer" }}
                  onClick={handletogglepass1}
                ></i></p>
            </FormControl><br />

            <FormControl className=''>
              <InputLabel className='' >Confirm New Password</InputLabel>
              <Input type="password" name="name" id="id_password2" className='my-3' onChange={(event) => { setconpassword(event.target.value) }} />
              <p><i
                  className={eye2}
                  id="togglePassword"
                  style={{ marginTop:"-43px", marginLeft: "200px", cursor: "pointer", position: "absolute", cursor: "pointer" }}
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

const Update = (props) =>{
  const [isshow, invokemodel] = useState(false);

  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const classes = useStyles();
  const [serid,setserid]=useState(props.serid);
  const [firstname, setfirstname] = useState(props.firstname);
  const [lastname, setlastname] = useState(props.lastname);
  const [pemail,setpemail]=useState(props.pemail);
  const [useremail,setuseremail]=useState(props.useremail);
  const [gender, setgender] = useState(props.gender);
  const [city,setcity]=useState(props.city);
  const [area,setarea]=useState(props.area);

  const handleSerUpdate=async(event)=>{
    event.preventDefault();
    const data={serid,firstname,lastname,pemail,useremail,gender,city,area};
    
  }

  useEffect(()=>{
    setfirstname(props.firstname);
    setlastname(props.lastname);
    setpemail(props.pemail);
    setuseremail(props.useremail);
    setgender(props.gender);
    setcity(props.city);
    setarea(props.area);
    setserid(props.serid);
  },[props])

  return (
    <>
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

            <div className="text-center">
              <FormControl className='detail_container'>
                <InputLabel className='' >User Email</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={useremail} onChange={(event) => { setuseremail(event.target.value) }} />
              </FormControl><br />
            </div>


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

            <div className="text-center">
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
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-3" onClick={initmodel}>
            CLOSE
          </Button>
          <Button variant="dark" className="mx-3" type='submit'>
            Update
          </Button>
        </Modal.Footer>

      </Modal>

    </>
  )
}
