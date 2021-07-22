import React from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
const Navbar = () => {
    return (
        <div>
        <BrowserRouter>
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
          <Route exact path="/landingPage" component={LandingPage} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/">
         
        </Route>
        </BrowserRouter>

           
        </div>
    )
}

export default Navbar
