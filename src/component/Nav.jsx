import React, { Component } from 'react';
import "../style/Nav.css";
import {NavLink} from "react-router-dom";


class Nav extends Component {
  render() {
    return (
      <div>
        <div className="main-nav">
                <ul className="nav">
                    <li><NavLink to='/Who'>-Who Am I?</NavLink></li>
                    <li><NavLink to='/Mystory'>-My Story</NavLink></li>
                    <li><NavLink to='/Myskills'>-My Skills</NavLink></li>
                    <li><NavLink to='/'>-Portfolio</NavLink></li>
                </ul>
        </div>
      </div>
    )
  }
}
export default Nav;