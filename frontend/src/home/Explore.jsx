import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeTimeTracker.css";

const MoodTrackerLoginPrompt = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="time-tracker-login-prompt">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="time-tracker-content">
        <h1>Track Your Mood, Elevate Your Well-being</h1>
        <p>
          To unlock the power of mood tracking and understand how your emotions
          connect to your daily activities, please log in or create an account.
          It’s quick, easy, and the first step toward a happier, healthier you!
        </p>
        <div className="button-container">
          <button className="cta-button" onClick={handleLoginClick}>
            Log In
          </button>
        </div>
        <div className="features-overview">
          <h2>Why Join Us?</h2>
          <ul>
            <li>
              ✨ <strong>Mood Tracking:</strong> Log your daily mood and see
              patterns over time.
            </li>
            <li>
              ✨ <strong>Personalized Insights:</strong> Understand how your
              mood connects to your activities.
            </li>
            <li>
              ✨ <strong>AI Feedback:</strong> Receive suggestions to improve
              your emotional well-being.
            </li>
            <li>
              ✨ <strong>Community Support:</strong> Connect with others on a
              similar journey.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoodTrackerLoginPrompt;
