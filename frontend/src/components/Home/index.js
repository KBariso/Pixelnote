import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo1 from "./Images/BookClosedClear.png";
import logo2 from "./Images/Bookopening1.png";
import logo3 from "./Images/BookOpening2.png";
import logo4 from "./Images/BookOpening3.png";
import "./home.css";

const Home = () => {
  const [showFirstImg, setShowFirstImg] = useState(false);
  const [showSecondImg, setShowSecondImg] = useState(false);
  const [showThirdImg, setShowThirdImg] = useState(false);
  const [showFourthImg, setShowFourthImg] = useState(false);

  const openFirstImg = () => {
    if (showFirstImg) return;
    setShowFirstImg(true);
  };

  const openSecondImg = () => {
    if (showSecondImg) return;
    setShowSecondImg(true);
  };

  const openThirdImg = () => {
    if (showThirdImg) return;
    setShowThirdImg(true);
  };

  const openFourthImg = () => {
    if (showFourthImg) return;
    setShowFourthImg(true);
  };

  //First Image

  useEffect(() => {
    if (!showFirstImg) return;

    const closeFirstImg = () => {
      setShowFirstImg(false);
    };

    document.addEventListener("click", closeFirstImg);

    return () => document.removeEventListener("click", closeFirstImg);
  }, [showFirstImg]);

  //Second Image

  useEffect(() => {
    if (!showSecondImg) return;

    const closeSecondImg = () => {
      setShowSecondImg(false);
    };

    document.addEventListener("click", closeSecondImg);

    return () => document.removeEventListener("click", closeSecondImg);
  }, [showSecondImg]);

  //Third Image

  useEffect(() => {
    if (!showThirdImg) return;

    const closeThirdImg = () => {
      setShowThirdImg(false);
    };

    document.addEventListener("click", closeThirdImg);

    return () => document.removeEventListener("click", closeThirdImg);
  }, [showThirdImg]);

  // Fourth Image

  useEffect(() => {
    if (!showFourthImg) return;

    const closeFourthImg = () => {
      setShowFourthImg(false);
    };

    document.addEventListener("click", closeFourthImg);

    return () => document.removeEventListener("click", closeFourthImg);
  }, [showFourthImg]);

  return (
    <>
      <div className="middle-nav">
        <div className="books">
          <button className="pixButton1">
            <img className="pixelnote1" src={logo1} onClick={openFirstImg} />
            Why Pixelnote
          </button>

          <button className="pixButton2">
            <img className="pixelnote2" src={logo2} onClick={openSecondImg} />
            Features
          </button>
          <button className="pixButton3">
            <img className="pixelnote3" src={logo3} onClick={openThirdImg} />
            Benefits
          </button>
          <button className="pixButton4">
            <img className="pixelnote4" src={logo4} onClick={openFourthImg} />
            Yes
          </button>
        </div>
        {showFirstImg && (
          <div className="firstDescription">
            <h1>Why Choose Pixelnote?</h1>
            <p>Pixelnote gives you everything you need to keep life organized—great note taking, project planning, and easy ways to find what you need, when you need it.</p>
          </div>
        )}
        {showSecondImg && (
          <div className="secondDescription">
            <h1>Hiii</h1>
            <ul className="listBenefits">
              <li>* Get more from your note-taking app</li>
              <li>* Take notes and take action</li>
              <li>* The right information, right at your fingertips</li>
            </ul>
          </div>
        )}
        {showThirdImg && (
          <div>
            <h1>yuhhh</h1>
          </div>
        )}
        {showFourthImg && (
          <div>
            <h1>yaaaassss</h1>
          </div>
        )}
        {/* <NavLink className="signup" to="/signup">
          Sign Up For Free!
        </NavLink> */}
      </div>
    </>
  );
};

export default Home;
