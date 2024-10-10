import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GLTFViewer from './GLTFViewer';
import About from './About';
import './MainPage.css'; // Custom CSS for layout

const MainPage = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="gltf-container">
        <GLTFViewer />
      </div>
      <Footer />
      {/* Below section for the about part */}
      <div className="about-section">
        <About />
      </div>
    </div>
  );
}

export default MainPage;