import React from 'react';
import { Project } from '../../types';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
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
          <a href={project.deployedLink} className={styles.link}>
            {/* Live demo link */}
          </a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} className={styles.link}>
            {/* Repository link */}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;