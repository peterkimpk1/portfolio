import React from 'react';
import Header from '../Header/Header';
import BackToTop from '../BackToTop/BackToTop';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const activeSection = useActiveSection();

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Breadcrumb currentSection={activeSection} />
        {children}
      </main>
      <footer className={styles.footer}>
        {/* Footer content placeholder */}
      </footer>
      <BackToTop />
    </div>
  );
};

export default Layout;