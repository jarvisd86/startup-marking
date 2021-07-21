
import "./sass/main.css";

import React from 'react';
import{ Link, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";


const  App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">

        
        <nav>
          <ul>
     
            <li><Link to={"/landingPage"}>landing</Link>
          </li> 
          <li><Link to={"/contact"}>Contact</Link>
          </li>
        
          </ul>
         
        </nav>
      </header>
        <Route exact path='/landingPage' component={LandingPage} />
        <Route exact path='/contact' component={Contact} />
      
    </div>
    </BrowserRouter>

  );
}

export default App;
