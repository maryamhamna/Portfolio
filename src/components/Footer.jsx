import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <p>&copy; 2026 Maryam Hamna N. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
