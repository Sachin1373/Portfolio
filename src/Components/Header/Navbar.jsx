import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className="navcon">
        <nav className="navbar">
          <ul className="sections">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/about" activeClassName="active">
                About Me
              </NavLink>
            </li> */}
             <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
