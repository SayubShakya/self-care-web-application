import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <br /> <br />
        <br /> <br />
        <h1>Embrace Your Well-being</h1>
        <p>
          Nurture your mind, body, and soul with practices that bring joy and
          balance. Discover small moments of peace and happiness to feel your
          best every day! 🌟
        </p>
        <button className="cta-button" onClick={handleClick}>
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default Banner;
