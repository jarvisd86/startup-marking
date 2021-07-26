import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/main.css";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import Header from "./components/Header";

const App = () => {
  return (

    <>
    
       <Router>
    <Header />
      <Switch>
        <Route  exact path="/startup-marking" component={LandingPage}/>
        <Route  exact path="/startup-marking/contact" component={Contact}/>
        
      </Switch>
    </Router>
    
   
  </>
  );
};

export default App;
