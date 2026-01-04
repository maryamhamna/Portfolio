import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    'Ctrl+Alt+Hack – Built an AI-based Intrusion Detection System to identify cyber threats',
    'Carpe Diem Hackathon – LICET Pattarai – Built an IoT-based pedestrian safety solution as part of Team "GuardX"',
    'Smart India Hackathon 2025 – Link Shield Protection Tool'
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2>Achievements & Hackathons</h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index} style={{ animationDelay: `${index * 0.2}s` }}>{achievement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
