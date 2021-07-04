import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/Images/logo.svg';
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`nav ${toggle ? 'toggler' : ''}`}>
      <Link className="nav__brand" href="#" to="/">
        <img src={logo} alt="" />
      </Link>

      <ul className="nav__list">
        <li>
          <Link to="/">Arts</Link>
        </li>
        <li>
          <Link to="/artistscreen">Artists</Link>
        </li>
        {/* <li>
          <Link to="/artistscreen">About</Link>
        </li> */}
        <li>
          <Link to="/contactscreen">Contact</Link>
        </li>
        <span>
          <li>
            <Link to="/artistscreen">Login</Link>
          </li>
        </span>
      </ul>
      <div className="menu-btn" onClick={() => setToggle(!toggle)}>
        <div className="menu-btn__burger"></div>
      </div>
    </nav>
  );
};

export default NavBar;
