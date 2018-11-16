/////////////////////////////////////////////// /* Import Stock React Components */ //////////////////////////////////////////////////////////
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////////////
// import Nav from './components/NavBar';
import Home from './pages/Home';
import Saved from './pages/Saved';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  render() {
    return (
      <div>
          <Router>
            <switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Saved" component={Saved}/>
            </switch>
          </Router>
      </div>
    );
  }
}

export default App
