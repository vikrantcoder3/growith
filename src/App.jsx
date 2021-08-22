import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

import { Switch , Route , Redirect } from 'react-router';




const App = () => {
   return (
      <>
         <Navbar />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
      
          <Redirect to ="/" />
         </Switch>
      </>   
   );
};

export default App;