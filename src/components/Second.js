import React from "react";
import "./styles/Second.css";
import project from "./assets/project.png";


export default function Second() {
  return (
    <section className="section-2">
      <h1 className="about-me">About Me</h1>

      <div className="container-2">
        <div className="image-cont">
          <img src={project} alt="" />
        </div>
        <div className="text-3">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

