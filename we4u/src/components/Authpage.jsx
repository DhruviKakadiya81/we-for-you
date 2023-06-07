import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import getuser from '../services/GetUser'
import { useNavigate } from 'react-router-dom'
import cartser from '../services/cartservics'
import userdata from '../services/UserProfile';
export const Authpage = () => {
  const [userid, setuserid] = useState();
  const [cartdata, setcartdata] = useState([]);
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

      const response2 = await userdata.getdata({ userid: response.data.data._id })
      console.log("userdata2==>", response2);
      setuserid(response2.data.data._id);

    }

  }
  useEffect(() => {
    get_user()
  }, []);
  const handlebookser = async () => {
    const response = await cartser.getcartdata({ userid })
    console.log("response===>", response);
    setcartdata(response.data.data);
  }
  useEffect(() => {
    userid && handlebookser();
  }, [userid])

  console.log(cartdata);

  return (
    <>
      <Navbar />
      <section className='mt-5 pt-5'>
        <div className='text-center pb-5'><b>You Added Services</b> </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {
              (cartdata === undefined) ?
                <div className="row d-flex justify-content-center pt-5">
                  <div className="spinner-border" style={{ position: "absolute", textAlign: "center", top: "80%", left: "50%" }}>
                  </div>

                </div>
                : (cartdata.length === 0) ?
                  <div className="row d-flex justify-content-center pt-5" style={{ height: "80vh", overflowY: "hidden" }}>
                    <span>Not Added Services</span>

                  </div>
                  :
                  <div className="sp">
                    <div className='bg-danger'></div>

                    <div className="row d-flex justify-content-center ">

                      {
                        cartdata.map((sp) => (
                          <>
                            <div className="col-8 p-3 m-3 mt-0" style={{ border: "2px solid grey", borderRadius: "15px" }}>
                              <div className="text-center row  d-flex justify-content-center" key={sp._id}>
                                <div className="col-6"><p>{sp.serviceid.subname.subname}</p>
                                  <p>Prize: <span>{sp.serviceid.prize}</span></p>
                                  <button className='btn' style={{ backgroundColor: "lightgray" }} >Book Service</button>
                                </div>
                                <div className="col-4">
                                  <img className="w-100 h-100" style={{ border: "2px solid lightgrey", height: "200px", backgroundSize: "contain", borderRadius: "15px" }} src={"http://localhost:4000/image/" + sp.serviceid.subname.image} alt="images" />
                                </div>

                              </div>
                            </div>



                          </>


                        ))
                      }
                    </div>

                  </div>
            }

          </div>
        </div>


      </section>

    </>

  )
}