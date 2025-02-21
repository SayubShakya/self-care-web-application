import React from 'react';
import { Link } from 'react-router-dom'; // If you need links in the footer
import './Footer.css';  // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>Your self-care destination.  We provide resources and inspiration to help you nurture your mind, body, and soul.</p>
            <div className="contact-details">
              <p>Email: info@selfcareapp.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Self-Care App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;