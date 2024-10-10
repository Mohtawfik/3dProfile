import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Footers from './components/Footers';
import GLTFViewer from './components/GLTFViewer';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './App.css'; // Import global styles
import Experience from './components/Experience';
import SplineViewer from './components/SplineViewer'; // Adjust the path as necessary

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  // Function to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      const sectionTop = aboutSection.getBoundingClientRect().top;
      console.log(sectionTop, window.innerHeight);
      if (sectionTop <= window.innerHeight / 8) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Navbar show={showNavbar} />
      <div className="app">
        <Header />
        
        {/* GLTFViewer remains untouched */}
        <div className="app gltf-viewer-container">
          <GLTFViewer />
        </div>

        {/* Place SplineViewer here so it overlays everything except GLTFViewer */}
        {/* <SplineViewer /> */}

        <section id="about-section">
          <div className="app about-container">
            <About />
          </div>
          <div className="project-container">
            <Projects />
          </div>

          <div className="experience-container">
            <Experience />
          </div>
          <div className="contact-container">
            <ContactPage />
          </div>
          <div className="footer-container">
            <Footers />
          </div>
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
