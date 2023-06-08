import React from 'react'
import { Navbar } from './Navbar'
import { FormControl, FormGroup, Input, InputLabel, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import "../css/Profile.css";
import { makeStyles, TextField } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import userprofile from '../services/UserProfile'
import getLoginUser from '../services/GetUser'
import { useEffect } from 'react';

import '../css/Showprofile.css';

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

const Profile = () => {
  const classes = useStyles();

  const [userid, setuserid] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [birthdate, setbirthdate] = useState('');
  const [gender, setgender] = useState('');
  const [image, setimage] = useState('');
  const [userdata, setuserdata] = useState();
  const [isData, setIsData] = useState(true);
  const [isEdit, setisEdit] = useState(true);

  const handleProfile = async (event) => {
    alert(firstname + lastname + birthdate + gender + image);
    const data = { firstname, lastname, birthdate, gender, image, userid };
    console.log("images===>", image);
    const respo = await userprofile.create(data);
    console.log("response---->", respo);
  }



  const getdata = async () => {
    console.log("hello");
    let id = localStorage.getItem("token");
    const respo = await getLoginUser.sendauth({ id });

    if (respo.data.success === true) {
      setuserid(respo.data.data._id);

      let userid = respo.data.data._id;
      const response = await userprofile.getdata({ userid });
      if (response.data.data === null) {
        setIsData(false);
      }
      else {
        console.log("response==>", response);
        let fbirthdate = response.data.data.birthdate.slice(0, 10);
        console.log("birthdate====>", fbirthdate);
        setuserdata(response.data.data);
        // setuserdata((userdata) => ({
        //   ...userdata,
        //   userid: response.data.data.userid,
        //   firstname: response.data.data.firstname,
        //   lastname: response.data.data.lastname,
        //   gender: response.data.data.gender,
        //   birthdate: fbirthdate,
        //   image: response.data.data.image
        // }));
        setIsData(true);

      }


    }


  }


  useEffect(() => {
    console.log("userdata", isData);

    isEdit && getdata();
    setisEdit(true);
  }, [isEdit])
  console.log("userdata===", userdata);
  if (isData === false) {

    return (
      <>

        <Navbar />
        <div className='profile_main_container'>
          <div className="profile_full_form">
            <div className="image_container order-2 order-lg-1">
              <h3 className="title pt-5 mt-5 pb-5">We4U</h3>
              <img src="Images/avtar.jpg" alt="" width="180" height="180" className='img mt-5' />
            </div>

            <div className="profile_form_container order-1 order-lg-2 p-5">
              <form action="">
                <h3 className='title mb-5'>Profile</h3>
                <div className="pro_input_container">
                  <FormControl className='mb-3 detail_container'>
                    <InputLabel className='mx-3' >Enter First Name</InputLabel>
                    <Input type="text" name="name" className='my-3' onChange={(event) => { setfirstname(event.target.value) }} />
                  </FormControl><br />
                </div>
                <div className="pro_input_container">
                  <FormControl className='mb-3 detail_container'>
                    <InputLabel className='mx-3' >Enter Second Name</InputLabel>
                    <Input type="text" name="name" className='my-3' onChange={(event) => { setlastname(event.target.value) }} />
                  </FormControl><br />
                </div>
                <div className="pro_input_container">

                  <p className='' style={{ textAlign: "left", marginLeft: "23%" }}> Select your Image</p>
                  <FormControl className='mb-3 mt-0 detail_container'>

                    <Input type="file" name="name" className='my-3' onChange={(event) => { setimage(event.target.files[0]) }} />
                  </FormControl><br />
                </div>
                <div className="pro_input_container">
                  <FormControl className='{classes.container} mb-4 detail_container'>
                    <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue="2023-01-01"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(event) => { setbirthdate(event.target.value) }}
                    />
                  </FormControl><br />
                </div>
                <div className="pro_input_container">
                  <FormControl className='mb-3 detail_container'>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"

                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(event) => { setgender(event.target.value) }} />
                      <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(event) => { setgender(event.target.value) }} />
                      <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(event) => { setgender(event.target.value) }} />
                    </RadioGroup>
                  </FormControl><br />
                </div>
                <div className="pro_input_container">
                  <FormControl className='mb-3 mx-auto'>
                    <Button type='submit' variant='contained' className='my-3 px-5 py-3' onClick={handleProfile} style={{ backgroundColor: "rgb(50,50,50)", color: "white" }}>Done</Button>
                  </FormControl><br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <Navbar />
        {

          (!userdata) ?
            <div className="row d-flex justify-content-center pt-5">
              <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "80%", left: "50%" }}>
              </div>
            </div>
            : <div class="page-content page-container" id="page-content">
              <div class="padding">
                <div class="row container d-flex justify-content-center">
                  <div class="col-xl-7 col-md-12">
                    <div class="card1 user-card-full">
                      <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                          <div class="card-block text-center text-white">
                            <div class="m-b-25">
                              <img src={"http://localhost:4000/image/" + userdata.image} class="img-radius" alt="User-Profile-Image" height={"100px"} width={"100px"} style={{ borderRadius: "50px" }} />
                            </div>
                            <p className='mb-2'>{userdata.firstname} {userdata.lastname}</p>
                            {/* <a class="f-w-600" style={{ color: "white" }}>Edit Your Image</a> */}


                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="card-block">
                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                            <div class="row">
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">First Name</p>
                                <h6 class="text-muted f-w-400">{userdata.firstname}</h6>
                              </div>
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Last Name</p>
                                <h6 class="text-muted f-w-400">{userdata.lastname}</h6>
                              </div>
                            </div>


                            <div class="row">
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Email</p>
                                <h6 class="text-muted f-w-400">{userdata.userid.email}</h6>
                              </div>
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Gender</p>
                                <h6 class="text-muted f-w-400">{userdata.gender}</h6>
                              </div>
                              <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Edit Youe Details</h6>
                              <div class="col-sm-6">
                                <ChangePass userid={userdata.userid._id} />

                              </div>
                              <div class="col-sm-6">

                                <Update userid={userdata.userid._id} firstname={userdata.firstname} lastname={userdata.lastname} gender={userdata.gender} birthdate={userdata.birthdate} handleIsEdit={() => setisEdit(!isEdit)} />
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
        }
      </>

    )
  }

}

