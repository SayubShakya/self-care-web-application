import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import "./Navbar.css"; // Make sure the CSS is imported

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/Signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            {/* Apply the login-button class to the Login Link */}
            <Link to="/login" className="login-button">
              Log In
            </Link>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "120px", height: "auto" }}
                />
              </Link>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/hometimetracker">Time Tracker</Link>
                  </li>
                  <li>
                    <Link to="/moodtracker">Mood Tracker</Link>
                  </li>
                  <li>
                    <Link to="/#">Tips</Link>
                  </li>
                </ul>
              </div>

              {/* Sign In */}
              <Link to="/Signup" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>

              {/* Apply the login-button class to the Login Link */}
              <Link to="/login" className="login-button d-none d-md-block">
                Log In
              </Link>

              {/* Menu Toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social Icons */}
              <div
                className="ellipsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
