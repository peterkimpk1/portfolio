import React from 'react';
import { Skill } from '../../types';
import styles from './Skills.module.css';

interface SkillsProps {
  skills?: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills = [] }) => {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {/* Section title placeholder */}
        </h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{skill.category}</h3>
              <div className={styles.technologies}>
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {/* Placeholder when no skills */}
          {skills.length === 0 && (
            <div className={styles.placeholder}>
              {/* Empty state placeholder */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;