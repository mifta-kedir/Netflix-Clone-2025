import React from "react";
import "./Header.css";
import { FaSearch, FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <div className="nav">
      <div className="left">
        <h1 className="logo">Netflix</h1>
        <div className="links">
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </div>
      </div>
      <div className="right">
        <FaSearch className="icon" />
        <FaBell className="icon" />
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default Header;
