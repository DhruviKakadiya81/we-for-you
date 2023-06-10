import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { FormControl, FormGroup, Input, InputLabel, Typography, Select, MenuItem } from '@mui/material'
import "../css/Ser_add_service.css"
import service from '../services/Services'
import { useState } from 'react'
import subser from '../services/Subservice'
import { useFormik } from "formik"
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate();
  const [getser, setgetser] = useState([]);
  const [getsubser, setgetsubser] = useState([])
  const [serviceid, setserviceid] = useState('');
  const [spid, setspid] = useState('');
  const [subname, setsubname] = useState('');
  const [prize, setprize] = useState();
  const [discription, setdiscription] = useState('');
  const [image, setimage] = useState('');
  const errors = {};
  const handleservice = async () => {
    try {
      const response = await service.getservice();
      setgetser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlesubservice = async () => {
    try {
      const response = await subser.getsubserbymain({ serviceid });
      setgetsubser(response.data.data);
      console.log(response);
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
    const data = { subname, prize, discription, spid, serviceid }
    console.log("data ==>", data);
    const response = await subser.addsubser(data);
    console.log(response);
    if (response.data.success === true) {
      alert("your service added successfully");
      navigate("/yourser");
    }
    else {
      alert("some problems are there add service again");
    }
  }


  useEffect(() => {
    getspclient();
    handleservice();
  }, []);
  useEffect(() => {
    serviceid && handlesubservice();
  }, [serviceid]);
  console.log(serviceid);

  const validate = values => {

    if (!values.serviceid) {
      errors.serviceid = 'Required';
    }

    if (!values.subserviceid) {
      errors.subserviceid = 'Required';
    }

    if (!values.Price) {
      errors.Price = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      serviceid,
      subname,
      prize
    },
    validate,
    validateOnChange: true,
  });


  return (
    <>
      <Ser_Pro_Navbar />
      <StepContainer md="12">
        <div className="s_add_outer_container">
          <div className="s_add_inner_container">
            <FlexColumnContainer>
              <div className="s_add_heading_container">
                Add Your Sub Service
              </div>
              <FlexColumnContainer width="100%">
                <form className="s_add__form_container">
                  <FormControl variant="standard" sx={{ minWidth: 260 }} className='mb-4 area_detail_container'>
                    <InputLabel id="demo-simple-select-standard-label" className='sel_ser'>Select Main Service</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Select service"
                      name="serviceid"

                      style={{ backgroundColor: "transparent", color: "white" }}
                      onChange={(event) => {
                        formik.handleChange(event);
                        setserviceid(event.target.value);
                      }}
                      onBlur={formik.handleBlur}
                    >
                      {getser ? getser.map(ser => (
                        <MenuItem value={ser._id}>{ser.s_name}</MenuItem>
                      )) :
                        <MenuItem>Select Main service</MenuItem>}
                    </Select>
                    {formik.touched.serviceid && formik.errors.serviceid && (
                      <div className='formik_error'>{formik.errors.serviceid}</div>
                    )}
                  </FormControl><br />
                  <FormControl variant="standard" sx={{ minWidth: 260 }} className='mb-4 area_detail_container'>
                    <InputLabel id="demo-simple-select-standard-label" className='sel_ser'>Select Sub Service</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Select service"
                      name="subserviceid"
                      style={{ backgroundColor: "transparent", color: "white" }}
                      onChange={(event) => {
                        formik.handleChange(event);
                        setsubname(event.target.value);
                      }}
                      onBlur={formik.handleBlur}
                    >
                      {getsubser ? getsubser.map(ser => (
                        <MenuItem value={ser._id}>{ser.subname}</MenuItem>
                      )) :
                        <MenuItem>Loading...</MenuItem>}
                    </Select>
                    {formik.touched.subserviceid && formik.errors.subserviceid && (
                      <div className='formik_error'>{formik.errors.subserviceid}</div>
                    )}
                  </FormControl><br />
                  <label style={{ color: "white" }}>Price</label><br />
                  <input type="Number" className="s_add_input px-2 py-1 mb-3" name="Price" onChange={(event) => {
                    formik.handleChange(event);
                    setprize(event.target.value);
                  }}
                    onBlur={formik.handleBlur} /><br />
                  {formik.touched.Price && formik.errors.Price && (
                    <div className='formik_error'>{formik.errors.Price}</div>
                  )}
                  <label style={{ color: "white" }}>Description</label><br />
                  <textarea type="number" className="s_add_input px-2 py-1 mb-3" name="description" onChange={(event) => { setdiscription(event.target.value) }} /><br />
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
