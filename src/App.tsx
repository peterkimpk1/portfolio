import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { projects } from './data/projects';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <Projects projects={projects} />
              <Skills />
            </>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;