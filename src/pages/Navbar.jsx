import React from "react";
import "../styles/navbar.css";
import Logo from "../assets/Logo.png";

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Socratic Minds Logo" className="logo-img" />
        <h2 className="logo-text">Socratic Minds</h2>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search topics, lessons, or problems..."
          className="search-box"
        />
      </div>

      <div className="navbar-right">
        <button className="btn primary" onClick={onLoginClick}>
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
