import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We provide resources and inspiration to help you nurture your
              mind, body, and soul. Start your journey to a happier, healthier
              you today!
            </p>

            <div className="contact-details">
              <p>
                Email:{" "}
                <a href="mailto:WeVibe@selfcareapp.com">
                  WeVibe@selfcare.com
                </a>
              </p>
              <p>
                Phone: <a href="tel:+1234567890">(+977) 9898878766</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/#">Time Tracker</Link>
              </li>
              <li>
                <Link to="/#">Mood Tracker</Link>
              </li>
              <li>
                <Link to="/#">Tips</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} WeVibe. All rights reserved for self-care hackathon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
