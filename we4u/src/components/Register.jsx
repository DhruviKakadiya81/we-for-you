import React from 'react'
import { useState } from 'react';
import apiServices from '../services/RegisterData';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [message, setmessage] = useState('');
    
    const handleRegister = async(event)=>{
        event.preventDefault();
      
        // const regData = new FormData();
        const firmObj={email,password};
        
    
        // regData.append('email', email);
     
        // regData.append('password', password);
        //  console.log(regData.get('email'));
       
       const respo = await apiServices.create(firmObj);
       if(respo.data.success === true){
        alert("hello");
       }
       else{
        alert("not added");
       }
      // console.log("hello")
      //  console.log(respo);
     
      //  if(respo.data.success === true){
      //   alert("hello");
      //   setmessage = respo.data.msg;
      //   console.log(respo.data.msg);
      //  }
      //  else{
      //   alert("hello");
      //   setmessage = respo.data.msg;
      //   console.log(respo.data.msg);

      //  }
       
       event.target.reset();
        
    }

  return (
    <>
      <div>Register Form</div>
      <form action="" method="post" onSubmit={handleRegister}>
        <input type="text" placeholder='enter your email' name='email' onChange={event=>setEmail(event.target.value)}/><br/>
        <input type="password" placeholder='enter your password' name='password' onChange={event=>setPass(event.target.value)}/><br/>
        <span>operation_message  {message}</span>
        <button type="submit" value="register">register</button>

      </form>
    </>
  
  )
}


// import React from 'react'
// import { useContext } from 'react';
// import ProductContex from '../context/products/productContex';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import adddata from '../services/adddata';
// export default function () {
//   const a = useContext(ProductContex);
//   useEffect(() => {
//     console.log('test---');
//     // a.update();
//   }, []);

//   let curdate = new Date();
//   curdate = curdate.getHours();
//   let greet = "";
//   const cssStyle = {};

//   if (curdate >= 1 && curdate < 12) {
//     greet = "good morning";
//     cssStyle.color = 'yellow';
//   }
//   else if (curdate >= 12 && curdate < 19) {
//     greet = "good afternoon";
//     cssStyle.color = 'orange';
//   }
//   else {
//     greet = "good night";
//     cssStyle.color = 'black';
//   }
//   const [pname, setpname] = useState('');
//   const [prize, setprize] = useState('');
//   const [qty, setqty] = useState('');
//   const [desc, setdesc] = useState('');
//   const [image, setimage] = useState('');
//   const [mes, setmes] = useState('hello');


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('pname', pname);
//     formData.append('prize', prize);
//     formData.append('qty', qty);
//     formData.append('desc', desc);
//     formData.append('image', image);

//     const respo = await adddata.create(formData);
//     if (respo.data.success === true) {
//       setmes("success");
//       navigate("/about");
//     }
//     else {
//       setmes("failed");
//     }
//     setTimeout(function () {
//       setmes('');
//     }, 2000);
//     console.log(respo);
//     event.target.reset();

//   }
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className='container'>
//         <h1>hello sir ,<span style={cssStyle}>{greet}</span></h1>
//       </div>
//       <div className="container">
//         <h1 className='mx-auto'>ADD PRODUCT</h1>
//         <form action="" method="post" onSubmit={handleSubmit} >
//           <div className="d-flex flex-column mb-3">
//             <div className="p-2 mx-auto"> <input
//               className='p-2'
//               type="text" placeholder="product name" name="pname" onChange={event => setpname(event.target.value)} style={{ "width": "500px" }} /></div>
//             <div className="p-2 mx-auto"> <input
//               className='p-2'
//               type="number" placeholder="product prize" name="prize" onChange={event => setprize(event.target.value)}
//               style={{ "width": "500px" }} /></div>
//             <div className="p-2 mx-auto"> <input
//               className='p-2'
//               type="number" placeholder="product qauntity" name="qty" onChange={event => setqty(event.target.value)} style={{ "width": "500px" }} /></div>
//             <div className="p-2 mx-auto">  <input
//               className='p-2'
//               type="text" placeholder="product description" name="desc" onChange={event => setdesc(event.target.value)} style={{ "width": "500px" }} /></div>
//             <div className="p-2 mx-auto">  <input
//               className='p-2'
//               type="file" placeholder="product image" name="image" onChange={event => setimage(event.target.files[0])} style={{ "width": "500px" }} /></div>
//             <button type='submit' className='justify-content-center' style={{
//               "width": "200px",
//               "margin": "auto",
//               "padding": "10px"
//             }} >send data</button>
//           </div>
//           <p>
//             {mes}
//           </p>





//         </form>
//       </div>
//     </>
//   )
// }
