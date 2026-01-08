import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 8925641038</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:maryamhamna.27it@licet.ac.in">maryamhamna.27it@licet.ac.in</a>
              </div>
            </div>
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/maryamhamna" target="_blank" rel="noopener noreferrer">github.com/maryamhamna</a>
              </div>
            </div>
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="http://www.linkedin.com/in/maryam-hamna-n-20959a2a4" target="_blank" rel="noopener noreferrer">linkedin.com/in/maryam-hamna-n</a>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Let's Connect!</h3>
            <p>Feel free to reach out if you'd like to work together or just say hello.</p>
            <a href="mailto:maryamhamna.27it@licet.ac.in" className="contact-btn">
              <FaPaperPlane /> Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
