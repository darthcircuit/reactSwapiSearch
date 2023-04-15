import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { useState } from "react"

import "./styles/styles.scss"
import Swapi from "./comp/SwapiLanding";
import Home from "./comp/Home"
import Navbar from "./comp/Navbar"

function App() {
  return (
    <div className="App">

      <Router>
        <Route component={Navbar} />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/person" component={Swapi} />
        </Switch>
      </Router>

     {/* {id? <Swapi id={id} /> : null} */}

    </div>
  );
}

export default App;
