import React from 'react';
import "../style/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <div className="main-nav">
           <ul className="nav">
               <li><NavLink to='/Who' activeClassName="myActive">-Who Am I?</NavLink></li>
               <li><NavLink to='/Mystory' activeClassName="myActive">-My Story</NavLink></li>
               <li><NavLink to='/Myskills' activeClassName="myActive">-My Skills</NavLink></li>
               <li><NavLink to='/' exact activeClassName="myActive">-Portfolio</NavLink></li>
           </ul>
       </div>  
  )
}
export default Nav