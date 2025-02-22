import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeTimeTracker.css'; // Link to the CSS file

const TimeTrackerLoginPrompt = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
  };


  return (
    <div className="time-tracker-login-prompt">
              <br /><br /><br /><br /><br /><br />

      <div className="time-tracker-content">
        <h1>Track Your Time, Elevate Your Well-being</h1>
        <p>
          To unlock the power of time tracking and create a balanced schedule tailored just for you, please log in or create an account. It’s quick, easy, and the first step toward a happier, healthier you!
        </p>
        <div className="button-container">
          <button className="cta-button" onClick={handleLoginClick}>Log In</button>
        </div>
        <div className="features-overview">
          <h2>Why Join Us?</h2>
          <ul>
          <li>✨ <strong>Personalized Schedules:</strong> Get recommendations based on your lifestyle.</li>
          <li>✨ <strong>Mood Tracking:</strong> Log your daily mood and see how it connects to your activities.</li>
            <li>✨ <strong>AI Insights:</strong> Receive personalized feedback to improve your well-being.</li>
            <li>✨ <strong>Community Support:</strong> Connect with others on a similar journey.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackerLoginPrompt;