import React from "react";
import { useState } from "react";
import apiServices from "../services/RegisterData";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [message, setmessage] = useState("");
  const [eye, seteye] = useState("fa-sharp fa-solid fa-eye-slash");
  const [state, setstate] = useState(props.state);
  const handleRegister = async (event) => {
    event.preventDefault();
    const firmObj = { email, password , state};
    console.log("object----" + password);
    alert(firmObj.state);
    // regData.append('email', email);
    // regData.append('password', password);
    //  console.log(regData.get('email'));
    const respo = await apiServices.create(firmObj);
    if (respo.data.success === true) {
      setmessage(respo.data.msg);
      localStorage.setItem("token", respo.data.token);
      alert(localStorage.getItem("token"));
      // alert(respo.data.token);
    } else {
      setmessage(respo.data.msg);
    }
    event.target.reset();
  };

  const handletogglepass = async (event) => {
    //event.preventDefault();
    var x = document.getElementById("id_password");
    if (x.type === "password") {
      x.type = "text";
      seteye("fa-solid fa-eye");
    } else {
      x.type = "password";
      seteye("fa-sharp fa-solid fa-eye-slash");
    }
  };
if(props.state === 1){
 
   return (
    <>

<section className="d-flex flex-wrap" id="header">
        <div className="container-fluid pt-5 pb-5" style= {{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",marginTop:"100px",width:"50rem",overflowX:"hidden" }} >
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
              <div className="col-md-6 pt-5 mx-auto pt-lg-0 order-1 order-lg-2 header-image" >
                <img src="Images/register1.png" width={270} height={300} className="login-image" alt=""/>
              </div>
              <div className="col-md-6 pt-5 m-2 mx-auto p-5 pt-lg-0 order-2 order-lg-1" style={{marginLeft:"-10px"}}>
                <form action="" method="post" onSubmit={handleRegister}>

                  <h2 style={{ fontWeight: "700" }}>SIGN UP</h2>
                  <i class="fa-solid fa-envelope fa-flip fa-xs" style={{marginRight:"-18px",position:"relative",left:"-30px",bottom:"0px" , color:"gray"}}></i>

                  <input
           className="my-4 pt-3"
          type="text"
          placeholder="Enter Your Email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width:"100%"}}
          required
        />
                  {/* <i class="fa-solid fa-envelope" style={{marginLeft:"-240px"}}></i> */}


        
        <br />
        <i class="fa-solid fa-lock fa-flip fa-xs" style={{marginRight:"-18px",position:"relative",left:"-30px",bottom:"0px" , color:"gray"}}></i>

        <input
          type="password"
          name="password"
          placeholder="Enter the password"
          onChange={(event) => setPass(event.target.value)}
          id="id_password"
          className="my-0 pt-3"

          style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width:"100%"  }}
          required
        />
                  {/* <i class="fa-solid fa-envelope fa-flip" style={{marginLeft:"-240px"}}></i> */}
        {/* <i class="fa-duotone fa-lock fa-flip" style={{marginLeft:"-240px"}}></i> */}
        <i
          className={eye}
          id="togglePassword"
          // style={{ marginRight: "-13px",position:"relative",top:"-5px", cursor: "pointer" }}
          style={{ marginLeft: "-25px", cursor: "pointer" , position:"relative"}}

          onClick={handletogglepass}
        ></i>

        <br />
        <button type="submit" className="p-2 my-4" value="register" style={{fontSize:"20px", borderRadius: "10px", backgroundColor: "rgb(212, 174, 126)", border: "none", width: "110px" }}>
          register
        </button>
        <p><a href="/login" style={{textDecoration:"none"}}>Already Have An Account??</a></p>
        <span>{message}</span>
      </form>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>Register Form</div> */}
      {/* <form action="" method="post" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="ENTER the Password"
          onChange={(event) => setPass(event.target.value)}
          id="id_password"
        />
        <i
          className={eye}
          id="togglePassword"
          style={{ marginLeft: "-25px", cursor: "pointer" }}
          onClick={handletogglepass}
        ></i>

        <br />
        <button type="submit" value="register">
          register
        </button>
        <p><strong>have you account?</strong><a href="/login">Login here</a></p>
        <span>{message}</span>
      </form> */}
    </>
  );
};
if(props.state === 0){
 
   return (
    <>

<section className="d-flex flex-wrap" id="header">
        <div className="container-fluid pt-5 pb-5" style= {{ backgroundColor: "white", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",marginTop:"100px",width:"50rem",overflowX:"hidden" }} >
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
              <div className="col-md-6 pt-5 mx-auto pt-lg-0 order-1 order-lg-2 header-image" >
                <img src="Images/register1.png" width={270} height={300} className="login-image" alt=""/>
              </div>
              <div className="col-md-6 pt-5 m-2 mx-auto p-5 pt-lg-0 order-2 order-lg-1" style={{marginLeft:"-10px"}}>
                <form action="" method="post" onSubmit={handleRegister}>

                  <h2 style={{fontWeight: "700" }}>SIGN UP</h2>
                  <i class="fa-solid fa-envelope fa-flip fa-xs" style={{marginRight:"-18px",position:"relative",left:"-30px",bottom:"0px" , color:"gray"}}></i>

                  <input
           className="my-4 pt-3"
          type="text"
          placeholder="Enter Your Email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width:"100%"}}
          required
        />
                  {/* <i class="fa-solid fa-envelope" style={{marginLeft:"-240px"}}></i> */}


        
        <br />
        <i class="fa-solid fa-lock fa-flip fa-xs" style={{marginRight:"-18px",position:"relative",left:"-30px",bottom:"0px" , color:"gray"}}></i>

        <input
          type="password"
          name="password"
          placeholder="Enter the password"
          onChange={(event) => setPass(event.target.value)}
          id="id_password"
          className="my-0 pt-3"

          style={{ borderBottom: "1px solid black", outline: "none", borderTopStyle: "hidden", borderLeftStyle: "none", borderRightStyle: "none", width:"100%"  }}
          required
        />
                  {/* <i class="fa-solid fa-envelope fa-flip" style={{marginLeft:"-240px"}}></i> */}
        {/* <i class="fa-duotone fa-lock fa-flip" style={{marginLeft:"-240px"}}></i> */}
        <i
          className={eye}
          id="togglePassword"
          // style={{ marginRight: "-13px",position:"relative",top:"-5px", cursor: "pointer" }}
          style={{ marginLeft: "-25px", cursor: "pointer" , position:"relative"}}

          onClick={handletogglepass}
        ></i>

        <br />
        <button type="submit" className="p-2 my-4" value="register" style={{fontSize:"20px", borderRadius: "10px", backgroundColor: "rgb(212, 174, 126)", border: "none", width: "110px" }}>
          register
        </button>
        <p><a href="/login" style={{textDecoration:"none"}}>Already Have An Account??</a></p>
        <span>{message}</span>
      </form>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>Register Form</div> */}
      {/* <form action="" method="post" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="ENTER the Password"
          onChange={(event) => setPass(event.target.value)}
          id="id_password"
        />
        <i
          className={eye}
          id="togglePassword"
          style={{ marginLeft: "-25px", cursor: "pointer" }}
          onClick={handletogglepass}
        ></i>

        <br />
        <button type="submit" value="register">
          register
        </button>
        <p><strong>have you account?</strong><a href="/login">Login here</a></p>
        <span>{message}</span>
      </form> */}
    </>
  );
};
}
 