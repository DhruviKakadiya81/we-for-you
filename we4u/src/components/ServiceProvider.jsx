import styled from '@emotion/styled'
import "../css/ServiceProvider.css"
import {Navbar} from "./Navbar"
import { CDBStepper, CDBStep, CDBInput, CDBBtn, CDBContainer } from "cdbreact";
import { FormControl, FormGroup, Input, InputLabel, Typography,Select,MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { data } from 'jquery';

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
// const [firstname,setfirstname]=useState('');

export const ServiceProvider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [step1, setstep1] = useState({
    firstname:'',
    lastname : '',
    mobileno:'',
    gender:'',
  })
 

  const handleChildStateChange = (fieldName, value) => {
    setstep1((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleNext = () => {
    if(activeStep === 0){
      console.log("data:",step1);
      if(step1.firstname === '')
      {
        alert("hello");
        setActiveStep((prevActiveStep) => prevActiveStep);
      }
      else{
        alert("hello2");
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepComponent = () => {
    switch (activeStep) {
      case 0:
        return  <Step1 data ={step1} onChange ={handleChildStateChange}/>;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      default:
        return null;
    }
  };

  return (
    <>
    <Navbar/>
     <div className='mt-5 mx-lg-5 mx-md-0 mx-sm-0 '>
      
      <Stepper activeStep={activeStep} >
        <Step  variant="contained"  color="primary">
          <StepLabel></StepLabel>
        </Step>
        <Step>
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
    
{/* <ol class="flex items-center w-full">
    <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </span>
    </li>
    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </span>
    </li>
    <li class="flex items-center w-full">
        <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
    </li>
</ol> */}

    
    </>
   
  );
};

const Step4 = () => {
  return (
    <StepContainer md="12">
      <div className="outer_container">
        <div
        className="inner_container">
          <FlexColumnContainer>
            <div
            className="step_heading_container">
              Step 4
            </div>
            <FlexColumnContainer width="100%">
              <div style={{ fontSize: '25px', textAlign: 'center' }}>
                Congratulations! You have added Your Details.
                <span style={{ fontSize: '50px', display: 'block' }} role="img" aria-label="image">
                  🎉
                </span>
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step3 = () => {
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
                    <InputLabel id="demo-simple-select-standard-label">Select City</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Select City"
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                   </FormControl><br/>
                   <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className='drop_input my-3'>
                    <InputLabel id="demo-simple-select-standard-label">Select Area</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Select City"
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                   </FormControl><br/>
                   <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className='drop_input my-3'>
                    <InputLabel id="demo-simple-select-standard-label">Select Main Services</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Select City"
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                   </FormControl><br/>
          </div>
           
          </FlexColumnContainer>
        </FlexColumnContainer>
      </div>
    </div>
  </StepContainer>
  );
};

const Step2 = () => {
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
             <label>Shop Name</label><br/>
              <input type="text" className="step_input px-2 py-1 mb-3"/><br/>
              <label>Address</label><br/>
              <textarea type="text" className="step_input px-2 py-1 mb-3"/><br/>
              <label>Professional Email</label><br/>
              <input type="text" className="step_input px-2 py-1 mb-3"/><br/>
              <label>Deascription</label><br/>
              <textarea type="number" className="step_input px-2 py-1 mb-3"/><br/>
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
              <label>First Name</label><br/>
              <input type="text" className="px-2 py-1 mb-3 step_input" name='firstname' value={props.data.firstname}  onChange={handleChange}/><br/>
             
              <label>Last Name</label><br/>
              <input type="text" className="px-2 py-1 mb-3 step_input" name = 'lastname' value ={props.data.lastname} onChange={handleChange}/><br/>
              <label>Mobile Number</label><br/>
              <input type="number" className="px-2 py-1 mb-3 step_input" name ='mobileno' value ={props.data.mobileno} onChange={handleChange}/><br/>
              <div className="pro_input_container">
                <label className='mx-3'>Gender : </label>
                <input type="radio" value={'female'} name='gender' className='radio_detail'onChange={handleChange}/>
                <label For="Female" className='me-4 ms-1 radio_detail'> Female </label>
                <input type="radio" value={'male'} name='gender' className='radio_detail' onChange={handleChange}/>
                <label For="male" className='me-2 ms-1 radio_detail'> Male </label>
                </div>
            </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};





