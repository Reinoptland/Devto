import React from "react";
import "./App.css";
import Developers from "./components/Developers";
import Home from "./components/Home";
import DeveloperDetails from "./components/DeveloperDetails";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/developers">Developers</Link>
      </nav>
      <header className="App-header">
        <Route exact path="/" component={Home} />
        <Route exact path="/developers" component={Developers} />
        <Route path="/developers/:id" component={DeveloperDetails} />
      </header>
    </div>
  );
}

export default App;
