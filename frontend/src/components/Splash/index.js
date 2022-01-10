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
          <NavLink className="start-button" to="/home">
            Press To Start
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Splash;
