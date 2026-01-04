import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <p><FaPhone /> <strong>Phone:</strong> +91 8925641038</p>
          <p><FaEnvelope /> <strong>Email:</strong> <a href="mailto:maryamhamna.27it@licet.ac.in">maryamhamna.27it@licet.ac.in</a></p>
          <p><FaGithub /> <strong>GitHub:</strong> <a href="https://github.com/maryamhamna" target="_blank" rel="noopener noreferrer">https://github.com/maryamhamna</a></p>
          <p><FaLinkedin /> <strong>LinkedIn:</strong> <a href="http://www.linkedin.com/in/maryam-hamna-n-20959a2a4" target="_blank" rel="noopener noreferrer">http://www.linkedin.com/in/maryam-hamna-n-20959a2a4</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
