import React from "react";
//import { MenuOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h1> Karmjeet Nehal</h1>
        </div>
        <ul className="ul-items">
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>         
    </div>
  );
}
