// import logo from './logo.svg';
import "./sass/main.css";
// import Contact from "./components/Contact";
import React from 'react'
const  App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catch Some Vibes</h1>
        <nav>
          <ul>
             <a href="./components/LandingPage.js">home</a>

           {/* <li><a href="./components/Contact.js">Contact</a></li>  */}
          {/* <Contact /> */}
           <a href="./components/Contact.js">Contact</a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
