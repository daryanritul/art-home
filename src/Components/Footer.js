import React from "react";
import logo from "../assets/Images/logo.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="divider"></div>
      <div className="container">
        <div className="col">
          <Link to="/">Arts</Link>
          <Link to="/artist">Artists</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
        <div className="col">
          <a href="https://artist-arthome-df8ff.web.app">
            Artist <span> Login </span>
          </a>
          <a href="https://artist-arthome-df8ff.web.app">
            New Artist?<span> Register </span>
          </a>
        </div>
        <div className="col detail">
          <img src={logo} />
          <p>Explore, Search , Download Arts from various Artists</p>
        </div>
      </div>
      <div className="divider"></div>
      <p>@arthomegallery.com</p>
    </div>
  );
};

export default Footer;