export default Profile

const ChangePass = (props) => {
  const [isshow, invokemodel] = useState(false);
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const [password, setPass] = useState("");
  const [userid, setuserid] = useState(props.userid);
  const [oldpassword, setoldpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [conpassword, setconpassword] = useState('');
  const [msg, setmsg] = useState('');
  const initmodel = () => {
    return invokemodel(!isshow);
  }
  console.log(props)
  const handlepassword = async () => {
    if (conpassword === newpassword) {
      console.log("userid==>", userid);
      const data = { userid, oldpassword, newpassword };
      const response = await userprofile.updatepassword(data);
      console.log("response===>", response);
      if (response.data.success === true) {
        initmodel();
        alert("password updated successfully");
      }
      else {
        initmodel();
        alert("password not updated");
      }
    }
    else {
      setmsg("your confirm password and new password is not matched");
    }
  }

  const handletogglepass = async (event) => {
    event.preventDefault();
    var x = document.getElementById("id_password");
    var y = document.getElementById("id_password2");
    if (x.type === "password") {
      x.type = "text";
      seteye("fa-solid fa-eye");
    } else {
      x.type = "password";
      seteye("fa-sharp fa-solid fa-eye-slash");
    }
    if (y.type === "password") {
      y.type = "text";
      seteye("fa-solid fa-eye");
    } else {
      y.type = "password";
      seteye("fa-sharp fa-solid fa-eye-slash");
    }
  };


  useEffect(() => {
    setuserid(props.userid);
    setmsg('');
    seteye('fa-sharp fa-solid fa-eye-slash')
  }, [props])

  return (
    <>
      <Button variant="contained" style={{ backgroundColor: "white", color: "black" }} onClick={initmodel}>
        Change Password??
      </Button>
      <Modal show={isshow} style={{ overflowX: "scroll", width: "100%" }} >
        <Modal.Header closeButton onClick={initmodel}>
          <Modal.Title className='' >
            Change Password
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="dlt">
            <FormControl className='mb-3 detail_container'>
              <InputLabel className='mx-3'>Old Password</InputLabel>
              <Input type="text" name="name" className='my-3' onChange={(event) => { setoldpassword(event.target.value) }} />

            </FormControl><br />
            <i
              className={eye}
              id="togglePassword"
              style={{ marginLeft: "-25px", cursor: "pointer" }}
              onClick={handletogglepass}

            ></i>
            <FormControl className='mb-3 detail_container'>
              <InputLabel className='mx-3' >New Password</InputLabel>
              <Input type="text" name="name" id="id_password2" className='my-3' onChange={(event) => { setnewpassword(event.target.value) }} />
            </FormControl><br />

            <FormControl className='mb-3 detail_container'>
              <InputLabel className='mx-3' >Confirm New Password</InputLabel>
              <Input type="text" name="name" id="id_password" className='my-3' onChange={(event) => { setconpassword(event.target.value) }} />
              <i
                className={eye}
                id="togglePassword"
                style={{ marginLeft: "-25px", cursor: "pointer" }}
                onClick={handletogglepass}

              ></i>
              {msg}
            </FormControl><br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="mx-3" onClick={initmodel} style={{ backgroundColor: "red" }}>
            CLOSE
          </Button>
          <Button variant="" className="mx-3" type='submit' style={{ backgroundColor: "black", color: "white" }} onClick={handlepassword}>
            Change
          </Button>
        </Modal.Footer>



      </Modal>

    </>
  )
}

const Update = (props) => {
  const [isshow, invokemodel] = useState(false);
  console.log(props);
  const classes = useStyles();
  const [userid, setuserid] = useState(props.userid);
  const [firstname, setfirstname] = useState(props.firstname);
  const [lastname, setlastname] = useState(props.lastname);
  const [birthdate, setbirthdate] = useState(props.birthdate);
  const [gender, setgender] = useState(props.gender);

  const initmodel = () => {
    return invokemodel(!isshow);
  }
  const handleupdate = async (event) => {
    event.preventDefault();
    console.log("data ---", userid + firstname, lastname, gender, birthdate);

    const data = { userid, firstname, lastname, birthdate, gender };
    const response = await userprofile.updatedata(data);
    console.log("updated response ===>", response);
    props.handleIsEdit();
    initmodel();
  }

  useEffect(() => {
    setfirstname(props.firstname);
    setlastname(props.lastname);
    setbirthdate(props.birthdate);
    setgender(props.gender);
    setuserid(props.userid);
    console.log("userdata updated====>", userid);
  }, [props])


  return (
    <>
      <Button variant="contained" style={{ backgroundColor: "white", color: "black" }} onClick={initmodel}>
        Update Your Detail
      </Button>
      <Modal show={isshow} style={{ overflowX: "scroll", width: "100%" }} >
        <Modal.Header onClick={initmodel}>
          <Modal.Title className='' >
            Update Your Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="pro_input_container">
              <FormControl className='mb-3 detail_container'>
                <InputLabel className='' >Enter First Name</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={firstname} onChange={(event) => { setfirstname(event.target.value) }} />
              </FormControl><br />

            </div>
            <div className="pro_input_container">
              <FormControl className='mb-3 detail_container'>
                <InputLabel className='' >Enter Second Name</InputLabel>
                <Input type="text" name="name" className='my-3' defaultValue={lastname} onChange={(event) => { setlastname(event.target.value) }} />
              </FormControl><br />
            </div>

            <div className="pro_input_container">
              <FormControl className='{classes.container} mb-4 detail_container'>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue={birthdate}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) => { setbirthdate(event.target.value) }}
                />
              </FormControl><br />
            </div>
            <div className="pro_input_container">
              <FormControl className='mb-3 detail_container'>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" checked={gender === 'female'} control={<Radio />} label="Female" onChange={(event) => { setgender(event.target.value) }} />
                  <FormControlLabel value="male" checked={gender === 'male'} control={<Radio />} label="Male" onChange={(event) => { setgender(event.target.value) }} />
                  <FormControlLabel value="other" checked={gender === 'other'} control={<Radio />} label="Other" onChange={(event) => { setgender(event.target.value) }} />
                </RadioGroup>
              </FormControl><br />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="mx-3" onClick={initmodel} style={{ backgroundColor: "red" }}>
            CLOSE
          </Button>
          <Button variant="" className="mx-3" type='submit' style={{ backgroundColor: "black", color: "white" }} onClick={handleupdate}>
            Update
          </Button>
        </Modal.Footer>

      </Modal>

    </>
  )
}