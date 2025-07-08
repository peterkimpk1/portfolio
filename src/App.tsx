import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { projects } from './data/projects';
import { useScrollToSection } from './hooks/useScrollToSection';

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.VITE_PROD === 'production' ? '/portfolio' : ''}>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
};

export default App;