import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import getuser from '../services/GetUser'
import { useNavigate } from 'react-router-dom'
export const Authpage = () => {
  const [userid, setuserid] = useState();
  const navigate = useNavigate();
  const get_user = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("you have to first login");
      navigate("/login");
    }
    else {
      const data = { id: token }
      console.log(data);
      const response = await getuser.sendauth(data);
      console.log("response===>", response.data.data._id);
      setuserid(response.data.data._id);
    }

  }
  useEffect(() => {
    get_user()
  }, []);

  useEffect(() => {

  }, [userid])



  return (
    <>
      <Navbar />
      <section className='mt-5 pt-5'>
        <div>You Added Services</div>

      </section>

    </>

  )
}