import React from 'react'
import { Link } from 'react-router-dom';
// import Contact from "./components/Contact";
// import LandingPage from "./components/LandingPage";
const Navbar = () => {
    return (
        <div>
  
        <nav>
            <ul>
              <li>
                <Link to={"/startup-marking"}>landing</Link>
              </li>
              <li>
                <Link to={"/startup-marking/contact"}>Contact</Link>

              </li>
              <li>
                <Link to={"/"}>products</Link>
              </li>
            </ul>
          </nav>
       
     

           
        </div>
    )
}

export default Navbar
