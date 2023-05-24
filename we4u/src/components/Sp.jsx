import React from 'react'
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar'
import { Footer } from './Footer';
import "../css/sp.css"

export const Sp = () => {
  return (
    <>
    <Ser_Pro_Navbar/>
     <section className='ser_home_sec'  style={{background:`url(Images/homeimg9.jpg)`,backgroundSize:"cover",backgroundPosition:"center center"}}>
      <div className="ser_title_cont mx-5">
      <p className='earn_title'>Earn More With Us.</p>
      <p className='grow_title'>Grow Your Business.</p>
      <p className='detail_title'>Join We4U And Get Partner across India, USA, Singapore And Many More</p>
      </div>
     </section>
     <div className="parallax mb-0" style={ {
      /* The image used */
     backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/homeimg2.jpg")`,
  
     /* Set a specific height */
      minHeight: "60vh",

      /* Create the parallax scrolling effect */
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
    <p className='ser_home_card_title'>Join We4U And Make Your Business Wide</p>
    <p className='ser_home_card_title2'>We4U is an app-based marketplace that empowers profssional like you to become your own buasiness</p>
     <div className="d-flex justify-content-center">
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
    </div>
    <Footer/>
    </>
   
  )
}
