import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css';

class Nav extends Component {

  constructor(props) {
      super(props);

  } // End Constructor


  render(){

    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#" className="brand-logo center customNav">New York Times Article Search</a></li>
              <li><a onClick={()=>window.location.replace("/")} style={{"text-decoration": "none"}}>Home</a></li>
              <li><NavLink to="/saved" style={{"text-decoration": "none"}}>Saved</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
  )} // End of Render
} // End of Class


export default Nav;
