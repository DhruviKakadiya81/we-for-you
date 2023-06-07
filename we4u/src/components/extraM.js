<div class="flip-card">
            <div class="flip-card-inner">
            <div className="flip-card-front text-left " style={{textAlign:"left"}}>
                                                   
            <h2 className='text-center mt-4'>    {sp.shopname}  </h2>
            <p  className= "mt-4 ps-5 "  key={sp.serviceid._id}> Service Provider :: {sp.firstname} {sp.lastname}</p>
                                                        
            {/* <p>{sp.gender}</p> */}
                                                        
            <p className= " ps-5 ">  Address :: {sp.address}  <br /><br />  {sp.cityid ?   <p className= " ">City :: {sp.cityid.cityname} </p> : <br />}</p>
            <p className= " ps-5 "> {sp.areaid ? <p>Area:: {sp.areaid.areaname}</p> : <br />}</p>
                                                       


            <p className= " ps-5 "> Contact Us :: {sp.mobileno} </p>
            <p className= " ps-5 "> Email Id :: {sp.pemail} </p>
            </div>
            <div class="flip-card-back">
            <h1 className='d-flex justify-content-center mb-5'>My Services</h1>
            <p>{sp.subserid.map((key) => (
                <>
                    <div className='text-center'>
                    <p> {key.subname.subname} : {key.prize} Rs</p>
                    </div>
                 </>
            ))}</p>
            </div>
            </div>
</div>