import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const fullName = "MARYAM HAMNA N";
  const title = "Aspiring Software Developer | IT Undergraduate";

  useEffect(() => {
    // Start name animation after component mounts
    const timer = setTimeout(() => {
      setNameAnimationComplete(true);
      // Show summary after name animation
      setTimeout(() => {
        setShowSummary(true);
      }, 500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Animated Name */}
          <div className="name-container">
            <h1 className="animated-name">
              {fullName}
            </h1>
          </div>

          {/* Animated Title */}
          {nameAnimationComplete && (
            <h2 className="animated-title">
              {title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="word"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {word}
                </span>
              ))}
            </h2>
          )}

          {/* Professional Summary */}
          {showSummary && (
            <div className="summary-container">
              <p className="professional-summary">
                Passionate and self-motivated IT student with a strong foundation in programming, database management, and core IT concepts. Skilled in Python, Java, SQL, and analytical problem-solving, with an interest in building efficient and reliable solutions. Eager to apply and expand technical skills while contributing to impactful projects.
              </p>
            </div>
          )}

          {/* Social Icons */}
          {showSummary && (
            <div className="social-icons">
              <a
                href="http://www.linkedin.com/in/maryam-hamna-n-20959a2a4"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/maryamhamna"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:maryamhamna.27it@licet.ac.in"
                className="social-icon email"
                aria-label="Send Email"
              >
                <FaEnvelope />
              </a>
            </div>
          )}

          {/* CTA Buttons */}
          {showSummary && (
            <div className="cta-buttons">
              <a
                href="#contact"
                className="cta-button primary"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download="Maryam_Hamna_Resume.pdf"
                className="cta-button secondary"
              >
                <FaDownload className="download-icon" />
                Download Resume
              </a>
            </div>
          )}
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <div className="image-container">
            <img src={profilePhoto} alt="Maryam Hamna N" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
