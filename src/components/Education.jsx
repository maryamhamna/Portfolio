import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-item">
          <h3>B.Tech (Information Technology) | 2023 – 2027</h3>
          <p>Loyola-ICAM College of Engineering and Technology</p>
          <p>CGPA: 8.71</p>
        </div>
        <div className="education-item">
          <h3>Higher Secondary | 2022 – 2023</h3>
          <p>Crescent Matric Hr. Sec. School</p>
          <p>Percentage: 92.6%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
