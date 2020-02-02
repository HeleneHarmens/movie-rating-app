import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import MovieOverview from "./pages/movieoverview";
import Navigationbar from "./components/navbar"

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigationbar></Navigationbar>
        <Router>
          <Route exact path="/" component={Home} />
          {/* <Route path="/titles" component={MovieOverview} /> */}
        </Router>
      
      </div>

    );
  }
}

export default App;
