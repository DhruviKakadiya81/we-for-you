import React from 'react'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { Footer } from './Footer';
import "../css/sp.css"
import dashboard from '../services/dashboard';
import { useState } from 'react';
import { useEffect } from 'react';

export const Sp = () => {
  const [data, setdata] = useState('');
  const handledata = async () => {
    const response = await dashboard.dashboard();
    setdata(response.data.data);
  }
  useEffect(() => {
    handledata();
  }, [])
  console.log(data);
  return (
    <>
      <Ser_Pro_Navbar />
      <section className='ser_home_sec' style={{ backgroundImage: ``, backgroundSize: "", height: "auto", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container pt-5 mt-4">
          <div className="row d-flex flex-wrap justify-content-lg-evenly">
            <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 seca ser_title_cont mt-5 pt-5 pb-5 mb-5">
              <p className='earn_title' >Earn More With Us.</p>
              <p className='grow_title'>Grow Your Business.</p>
              <p className='detail_title text-dark'>Join We4U And Get Partner across India, USA, Singapore And Many More</p>
            </div>
            <div className="col-lg-6 col-md-4 d-lg-block pb-5 mb-5 homeimgdiv" >
              <img src="images/back2.png" className='sideimg' alt="" />
            </div>
          </div>
        </div>

      </section>

      <div className="text-center d-flex justify-content-center">
        <div className="upperdiv w-75 justify-content-center p-3" >
          <p className='ser_home_card_title'>Join We4U And Make Your Business Wide</p>
          <p className='ser_home_card_title2 text-center'>We4U is an app-based marketplace that empowers profssional like you to become your own buasiness</p>
        </div>
      </div>

      <div className="parallax mb-0 secondsec" style={{
        backgroundImage: `url("images/sphome.jpg")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%"



      }}>

        <section className='section2'>
          <div className="d-flex  flex-wrap justify-content-center pt-5">
            <div className="card mx-4 my-5" style={{ width: "16rem", background: `url(images/ser_home_back.jpg)`, backgroundSize: "cover" }}>
              {/* <img src="..." className="card-img-top" alt="..."/> */}
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text ser_home_card_content">{data.totaluser}+</p>
              </div>
            </div>
            <div className="card mx-4 my-5" style={{ width: "16rem", background: `url(Images/ser_home_back.jpg)`, backgroundSize: "cover" }}>
              {/* <img src="..." className="card-img-top" alt="..."/> */}
              <div className="card-body">
                <h5 className="card-title">Total Provieder</h5>
                <p className="card-text ser_home_card_content">{data.totalsp}+</p>
              </div>
            </div>
            <div className="card mx-4 my-5" style={{ width: "16rem", background: `url(Images/ser_home_back.jpg)`, backgroundSize: "cover" }}>
              {/* <img src="..." className="card-img-top" alt="..."/> */}
              <div className="card-body">
                <h5 className="card-title">Total Services</h5>
                <p className="card-text ser_home_card_content">{data.totalsub}+</p>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </div>

    </>

  )
}
