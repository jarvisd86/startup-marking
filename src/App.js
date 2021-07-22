import React from "react";
import { Link,  BrowserRouter } from "react-router-dom";
import "./sass/main.css"
import './components/Header';
import Img0 from "./marketing/image.jpg";
import Img1 from "./marketing/image2.jpg";
import Img2 from "./marketing/image3.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
         
         
          <h2>Catch Some Vibes</h2>
        </header>

        <h1> marketing services </h1>
<div className='text-wrap'>
        <div className="items">
        
       <div  className='wrapper'>
           <Link to={"/landingPage"} className='text'>landing  <img src={Img0} alt="#" /></Link>
           <p className='text2'>some text</p>
          </div>
        </div>
         
        </div>
        

        <div className="items">
        <div className='text-wrap'>
       
        </div>
          <div className='wrapper'>
            <Link to={"/contact"} className='text'>Contact<img src={Img1} alt="#" /></Link>
             <p className='text2'>some text</p>
          </div>
        </div>

        <div className="items">
        <div className='text-wrap'>
       
        </div>
        <div className='wrapper'>
        <Link to={"/"} className='text'>products <img src={Img2} alt="#" /></Link>
        <p className='text2'>some text</p>
        </div>
        
        
         
            
          
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
