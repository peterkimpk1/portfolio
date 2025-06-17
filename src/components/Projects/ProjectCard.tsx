import React from 'react';
import type { Project } from '../../types';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      {project.imageUrl && (
        <div className={styles.imageContainer}>
          <img 
            src={project.imageUrl} 
            alt={`${project.title} preview`} 
            className={styles.projectImage}
          />
          {project.deployedLink && (
            <a 
              href={project.deployedLink} 
              className={styles.arrowButton}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View Live Demo"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                className={styles.arrow}
              >
                <path 
                  d="M3 12H21M21 12L14 5M21 12L14 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      )}
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <span className={styles.duration}>{project.duration}</span>
      </div>
      <p className={styles.cardDescription}>{project.description}</p>
      <div className={styles.techStack}>
        {project.techStack.map((tech, index) => (
          <span key={index} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard