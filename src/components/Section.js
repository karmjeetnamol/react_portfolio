import React from "react";
import "./styles/Section.css";
import me from "./assets/me.png";

export default function Section() {
  return (
    <section className="main-section">
      <div className="container">
        <div className="texts">
          <h1>Hello I am</h1>
          <h1 className="h1-big">Karmjeet Nehal</h1>
          <p> I am Karmjeet, I live in Seattle. I have just finished my Full stack bootcamp. A lot of caring moments and love, is always what I get from everyone in my family. I have studied in UW, which has always fed me to be motivated towards the future.
              All of my virtues have been incorporated in me by my school and helping is one of them. It is always a part of learning that you try to inculcate virtues in yourself by being an honest person. To be responsible and to adhere to your duties, is what our school teachs us.</p>
          {/* <button className="text-button">My Work</button> */}
        </div>

        <div className="image">
          <img src={me} alt="" />
        </div>
      </div>
    </section>
  );
};


