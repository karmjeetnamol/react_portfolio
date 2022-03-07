import React from "react";
import "./styles/Portfolio.css";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";

export default function Portfolio() {
  return (
    <div>
      <section className="testi">
        <h1>Portfolio</h1>

        <div className="cart-container">
          <div className="cart">
            <img src={image1} alt="" />
            <p>Project Japenese Anime</p>
            <h5>It describes about Japanese Anime</h5>
            <li>
                    <a href="https://github.com/karmjeetnamol/Project-AnimeSE" target="-blank">
                        Git Hub
                    </a>

                </li>
          
          </div>

          <div className="cart">
            <img src={image2} alt="" />
            <p>Project Liquor Lover</p>
            <h5>You can have your own inventory</h5>
            <li>
                    <a href="https://github.com/karmjeetnamol/Liquor-Lover" target="-blank">
                        Git Hub
                    </a>

                </li>
                <li>
                    <a href="https://kn-liquor-lover.herokuapp.com/" target="-blank">
                        Heroku
                    </a>

                </li>
               
          </div>

          <div className="cart">
            <img src={image3} alt="" />
            <p>Wheather Dashboard</p>
            <h5>Current Wheather</h5>
            <li>
                    <a href="https://github.com/karmjeetnamol/Weather-Dashboard" target="-blank">
                        Github
                    </a>

                </li>
          </div>
        </div>
      </section>
    </div>
  );
};


