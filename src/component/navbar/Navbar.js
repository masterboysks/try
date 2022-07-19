import React from "react";
import "./navbar.css";

import logo from "./img/logoHeader.png";
import notf from "./img/notf.png";
import man from "./img/man-pic.png";
import hamburger from "./img/ham-burger.png";

const Navbar = () => {
  const navlinks = () => {
    const nav = document.getElementById("nav-list").classList;

    nav.contains("sm-hidden") ? nav.remove("sm-hidden") : nav.add("sm-hidden");
  };
  return (
    <>
      <div className="navbar flex navbar-border-bottom">
        <div className="logo-container flex">
          <img src={logo} alt="logo.main" className="logo" />
          <div className="logo-text">Kindergarden Secondary School</div>
        </div>
        <nav>
          <ul className="flex nav-list sm-hidden" id="nav-list">
            <li className="active list-items">Dashboard</li>
            <li className="list-items">Event calender</li>
            <li className="list-items">Push notification</li>
            <li className="list-items">Fee payment</li>
            <li className="list-items">Logsheet</li>
          </ul>
        </nav>
        <div className="right flex">
          <img src={notf} alt="notf" className="notf" />
          <img src={man} alt="man" className="profile-img" />
          <img
            src={hamburger}
            alt="hamburger"
            className="ham-burger"
            onClick={navlinks}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
