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
          component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={2}
          icon="info-circle"
          name="Personal Data"
          handleClick={() => handleNextPrevClick(2)}
          active={active}
          component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={3}
          icon="book-reader"
          name="Terms and Conditions"
          handleClick={() => handleNextPrevClick(3)}
          active={active}
          component={<Step3 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={4}
          icon="check"
          name="Finish"
          handleClick={() => handleNextPrevClick(4)}
          active={active}
          component={<Step4 handleNextPrevClick={handleNextPrevClick} />}
        />
      </CDBStepper>
      </>
  );
};


const Step4 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer md="12">
      <div style={{ width: '100%', background: '#f9f9f9', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
            background: '#f5f5f5',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Step 4
            </div>
            <FlexColumnContainer width="100%">
              <div style={{ fontSize: '25px', textAlign: 'center' }}>
                Congratulations! You have added Your Details.
                <span style={{ fontSize: '50px', display: 'block' }} role="img" aria-label="image">
                  🎉
                </span>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
                  flat
                  outline
                  circle={false}
                  color="secondary"
                  onClick={() => handleNextPrevClick(3)}
                >
                  Previous
                </CDBBtn>
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
    <div style={{ width: '100%', background: '#f9f9f9', padding: '30px 10px', height: '100%' }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '500px',
          borderRadius: '10px',
          background: '#f5f5f5',
          boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
        }}
      >
        <FlexColumnContainer>
          <div
            style={{
              textAlign: 'center',
              padding: '20px 0 10px 0',
              color: 'rgb(50,50,50)',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            Step 3
          </div>
          <FlexColumnContainer width="100%">
                 <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className=''>
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
                   <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className=''>
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
                   <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} className=''>
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

                   <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
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
                </CDBBtn>
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
      <div style={{ width: '100%', background: '#f9f9f9', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
            background: '#f5f5f5',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Step 2
            </div>
            <FlexColumnContainer width="100%">
            <label>Shop Name</label>
              <input type="text" className="px-3 py-1 mb-3"/>
              <label>Address</label>
              <textarea type="text" className="px-3 py-1 mb-3"/>
              <label>Professional Email</label>
              <input type="text" className="px-3 py-1 mb-3"/>
              <label>Deascription</label>
              <textarea type="number" className="px-3 py-1 mb-3"/>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
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
                </CDBBtn>
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
      <div style={{ width: '100%', background: '#f9f9f9', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
            background: '#f5f5f5',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: 'rgb(50,50,50)',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Step 1
            </div>
            <FlexColumnContainer width="100%">
              <label>First Name</label>
              <input type="text" className="px-3 py-1 mb-3"/>
              <label>Last Name</label>
              <input type="text" className="px-3 py-1 mb-3"/>
              <label>Email</label>
              <input type="text" className="px-3 py-1 mb-3"/>
              <label>Mobile Number</label>
              <input type="number" className="px-3 py-1 mb-3"/>
              <div className="pro_input_container">
                <label className='lbl_gender mx-3'>Gender : </label>
                <input type="radio" value="Female" className='radio_detail'/>
                <label For="Female" className='me-4 ms-1 radio_detail'> Female </label>
                <input type="radio" value="Female" className='radio_detail'/>
                <label For="Female" className='me-2 ms-1 radio_detail'> Male </label>
                </div>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
                  color="secondary"
                  flat
                  circle={false}
                  className="float-end"
                  onClick={() => handleNextPrevClick(2)}
                >
                  Next
                </CDBBtn>
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
