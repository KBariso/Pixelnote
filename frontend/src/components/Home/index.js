import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo1 from "./Images/BookClosedClear.png";
import logo2 from "./Images/Bookopening1.png";
import logo3 from "./Images/BookOpening2.png";
import logo4 from "./Images/BookOpening3.png";
import "./home.css";

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);
  // console.log(sessionUser.username)

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




  let sessionHome;
  if (sessionUser) {
    sessionHome = (
      <>
        <div className="main-background">

        </div>
          <div className="welcome-container">
              <div className="usernameColor">
                <h1 className="username">Hello {sessionUser.username}.</h1>
              </div>
                <h1 className="stars">***</h1>
          </div>
      <div className="middle-navU">
        <div className="booksU">
          <NavLink exact to="/notebooks" className="pixButtonU1">
            <img className="pixelnoteU1" src={logo1} />
            Notebooks
          </NavLink>
{/*
          <button className="pixButtonU2">
          <img className="pixelnoteU2" src={logo2} />
          Features
          </button>
          <button className="pixButtonU3">
          <img className="pixelnoteU3" src={logo3} />
          Benefits
        </button> */}
          <NavLink exact to="/notes" className="pixButtonU4">
            <img className="pixelnoteU4" src={logo4} />
            All Notes
          </NavLink>
        </div>
        <h2 className="letsStart"> Let's get Started.</h2>
        <div>
        </div>
    </div>

      </>
    )
  } else {
    sessionHome = (
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
            How to Use
          </button>
          <button className="pixButton4">
            <img className="pixelnote4" src={logo4} onClick={openFourthImg} />
            Who We Are
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
            <h1>Features</h1>
            <ul className="listBenefits">
              <li>* Get more from your note-taking app</li>
              <li>* Take notes and take action</li>
              <li>* The right information, right at your fingertips</li>
            </ul>
          </div>
        )}
        {showThirdImg && (
          <div className="secondDescription">
            <h1>How to Use</h1>
            <p>Easy! All you need is to do is make an account with us and start making your very own notes and notebooks</p>
          </div>
        )}
        {showFourthImg && (
          <div className="secondDescription">
            <h1>Who We Are</h1>
            <p className="descriptionKB">We are simply an Evernote clone. Packed with 8-bit nostalgia. Starting with you, the main character.
              <p className="descriptionKB"> Meet the Creator
                <h2 > Kielvin Bariso
                  <div className="kielvin-profile">
                    <div className="KBLinks">
                      <a href='https://github.com/KBariso' i className="fa fa-github" aria-hidden="true" target="_blank"> </a>
                      <a href='https://www.linkedin.com/in/kielvin-bariso/' i className="fab fa-linkedin-in" target="_blank"> </a>
                    </div>
                  </div>
                </h2>
              </p>

            </p>


          </div>
        )}
        {/* <NavLink className="signup" to="/signup">
          Sign Up For Free!
        </NavLink> */}
      </div>
    </>

    )
  }


  return (
    <>
    {sessionHome}
    </>
  );
};

export default Home;
