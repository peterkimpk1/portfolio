import React from 'react';
import styles from './Intro.module.css';

const Intro: React.FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.content}>
        <div className={styles.profilePicture}>
          <img src="/profile-placeholder.jpg" alt="Peter Kim" className={styles.profileImg} />
        </div>
        <h1 className={styles.title}>
          Peter Kim
        </h1>
        <p className={styles.subtitle}>
          Frontend Engineer • Harrisonburg, VA
        </p>
        <div className={styles.description}>
          <p>
            Passionate Frontend Engineer with 3 years of experience at Pure Shenandoah, 
            where I've specialized in creating innovative web solutions and optimizing 
            development processes. A proud graduate of Turing School of Software & Design, 
            I thrive on solving complex problems and continuously improving workflows to 
            deliver exceptional user experiences.
          </p>
        </div>
        <div className={styles.actions}>
          {/* CTA buttons placeholder */}
        </div>
      </div>
    </section>
  );
};

export default Intro;