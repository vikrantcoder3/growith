import React, { useState } from 'react';


const Contact = () => {

 const [data, setData]=  useState({
    fullname:" ",
    mobile :" ",
    email:" ",
    msg:" ",
 });

 const inputEvent =(event)=>{
    const {name, value} = event.target;

    setData((preVal) =>{
      return{    
       ...preVal,
       [name]:value,
    };
   });
 };

const formSubmit =(e) =>{
   e.preventDefault();  
};

   return (
      <>
         <div className="my-5">
            <h1 className="text-center"> Contact us</h1>
         </div>
         <div className="Container contact_div">
            <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
                 
                  <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">Full Name</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" 
               name="Fullname"
               value={data.fullname}
               onChange={inputEvent}
               placeholder="Enter Your Name"/>
              </div>
              <div class="mb-3">
                 <label for="exampleFormControlInput2" class="form-label">Mobile Number</label>
               <input type="number" class="form-control" id="exampleFormControlInput2" 
                name="Mobile Number"
                value={data.mobile}
                onChange={InputEvent}
               placeholder="Enter Your Mobile Number"/>
              </div>
              <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">Email id</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" 
               name="Email id"
               value={data.email}
               onChange={inputEvent}

               placeholder="Enter Your Email id"/>
              </div>
              <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label">Message</label>
           <textarea class="form-control" id="exampleFormControlTextarea1" 
           rows="3"
               name="Message"
               value={data.msg}
               onChange={inputEvent}>
           </textarea>
          </div>
          <div class="col-12">
          <button class="btn btn-outline-primary" type="submit">Submit</button>
          </div>
                  </form>

               </div>

            </div>

         </div>
       
      </>   
   );
};

export default Contact;