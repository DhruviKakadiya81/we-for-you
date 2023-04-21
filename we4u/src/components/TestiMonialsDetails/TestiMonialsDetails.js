import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className='d-flex justify-content-center flex-wrap'>
        <div className="row">
<div class="item col" style={{width:"400px"}} >
            <div class="shadow-effect">
                <img class="img-circle" src={img} />
                <p>{description}</p>
            </div>
            <div class="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
            </div>
        </div>
        </div>
        
    );
};

export default TestiMonialsDetails;