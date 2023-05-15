import React from 'react'
import '../css/sp.css';
import $ from 'jquery';
import { Ser_Pro_Navbar } from './Ser_Pro_Navbar';
import { FormControl, FormGroup, Input, InputLabel, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useState } from 'react';


export const ServiceProvider = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [gender, setgender] = useState('');

  

  $(document).ready(function () {
    var currentGfgStep, nextGfgStep, previousGfgStep;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;



    $(".next-step").click(function () {

      currentGfgStep = $(this).parent();
      nextGfgStep = $(this).parent().next();

      console.log("currentGfgStep===>", currentGfgStep);

      if(firstname === '') {
        console.log("first===>"+firstname);
        currentGfgStep.show();
           $("#progressbar li").eq($("fieldset")
            .index(nextGfgStep)).removeClass("active");
        currentGfgStep.animate({ opacity: 1 }, {
          step: function () {
            opacity = 0;

            currentGfgStep.css({
              'display': 'block',
              'position': 'relative'
            });
           nextGfgStep.css({ 'opacity': opacity });
        
          },
         
        });
      }
      else {
        if(firstname !== '') {
          console.log("first2===>"+firstname);
          // alert("hello");
          $("#progressbar li").eq($("fieldset")
            .index(nextGfgStep)).addClass("active");
          nextGfgStep.show();
  
          currentGfgStep.animate({ opacity: 0 }, {
            step: function (now) {
              opacity = 1 - now;
  
              currentGfgStep.css({
                'display': 'none',
                'position': 'relative'
              });
              nextGfgStep.css({ 'opacity': opacity });
            },
           
          });
        }
       
      }




    });

    $(".previous-step").click(function () {

      currentGfgStep = $(this).parent();
      previousGfgStep = $(this).parent().prev();

      $("#progressbar li").eq($("fieldset")
        .index(currentGfgStep)).removeClass("active");

      previousGfgStep.show();

      currentGfgStep.animate({ opacity: 0 }, {
        step: function (now) {
          opacity = 1 - now;

          currentGfgStep.css({
            'display': 'none',
            'position': 'relative'
          });
          previousGfgStep.css({ 'opacity': opacity });
        },
       
      });

    });



  });

  const handleValidation = () => {
    alert("firstname==>"+firstname);
    // alert("hello",firstname);

  }

  return (
    <>
      <Ser_Pro_Navbar />
      <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 
                col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div class="px-0 pt-4 pb-0 mt-3 mb-3">
            <form id="form">
              <ul id="progressbar">
                <li class="active" id="step1">
                  <strong>Step 1</strong>
                </li>
                <li id="step2"><strong>Step 2</strong></li>
                <li id="step3"><strong>Step 3</strong></li>
                <li id="step4"><strong>Step 4</strong></li>
              </ul>

              <fieldset>
                <h2>Give your Personal Information</h2>
                <div className="profile_form_container">
                  <form action="">

                    <div className="pro_input_container">
                      <FormControl className='mb-3 '>
                        <InputLabel className='mx-3 '  >Enter First Name</InputLabel>
                        <Input type="text" name="firstname" className='' style={{ width: "100%" }} onChange={(event) => { setfirstname(event.target.value) }} />
                      </FormControl><br />
                    </div>
                    <div className="pro_input_container">
                      <FormControl className='mb-3 '>
                        <InputLabel className='mx-3' >Enter Second Name</InputLabel>
                        <Input type="text" name="name" className='my-3' onChange={(event) => { setlastname(event.target.value) }} />
                      </FormControl><br />
                    </div>
                    <div className="pro_input_container">
                      <FormControl className='mb-3 '>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"

                        >
                          <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(event) => { setgender(event.target.value) }} />
                          <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(event) => { setgender(event.target.value) }} />
                          <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(event) => { setgender(event.target.value) }} />
                        </RadioGroup>
                      </FormControl><br />
                    </div>

                  </form>
                </div>
                <input type="button" name="next-step"
                  class="next-step" value="Next Step" onClick={handleValidation} />
              </fieldset>
              <fieldset>
                <h2>Welcome To GFG Step 2</h2>
                <input type="button" name="next-step"
                  class="next-step" value="Next Step" />
                <input type="button" name="previous-step"
                  class="previous-step"
                  value="Previous Step" />
              </fieldset>
              <fieldset>
                <h2>Welcome To GFG Step 3</h2>
                <input type="button" name="next-step"
                  class="next-step" value="Final Step" />
                <input type="button" name="previous-step"
                  class="previous-step"
                  value="Previous Step" />
              </fieldset>
              <fieldset>
                <div class="finish">
                  <h2 class="text text-center">
                    <strong>FINISHED</strong>
                  </h2>
                </div>
                <input type="button" name="previous-step"
                  class="previous-step"
                  value="Previous Step" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>

    </>

  )
}
