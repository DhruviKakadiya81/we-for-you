import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { FormControl, FormGroup, Input, InputLabel, Typography, Select, MenuItem } from '@mui/material'
import "../css/ServiceProvider.css"
import "../css/Ser_add_service.css"
import service from '../services/Services'
import { useState } from 'react'
import subser from '../services/Subservice'

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
  const [getser, setgetser] = useState('');
  const [serviceid, setserviceid] = useState('');
  const [spid, setspid] = useState('');
  const [subname, setsubname] = useState('');
  const [prize, setprize] = useState();
  const [discription, setdiscription] = useState('');
  const [image, setimage] = useState('');

  const handleservice = async () => {
    try {
      const response = await service.getservice();
      setgetser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }


  const getspclient = async () => {
    try {
      const id = localStorage.getItem("sptoken");
      const response = await service.getspid({ id });
      setspid(response.data.data._id);
    } catch (error) {
      console.log(error);
    }
  }


  const handleadd = async (event) => {
    event.preventDefault();
    const data = { subname, image, prize, discription, spid, serviceid }
    console.log("data ==>", data);
    const response = await subser.addsubser(data);
    console.log(response);
  }


  useEffect(() => {
    getspclient();
    handleservice();
  }, [])

  return (
    <>
      <Ser_Pro_Navbar />
      <StepContainer md="12">
        <div className="outer_container">
          <div className="inner_container">
            <FlexColumnContainer>
              <div className="step_heading_container">
                Add Your Sub Service
              </div>
              <FlexColumnContainer width="100%">
                <form className="step_form_container">
                  <FormControl variant="standard" sx={{ minWidth: 260 }} className='mb-4 area_detail_container'>
                    <InputLabel id="demo-simple-select-standard-label" className='sel_ser'>Select Service</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Select service"
                      name="serviceid"
                      onChange={(event) => { setserviceid(event.target.value); alert(serviceid) }}
                    >
                      {getser ? getser.map(ser => (
                        <MenuItem value={ser._id}>{ser.s_name}</MenuItem>
                      )) :
                        <MenuItem>Loading...</MenuItem>}
                    </Select>
                  </FormControl><br />
                  <label>Enter Your Sub service</label><br />
                  <input type="text" className="step_input px-2 py-1 mb-3" name="Sub_service" onChange={(event) => { setsubname(event.target.value) }} /><br />
                  <label>Price</label><br />
                  <input type="Number" className="step_input px-2 py-1 mb-3" name="Price" onChange={(event) => { setprize(event.target.value) }} /><br />
                  <label>Price</label><br />
                  <input type="file" className="step_input px-2 py-1 mb-3" name="image" onChange={(event) => { setimage(event.target.files[0]) }} /><br />
                  <label>Description</label><br />
                  <textarea type="number" className="step_input px-2 py-1 mb-3" name="description" onChange={(event) => { setdiscription(event.target.value) }} /><br />
                  <button className='px-4 py-2 mx-5 add_s_s' onClick={handleadd}>Add Sub Service</button>
                </form>
              </FlexColumnContainer>
            </FlexColumnContainer>
          </div>
        </div>
      </StepContainer>

    </>
  )
}

