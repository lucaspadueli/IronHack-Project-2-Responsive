import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <div className="main-navbar">
      <nav id="home-nav-bar">
        <ul className="nav-list">
          <li>
            {" "}
            <Link to="/characters-list"> List Of Characters </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/featured-episodes"> Featured Episodes </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/gallery"> Gallery </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/curiosities"> Curiosities </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;



