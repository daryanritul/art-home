import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Images/logo.svg";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`nav ${toggle ? "toggler" : ""}`}>
      <Link className="nav__brand" to="/">
        <img src={logo} alt="" />
      </Link>

      <ul className="nav__list">
        <li>
          <Link to="/">Arts</Link>
        </li>
        <li>
          <Link to="/artist">Artists</Link>
        </li>
        {/* <li>
          <Link to="/artistscreen">About</Link>
        </li> */}
        <li>
          <Link to="/contactus">Contact</Link>
        </li>
        <span>
          <li>
            <a href="https://artist-arthome-df8ff.web.app">Login</a>
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
