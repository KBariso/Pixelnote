import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="middle-nav">
        <h1>Pixelnote</h1>
        <NavLink className="signup" to="/signup">
          Sign Up For Free!
        </NavLink>
      </div>
    </>
  );
};

export default Home;
