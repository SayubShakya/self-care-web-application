import React from 'react';
import './Banner.css'; // Link to the CSS file (see below)

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Embrace Your Well-being</h1>
        <p>
          Nurture your mind, body, and soul. Discover practices that bring joy
          and balance to your life.
        </p>
        <button className="cta-button">Start Your Journey</button>
      </div>
    </div>
  );
};

export default Banner;