import "./sass/main.css";

import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";

import Img0 from "./marketing/image.jpg";
import Img1 from "./marketing/image2.jpg";
import Img2 from "./marketing/image3.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to={"/landingPage"}>landing</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>

              </li>
              <li>
                <Link to={"/"}>products</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path="/landingPage" component={LandingPage} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/">
         
        </Route>

        <h1> marketing services </h1>

          <div className="items">
            <img src={Img0} alt="#" />
          </div>
          <div className="items">
            <img src={Img1} alt="#" />
          </div>
          <div className="items">
            <img src={Img2} alt="#" />
          </div>
          <h2>Catch Some Vibes</h2>
      </div>
    </BrowserRouter>
  );
};

export default App;
