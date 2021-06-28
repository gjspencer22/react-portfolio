import React from 'react';
import { NavLink } from 'react-router-dom';
function Header(props) {
    return (
        <nav className="header">
            

            <ul className="links">
            <h1 className="myName">Garrett Spencer</h1>
                <li>
                    <NavLink to='/about' activeClassName='selected'>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' activeClassName='selected'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeClassName='selected'>Contact</NavLink>
                </li>

                {props.loggedIn ? <li><NavLink to='/resume' activeClassName='selected'>Resume</NavLink></li> : 'pizza'}

                {/* <li>
                    <span>Other Skills</span>
                </li> */}
            </ul>
        </nav>
    );
}

export default Header;