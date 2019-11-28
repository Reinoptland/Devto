import React from "react";
import "./App.css";
import Developers from "./components/Developers";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Developers} />
      </header>
    </div>
  );
}

export default App;
