import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          Peter K
        </div>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#work" className={styles.navLink}>Work</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;