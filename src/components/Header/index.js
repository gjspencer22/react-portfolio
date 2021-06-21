import React from 'react';
import { NavLink } from 'react-router-dom';
function Header(props) {
    return (
       <nav class ="header">
           <ul class ="links">
               <li>
                   <NavLink to = '/work' activeClassName = 'selected'>Work</NavLink>
               </li>
               <li>
               <NavLink to = '/contact' activeClassName = 'selected'>Contact</NavLink>
               </li>
               
                   {props.loggedIn ? <li><NavLink to = '/resume' activeClassName = 'selected'>Resume</NavLink></li>: 'pizza'}
               
               <li>
                   <span>Other Skills</span>
               </li>
           </ul>
       </nav>
    );
}

export default Header;