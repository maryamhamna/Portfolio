import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="particle1"></div>
      <div className="particle2"></div>
      <div className="particle3"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>MARYAM HAMNA N</h1>
          <h2>Aspiring Software Developer | IT Undergraduate</h2>
          <div className="contact-info">
            <p><FaPhone /> Phone: +91 8925641038</p>
            <p><FaEnvelope /> Email: maryamhamna.27it@licet.ac.in</p>
            <p><FaGithub /> GitHub: <a href="https://github.com/maryamhamna" target="_blank" rel="noopener noreferrer">https://github.com/maryamhamna</a></p>
            <p><FaLinkedin /> LinkedIn: <a href="http://www.linkedin.com/in/maryam-hamna-n-20959a2a4" target="_blank" rel="noopener noreferrer">http://www.linkedin.com/in/maryam-hamna-n-20959a2a4</a></p>
          </div>
          <a href="/resume.pdf" download="Maryam_Hamna_Resume.pdf" className="resume-btn">Download Resume (PDF)</a>
        </div>
        <div className="hero-image">
          <img src={profilePhoto} alt="Maryam Hamna N" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
