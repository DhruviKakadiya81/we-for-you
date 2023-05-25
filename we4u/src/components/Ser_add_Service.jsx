import React from 'react'
import styled from '@emotion/styled'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { FormControl, FormGroup, Input, InputLabel, Typography,Select,MenuItem } from '@mui/material'
import "../css/ServiceProvider.css"
import "../css/Ser_add_service.css"
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
  margin-top:150px;
  width: 100%;
  height: 100%;
`;

export const Ser_add_Service = () => {
  return (
    <>
  <Ser_Pro_Navbar/>
  <StepContainer md="12">
      <div className="outer_container">
        <div className="inner_container">
          <FlexColumnContainer>
            <div className="step_heading_container">
              Add Your Sub Service
            </div>
            <FlexColumnContainer width="100%">
              <div className="step_form_container">
                  <FormControl variant="standard" sx={{ minWidth: 260 }} className='mb-4 area_detail_container'>
                    <InputLabel id="demo-simple-select-standard-label" className='sel_ser'>Select Service</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Select City"
                    >
                    <MenuItem>one</MenuItem>
                    <MenuItem>one</MenuItem>
                    <MenuItem>one</MenuItem>
                    </Select>
                   </FormControl><br/>
                <label>Enter Your Sub service</label><br />
                <input type="text" className="step_input px-2 py-1 mb-3" name="Sub_service"/><br />
                <label>Price</label><br />
                <input type="Number" className="step_input px-2 py-1 mb-3" name="Price"/><br />
                <label>Description</label><br />
                <textarea type="number" className="step_input px-2 py-1 mb-3" name="description"/><br />
                <button className='px-4 py-2 mx-5 add_s_s'>Add Sub Service</button>
              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  
    </>
  )
}

