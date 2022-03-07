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

      <footer>
        <div class="footer">
          <a href="https://github.com/karmjeetnamol">
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="Github"
              class="icon"
            />
          </a>

          <a href="https://www.linkedin.com/in/karmjeet-nehal-87319a228/">
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="LinkedIn"
              class="icon"
            />
          </a>

          <p>
            &copy; Karmjeet Nehal || made with{" React"}
            <img
              id="react-icon"
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="React"
            />
          </p>
        </div>
      </footer>
    </div>
  );
}
