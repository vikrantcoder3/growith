import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Images/lapwork.svg";
import Common from './Common';




const Home = () => {
   return (
      <>
         <Common name=" Grow Your Business With" 
       imgsrc={web} 
       visit="/Service"
        btname="Get Started"/>
      </>   
   );
};

export default Home;