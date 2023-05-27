import React from 'react'
import styled from '@emotion/styled'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { FormControl, FormGroup, Input, InputLabel, Typography,Select,MenuItem } from '@mui/material'
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
  background-image: url(Images/homeimg9.jpg);
  background-size: cover;
  ${'' /* margin-top:150px; */}
  padding-top:150px;
  width: 100%;
  height: 100vh;
`;

export const Ser_add_Service = () => {
  return (
    <>
  <Ser_Pro_Navbar/>
  <StepContainer md="12">
      <div className="s_add_outer_container">
        <div className="s_add_inner_container">
          <FlexColumnContainer>
            <div className="s_add_heading_container">
              Add Your Sub Service
            </div>
            <FlexColumnContainer width="100%">
              <div className="s_add__form_container">
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
                <label style={{color:"white"}}>Enter Your Sub service</label><br />
                <input type="text" className="s_add_input px-2 py-1 mb-3" name="Sub_service"/><br />
                <label style={{color:"white"}}>Price</label><br />
                <input type="Number" className="s_add_input px-2 py-1 mb-3" name="Price"/><br />
                <label style={{color:"white"}}>Description</label><br />
                <textarea type="number" className="s_add_input px-2 py-1 mb-3" name="description"/><br />
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

