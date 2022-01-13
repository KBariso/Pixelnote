import React from "react";
import { NavLink } from "react-router-dom";
import "./splash.css";
import logo1 from "./Images/updatedPixelnoteGif.gif";
import logo2 from "./Images/Inkedpacman_LI.jpg";
// import logo3 from "./Images/SplashBackground.jpg"

const Splash = () => {
  return (
    <>
        <div className="pacman-bar">
          <img className="pacman" src={logo2} />
        </div>
      <div className="splash-background">
        <div className="splash-page">
          <img className="pixelnote-gif" src={logo1} />
        </div>
        <div className="press-start">
          <p className="splashDescription">Create a personal space for all your most important ideas and information...All in the style of your 8-bit nostalgia</p>
          <NavLink className="start-button" to="/home">
            Press To Start
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Splash;
