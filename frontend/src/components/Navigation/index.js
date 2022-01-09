import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
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
        <div className="home">Pixelnote</div>
      </NavLink>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
