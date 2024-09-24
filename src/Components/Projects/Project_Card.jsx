import React from 'react';
import Projects_Details from './Projec_Details';
// import Project_1 from '../../assets/Project_1.png'; 
// import Project_2 from '../../assets/Project_2.png';// Corrected the import path
import './Project_Card.css';

function Project_Card() {
  return (
    <div className="project-cards">
      {Projects_Details.map((project, index) => (
        <div key={index} className="project-card">
          {/* Project Image */}
          <img src={project.Image} alt={project.name} className="project-image" />

          {/* Project Name */}
          <h2>{project.name}</h2>

          {/* Tech Stack */}
          <div className="techstack-container">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="techstack">{tech}</span>
            ))}
          </div>

          {/* Links */}
          <div className="project-links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed 
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project_Card;
