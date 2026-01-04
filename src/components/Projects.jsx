import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Bus Reservation System',
      description: 'Built a basic bus reservation system using Java and OOP concepts. Added core features such as seat booking and seat selection.',
      githubUrl: 'https://github.com/Muqshith/bus-reservation-system' // Update with actual GitHub URL
    },
    {
      title: 'Link Protection Tool',
      description: 'Developed a lightweight application to detect malicious URLs in real time using Python/Tkinter. Integrated Google Safe Browsing and VirusTotal APIs to identify threat type and risk level.',
      githubUrl: 'https://github.com/maryamhamna/link_shield_protection'
    },
    {
      title: 'Intrusion Detection System (Streamlit)',
      description: 'Created an AI-based malicious URL detection system using machine learning models. Built an interactive Streamlit dashboard with visual threat warning indicators.',
      githubUrl: 'https://github.com/maryamhamna/Intrution_Detection_System'
    },
    {
      title: 'IoT Pedestrian Safety System',
      description: 'Developed an IoT-based solution to improve pedestrian safety. Implemented sensors to detect pedestrian movement and enhance road awareness.',
      githubUrl: 'https://github.com/maryamhamna/Pedestrian_Safety'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a key={project.title} href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
