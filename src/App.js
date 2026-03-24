import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPageRoute from './pages/ContactPageRoute';
import './App.css';

const AppRoutes = () => {
  const { pathname } = useLocation();
  const showNavbar = pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPageRoute />} />
      </Routes>
      {pathname !== '/' && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </Router>
  );
};

export default App;
