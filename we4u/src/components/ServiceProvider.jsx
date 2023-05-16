import React, { useState } from "react";
import styled from '@emotion/styled'
import "../css/ServiceProvider.css"
import {Navbar} from "./Navbar"
import { CDBStepper, CDBStep, CDBInput, CDBBtn, CDBContainer } from "cdbreact";
import { FormControl, FormGroup, Input, InputLabel, Typography,Select,MenuItem } from '@mui/material'



export const ServiceProvider = () => {
  const [active, setActive] = useState(1);

  const handleNextPrevClick = a => {
    setActive(a);
  };
  return (
    <>
    <Navbar/>
      <CDBStepper direction="horizontal" className="steppp">
        <CDBStep
          id={1}
          icon="pencil-alt"
          name="Basic Information"
          handleClick={() => handleNextPrevClick(1)}
          active={active}
          className="steps_res"
          component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={2}
          icon="info-circle"
          name="Professional Information"
          handleClick={() => handleNextPrevClick(2)}
          active={active}
          className="steps_res2"
          component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={3}
          icon="book-reader"
          name="Selection"
          handleClick={() => handleNextPrevClick(3)}
          active={active}
          className="steps_res3"
          component={<Step3 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={4}
          icon="check"
          name="Finish"
          handleClick={() => handleNextPrevClick(4)}
          active={active}
          className="steps_res4"
          component={<Step4 handleNextPrevClick={handleNextPrevClick} />}
        />
      </CDBStepper>
      </>
  );
};


const Step4 = ({ handleNextPrevClick }) => {
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
              <div className="step_button_container">
              <input type="button" value="Previous" className="step_btn px-3 py-2 my-2 mx-2" onClick={()=>handleNextPrevClick(3)}/>
                {/* <CDBBtn
                  flat
                  outline
                  circle={false}
                  color="secondary"
                  onClick={() => handleNextPrevClick(3)}
                >
                  Previous
                </CDBBtn> */}
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step3 = ({ handleNextPrevClick }) => {
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
            <div className="step_button_container">
            <input type="button" value="Previous" className="step_btn px-3 py-2 my-2 mx-2" onClick={()=>handleNextPrevClick(2)}/>
              <input type="button" value="Next" className="step_btn px-3 py-2 my-2 mx-2" onClick={()=>handleNextPrevClick(4)}/>
                {/* <CDBBtn
                  color="secondary"
                  flat
                  className="float-start"
                  circle={false}
                  outline
                  onClick={() => handleNextPrevClick(2)}
                >
                  Previous
                </CDBBtn>
                <CDBBtn
                  color="secondary"
                  circle={false}
                  flat
                  className="float-end"
                  onClick={() => handleNextPrevClick(4)}
                >
                  Next
                </CDBBtn> */}
              </div>
          </FlexColumnContainer>
        </FlexColumnContainer>
      </div>
    </div>
  </StepContainer>
  );
};

const Step2 = ({ handleNextPrevClick }) => {
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
              <div className="step_button_container">
              <input type="button" value="Previous" className="step_btn px-3 py-2 my-2 mx-2" onClick={()=>handleNextPrevClick(1)}/>
              <input type="button" value="Next" className="step_btn px-3 py-2 my-2 mx-2" onClick={()=>handleNextPrevClick(3)}/>
                {/* <CDBBtn
                  color="secondary"
                  flat
                  className="float-start"
                  circle={false}
                  outline
                  onClick={() => handleNextPrevClick(1)}
                >
                  Previous
                </CDBBtn>
                <CDBBtn
                  color="secondary"
                  circle={false}
                  flat
                  className="float-end"
                  onClick={() => handleNextPrevClick(3)}
                >
                  Next
                </CDBBtn> */}
              </div>
            </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step1 = ({ handleNextPrevClick }) => {
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
              <input type="text" className="px-2 py-1 mb-3 step_input"/><br/>
              <label>Last Name</label><br/>
              <input type="text" className="px-2 py-1 mb-3 step_input"/><br/>
              <label>Email</label><br/>
              <input type="text" className="px-2 py-1 mb-3 step_input"/><br/>
              <label>Mobile Number</label><br/>
              <input type="number" className="px-2 py-1 mb-3 step_input"/><br/>
              <div className="pro_input_container">
                <label className='mx-3'>Gender : </label>
                <input type="radio" value="Female" className='radio_detail'/>
                <label For="Female" className='me-4 ms-1 radio_detail'> Female </label>
                <input type="radio" value="Female" className='radio_detail'/>
                <label For="Female" className='me-2 ms-1 radio_detail'> Male </label>
                </div>
                <div className="step_button_container">
                 <input type="button" value="Next" className="step_btn px-3 py-2 my-2" onClick={()=>handleNextPrevClick(2)}/>
                {/* <CDBBtn
                  color="secondary"
                  flat
                  circle={false}
                  className="float-end"
                  onClick={() => handleNextPrevClick(2)}
                >
                  Next
                </CDBBtn> */}
              </div>
            </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

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
