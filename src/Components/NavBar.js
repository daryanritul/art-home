import React, { useState } from 'react';

import logo from '../assets/Images/logo.svg';
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`nav toggle ${toggle ? 'toggler' : ''}`}>
      <a className="nav__brand" href="#">
        <img className="brand" src={logo} alt="" />
      </a>
      <div className="menu-btn toggler__btn" onClick={() => setToggle(!toggle)}>
        <div className="menu-btn__burger"></div>
      </div>
      <ul className="list nav__list toggler__content">
        <li className="nav__item">
          <a href=""></a>Arts
        </li>
        <li className="nav__item">
          <a href=""></a>Artists
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
