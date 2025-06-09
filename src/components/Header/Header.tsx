import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Navigation menu will go here */}
        <div className={styles.logo}>
          {/* Logo/name placeholder */}
        </div>
        <ul className={styles.navList}>
          {/* Navigation links will go here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;