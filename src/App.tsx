import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { projects } from './data/projects';
import { useScrollToSection } from './hooks/useScrollToSection';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  useScrollToSection();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <>
            <Intro />
            <Projects projects={projects} />
            <Contact />
          </>
        } />
      </Routes>
    </Layout>
  );
};

export default App;