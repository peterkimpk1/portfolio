import React from 'react';
import styles from './Breadcrumb.module.css';

interface BreadcrumbProps {
  currentSection: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentSection }) => {
  const getSectionPath = (section: string) => {
    const paths = {
      'about': ['Home', 'About'],
      'work': ['Home', 'Work'],
      'contact': ['Home', 'Contact']
    };
    return paths[section as keyof typeof paths] || ['Home'];
  };

  const pathItems = getSectionPath(currentSection);

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {pathItems.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {index === pathItems.length - 1 ? (
              <span className={styles.currentPage} aria-current="page">
                {item}
              </span>
            ) : (
              <>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className={styles.breadcrumbLink}
                >
                  {item}
                </a>
                <span className={styles.separator}>/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;