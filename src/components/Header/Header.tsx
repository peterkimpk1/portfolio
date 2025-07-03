import React from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const activeSection = useActiveSection();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a 
          href="#about" 
          className={styles.logo}
        >
          Peter K
        </a>
        <ul className={styles.navList}>
          <li>
            <a 
              href="#about" 
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#work" 
              className={`${styles.navLink} ${activeSection === 'work' ? styles.active : ''}`}
            >
              Work
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;