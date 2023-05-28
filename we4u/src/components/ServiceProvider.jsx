import styled from '@emotion/styled'
import "../css/ServiceProvider.css"
import { Navbar } from "./Navbar"
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import service from '../services/Services'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar';
import { useNavigate } from "react-router-dom";
const FlexColumnContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  box-sizing: border-box;
`;
const StepContainer = styled('div')`
  width: 100%;
  height: 100%;
`;


export const ServiceProvider = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [spid, setspid] = useState();
  const [isData, setisData] = useState(false);
  const navigate = useNavigate();
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
  console.log("data props==>", props);
  const handleStep1Change = (fieldName, value) => {
    setstep1((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };



  const handleNext = () => {
    if (activeStep === 0) {
      console.log("data:", step1);
      if (step1.firstname === '') {
        setActiveStep((prevActiveStep) => prevActiveStep);
      }
      else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
    else {
      console.log("data:", step1);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      if (activeStep === 2) {
        handleaddd();
      }
    }
  };


  const handleaddd = async () => {
    console.log("data==>", step1);
    const response = await service.adddata(step1);
    if (response.data.success === true) {
      navigate("/sphome2");
    }
    console.log(response);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepComponent = () => {
    switch (activeStep) {
      case 0:
        return <Step1 data={step1} onChange={handleStep1Change} />;
      case 1:
        return <Step2 data={step1} onChange={handleStep1Change} />;
      case 2:
        return <Step3 data={step1} onChange={handleStep1Change} />;
      default:
        return null;
    }
  };


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


  useEffect(() => {
    getspclient();
  }, [isData]);





  return (
    <>
      <Ser_Pro_Navbar />
      <div className="mt-5 mx-lg-5 mx-md-0 mx-sm-0">
        <Stepper activeStep={activeStep} >
          <Step variant="contained" color="primary">
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        <div>{renderStepComponent()}</div>
        <div className='text-center' >
          <Button disabled={activeStep === 0} onClick={handleBack}
            variant="contained"
            color="primary"
            className='mx-5'
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleNext}
            className='mx-5'
          >
            {activeStep === 3 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </>
  );
}



const Step3 = (props) => {

  const [getservice1, setgetservice] = useState([]);
  const [getcity, setgetcity] = useState([]);
  const [getarea, setgetarea] = useState([]);
  const [ser, setser] = useState('');
  const [cityid, setcity] = useState('');
  const [areaid, setarea] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.data.cityid = cityid;
    props.onChange(name, value);
  };
  const handleservice = async () => {
    try {
      const response = await service.getservice();
      setgetservice(response.data.data);
      console.log("services ==> ", getservice1);
      getservice1.map((ser) => (
        console.log("service=>", ser.s_name)
      ));

    } catch (error) {
      console.log(error);
    }
  }

  const handlecity = async () => {
    try {
      const response = await service.getcity();
      setgetcity(response.data.data);
      console.log("city --- ", response);
    } catch (error) {
      console.log(error);
    }
  }
  const handlearea = async () => {
    try {

      console.log("cityid", cityid)
      const response = await service.getarea({ cityid });
      setgetarea(response.data.data);
      console.log("area --- ", response);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    handleservice();
    handlecity();
    handlearea();
  }, []);

  useEffect(() => {
    handlearea();
  }, [cityid]);
  return (
    <StepContainer>
      <div className="outer_container">
        <div className="inner_container">
          <FlexColumnContainer>
            <div className="step_heading_container">
              Step 3
            </div>
            <FlexColumnContainer width="100%">
              <div className="step_form_container">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className='drop_input my-3'>
                  <InputLabel id="demo-simple-select-standard-label">Select Service</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Select service"
                    name="serviceid"
                    onChange={handleChange}
                  >
                    {getservice1.map(ser => (
                      <MenuItem value={ser._id}>{ser.s_name}</MenuItem>
                    ))}
                  </Select>
                </FormControl><br />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className='drop_input my-3'>
                  <InputLabel id="demo-simple-select-standard-label">Select City</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    name="cityid"
                    onChange={(event) => { setcity(event.target.value); handleChange() }}
                  >
                    {getcity.map(city => (
                      <MenuItem value={city._id}>{city.cityname}</MenuItem>
                    ))}
                  </Select>
                </FormControl><br />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className='drop_input my-3'>
                  <InputLabel id="demo-simple-select-standard-label">Select Area</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    name="areaid"
                    onChange={handleChange}
                  >
                    {getarea.map(city => (
                      <MenuItem value={city._id}>{city.areaname}</MenuItem>
                    ))}
                  </Select>
                </FormControl><br />
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step2 = (props) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.onChange(name, value);
  };
  return (
    <StepContainer md="12">
      <div className="outer_container">
        <div className="inner_container">
          <FlexColumnContainer>
            <div className="step_heading_container">
              Step 2
            </div>
            <FlexColumnContainer width="100%">
              <div className="step_form_container">
                <label>Shop Name</label><br />
                <input type="text" className="step_input px-2 py-1 mb-3" name="shopname" value={props.data.shopname} onChange={handleChange} /><br />
                <label>Address</label><br />
                <textarea type="text" className="step_input px-2 py-1 mb-3" name="address" value={props.data.address} onChange={handleChange} /><br />
                <label>Professional Email</label><br />
                <input type="text" className="step_input px-2 py-1 mb-3" name="pemail" value={props.data.pemail} onChange={handleChange} /><br />
                <label>Description</label><br />
                <textarea type="number" className="step_input px-2 py-1 mb-3" name="description" value={props.data.description} onChange={handleChange} /><br />
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step1 = (props) => {
  // console.log("props===>",props);
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.onChange(name, value);
  };
  return (
    <StepContainer>
      <div className="outer_container">
        <div
          className="inner_container"
        >
          <FlexColumnContainer>
            <div className="step_heading_container">
              Step 1
            </div>
            <FlexColumnContainer width="100%">
              <div className="step_form_container">
                <label>First Name</label><br />
                <input type="text" className="px-2 py-1 mb-3 step_input" name='firstname' value={props.data.firstname} onChange={handleChange} /><br />

                <label>Last Name</label><br />
                <input type="text" className="px-2 py-1 mb-3 step_input" name='lastname' value={props.data.lastname} onChange={handleChange} /><br />
                <label>Mobile Number</label><br />
                <input type="number" className="px-2 py-1 mb-3 step_input" name='mobileno' value={props.data.mobileno} onChange={handleChange} /><br />
                <div className="pro_input_container">
                  <label className='mx-3'>Gender : </label>
                  <input type="radio" value={'female'} name='gender' className='radio_detail' onChange={handleChange} />
                  <label htmlFor="Female" className='me-4 ms-1 radio_detail'> Female </label>
                  <input type="radio" value={'male'} name='gender' className='radio_detail' onChange={handleChange} />
                  <label htmlFor="male" className='me-2 ms-1 radio_detail'> Male </label>
                </div>
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};






