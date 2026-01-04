import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    'Simulink Onramp',
    'MATLAB Onramp',
    'Statistics Essentials with Python',
    'CompTIA Network+ Ports & Protocols'
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={cert} className="certificate-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>{cert}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
