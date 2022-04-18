import React from 'react';
import "./styles/Footer.css";


export default function Footer() {
    return (
<div class="footer">
<a href="https://github.com/karmjeetnamol">
    <img
      src="https://img.icons8.com/color/48/000000/github.png"
      alt="Github"
      class="icon"/>
  </a>

  <a href="https://www.linkedin.com/in/karmjeet-nehal-87319a228/">
    <img
      src="https://img.icons8.com/color/48/000000/linkedin.png"
      alt="LinkedIn"
      class="icon" />
  </a>
  <p>
    &copy; Karmjeet Nehal || made with{" React"}
    <img
      id="react-icon"
      src="https://img.icons8.com/color/48/000000/react-native.png"
      alt="React" />
  </p>
</div>
 );
}