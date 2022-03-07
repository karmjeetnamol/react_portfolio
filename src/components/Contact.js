import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <div classname="contact">
      <div className="arrow-home">
        <Link to="/">
          <ArrowBack className="arrow" />
        </Link>
      </div>
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Your Email</label>
        <input type="text" placeholder="Enter your Email" />
        <label>About You</label>
        <input type="text" placeholder="Something about you " />
        <label>Message</label>
        <textarea cols="50" rows="7" placeholder="Hello"></textarea>

        <button>Send</button>
      </form>
    </div>
  );
};


