import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      title: 'Bus Reservation System',
      description: 'Built a basic bus reservation system using Java and OOP concepts. Added core features such as seat booking and seat selection.',
      githubUrl: 'https://github.com/Muqshith/bus-reservation-system',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop',
      category: 'System',
      tags: ['Java', 'OOP'],
      icon: '🚌'
    },
    {
      title: 'Link Protection Tool',
      description: 'Developed a lightweight application to detect malicious URLs in real time using Python/Tkinter. Integrated Google Safe Browsing and VirusTotal APIs.',
      githubUrl: 'https://github.com/maryamhamna/link_shield_protection',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      category: 'AI/ML',
      tags: ['Python', 'Tkinter', 'API'],
      icon: '🔒'
    },
    {
      title: 'Intrusion Detection System',
      description: 'Created an AI-based malicious URL detection system using machine learning models. Built an interactive Streamlit dashboard.',
      githubUrl: 'https://github.com/maryamhamna/Intrution_Detection_System',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      category: 'AI/ML',
      tags: ['Python', 'Streamlit', 'ML'],
      icon: '🛡️'
    },
    {
      title: 'IoT Pedestrian Safety System',
      description: 'Developed an IoT-based solution to improve pedestrian safety. Implemented sensors to detect pedestrian movement.',
      githubUrl: 'https://github.com/maryamhamna/Pedestrian_Safety',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      category: 'IoT',
      tags: ['IoT', 'Sensors', 'Safety'],
      icon: '🚶'
    }
  ];

  useEffect(() => {
    setVisibleProjects(projects);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <a 
              key={project.title} 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.icon} {project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
