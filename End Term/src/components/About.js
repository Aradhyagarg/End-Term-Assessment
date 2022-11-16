import React, { useState } from "react";
import "./admin.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const About = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>rtsy
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>


        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://studio.youtube.com/channel/UCK1Op7x4yqDISe-Z_4soYng/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"
                target="">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aradhya.garg.3992/"
                target="">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
          </ul>
          <div class="bg"></div>
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <div id="backgroundimage">
      <div class="overlay">
      <h1 >I am a Aradhya Garg, <br></br>and I am curruntly pursuing degree in <br></br>the history of art.  I then trained<br></br> in life painting at Heatherley School of Art <br></br>and received instruction in old master painting <br></br>techniques in the Studio of Rosa Branson MBE. 

        
      
      </h1><br></br>
      </div>
</div>
      </>
  );
        }

        export default About;