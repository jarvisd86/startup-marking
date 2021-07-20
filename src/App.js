
import "./sass/main.css";

import React from 'react'
import{ Link } from "react-router-dom";


const  App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catch Some Vibes</h1>
        <nav>
          <ul>
     
            <li><Link to={"./LandingPage.js"}>home</Link>
          </li> 
          <li><Link to={"./Contact.js"}>Contact</Link>
          </li>
         
           
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
