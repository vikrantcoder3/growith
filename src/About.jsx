import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Images/Aboutpic.png";
import Common from './Common';




const About = () => {
   return (
      <>
         <Common 
         name=""
         imgsrc={web}
         visit="/Contact"
         btname="Contact Now"
        /> 
      </>   
   );
};

export default About;