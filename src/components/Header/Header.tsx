import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          Peter K
        </div>
        <ul className={styles.navList}>
          <li>
            <a 
              href="#about" 
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#work" 
              className={`${styles.navLink} ${activeSection === 'work' ? styles.active : ''}`}
              onClick={() => handleNavClick('work')}
            >
              Work
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
              onClick={() => handleNavClick('contact')}
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