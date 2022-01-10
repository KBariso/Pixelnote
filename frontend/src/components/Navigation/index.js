import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import logo from './Images/PixelnoteLogo.png';
import DemoUser from "../DemoUser";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
      <div className="right-nav">
        <DemoUser />
        <NavLink className="signup2" to="/signup">
          Sign Up
        </NavLink>
        <LoginFormModal />
      </div>

      </>
    );
  }

  return (
    <div className="navbar">
      <NavLink exact to="/home">
        <div className="home">
        <img className="pixelnoteLogo" src={logo}/>
        </div>
      </NavLink>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
