import React from "react";
import "./App.css";
import Developers from "./components/Developers";
import Home from "./components/Home";
import DeveloperDetails from "./components/DeveloperDetails";
import SignUp from "./components/SignUp";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/developers">Developers</Link>
        <Link to="/signup">Sign up</Link>
      </nav>
      <header className="App-header">
        <Route exact path="/" component={Home} />
        <Route exact path="/developers" component={Developers} />
        <Route path="/developers/:id" component={DeveloperDetails} />
        <Route path="/signup" component={SignUp} />
      </header>
    </div>
  );
}

export default App;
