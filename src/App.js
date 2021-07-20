
import "./sass/main.css";

import React from 'react'
import{ Link, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";


const  App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">

        <h1>Catch Some Vibes</h1>
        <nav>
          <ul>
     
            <li><Link to={"/landingPage"}>home</Link>
          </li> 
          <li><Link to={"/contact"}>Contact</Link>
          </li>
         
           
          </ul>
        </nav>
      </header>
        <Route exact path='/contact' component={Contact} />
      
    </div>
    </BrowserRouter>

  );
}

export default App;
