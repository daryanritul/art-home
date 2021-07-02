import React from 'react';
import logo from '../assets/Images/logo.svg';

const Footer = () => {
  return (
    <div className="footer-box">
      {/* <img className="brand" src={logo} alt="" /> */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut.
      </p>
      <div className="footer__divider"></div>

      <ul className="footer-list">
        <li className="list__items">
          <a href=""></a>Arts
        </li>
        <li className="list__items">
          <a href=""></a>Artists
        </li>
        <li className="list__items">
          <a href=""></a>About
        </li>
        <li className="list__items">
          <a href=""></a>Contact
        </li>
        <li className="list__items">
          <a href=""></a>Sign In
        </li>
      </ul>
    </div>
  );
};

export default Footer;
