import React from 'react';
import { FaCode, FaGlobe, FaDatabase, FaTools, FaBrain, FaUsers } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = {
    'Programming Languages': ['Python', 'Java', 'C'],
    'Web Development': ['HTML', 'CSS', 'JavaScript'],
    'Database': ['MySQL'],
    'Tools': ['GitHub', 'Jupyter Notebook', 'Eclipse', 'VS Code'],
    'Core Concepts': ['DSA', 'DBMS', 'OOPS'],
    'Soft Skills': ['Problem Solving', 'Communication', 'Leadership', 'Teamwork']
  };

  const icons = {
    'Programming Languages': <FaCode />,
    'Web Development': <FaGlobe />,
    'Database': <FaDatabase />,
    'Tools': <FaTools />,
    'Core Concepts': <FaBrain />,
    'Soft Skills': <FaUsers />
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>{icons[category]} {category}:</h3>
              <p>{skillList.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
