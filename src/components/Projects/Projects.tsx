import React from 'react';
import type { Project } from '../../types';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

interface ProjectsProps {
  projects?: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Featured Projects
        </h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {/* Placeholder when no projects */}
          {projects.length === 0 && (
            <div className={styles.placeholder}>
              {/* Empty state placeholder */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;