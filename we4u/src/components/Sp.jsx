import React from 'react'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { Footer } from './Footer';
import "../css/sp.css"

export const Sp = () => {
  return (
    <>
    <Ser_Pro_Navbar/>
     <section className='ser_home_sec'  style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("images/sphome.jpg")`,backgroundSize:"contain", height:"100vh",width:"auto",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",zIndex:"0"}}>
       <div className="container mx-0 pt-5 mt-5 pl-0">
       <div className="ser_title_cont mt-5  pt-5 ms-lg-5 pl-ld-5">
      <p className='earn_title d-flex align-items-center mt-5 pt-md-5 pt-lg-5 pt-sm-0' >Earn More With Us.</p>
      <p className='grow_title d-flex align-items-center'>Grow Your Business.</p>
      <p className='detail_title d-flex align-items-center text-dark'>Join We4U And Get Partner across India, USA, Singapore And Many More</p>
       </div>
     
      </div>
     </section>
     <div className="parallax mb-0" style={ {
     backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("images/sphome.jpg")`,
      minHeight: "60vh",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      
      <p className='ser_home_card_title'>Join We4U And Make Your Business Wide</p>
    <p className='ser_home_card_title2'>We4U is an app-based marketplace that empowers profssional like you to become your own buasiness</p>
    
   
     <div className="d-flex  flex-wrap justify-content-center">
     <div className="card mx-4 my-5" style={{width:"16rem",background:`url(Images/ser_home_back.jpg)`,backgroundSize:"cover"}} >
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text ser_home_card_content">4000+</p>
      </div>
    </div>
    <div className="card mx-4 my-5" style={{width:"16rem",background:`url(Images/ser_home_back.jpg)`,backgroundSize:"cover"}}>
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text ser_home_card_content">4000+</p>
      </div>
    </div>
    <div className="card mx-4 my-5" style={{width:"16rem",background:`url(Images/ser_home_back.jpg)`,backgroundSize:"cover"}}>
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text ser_home_card_content">4000+</p>
      </div>
    </div>
     </div>
     <Footer/>
    </div>
  
    </>
   
  )
}
