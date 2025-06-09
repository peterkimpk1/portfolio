import React from 'react';
import type { Project } from '../../types';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      {project.gifUrl && (
        <div className={styles.gifContainer}>
          <img 
            src={project.gifUrl} 
            alt={`${project.title} demo`} 
            className={styles.projectGif}
          />
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
      <div className={styles.cardLinks}>
        {project.deployedLink && (
          <a href={project.deployedLink} className={styles.link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} className={styles.link} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;