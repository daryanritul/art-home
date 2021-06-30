import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Images/logo.svg";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`nav toggle ${toggle ? "toggler" : ""}`}>
      <Link className="nav__brand" href="#" to="/">
        <img className="brand" src={logo} alt="" />
      </Link>
      <div className="menu-btn toggler__btn" onClick={() => setToggle(!toggle)}>
        <div className="menu-btn__burger"></div>
      </div>
      <ul className="list nav__list toggler__content">
        <li className="nav__item">
          <Link to="/">Arts</Link>
        </li>
        <li className="nav__item">
          <Link to="/artistscreen">Artists</Link>
        </li>
        <li className="nav__item">
          <a href=""></a>About
        </li>
        <li className="nav__item">
          <a href=""></a>Contact
        </li>
        <span>
          <li className="nav__item">
            <a href=""></a>Sign In
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default NavBar;
