import React, { useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const activeSection = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a 
          href="#about" 
          className={styles.logo}
          onClick={closeMenu}
        >
          Peter K
        </a>
        
        <button 
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li>
            <a 
              href="#about" 
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#work" 
              className={`${styles.navLink} ${activeSection === 'work' ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Work
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
              onClick={closeMenu}
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