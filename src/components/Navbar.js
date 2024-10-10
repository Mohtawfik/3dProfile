import React from 'react';
import './Navbar.css';

const Navbar = ({ show }) => {
  return (
    
    <div className={`navbar ${show ? 'visible' : ''}`}>
        <div className="navbar-header">
          <a href="">
          <img src={`${process.env.PUBLIC_URL}/logo_white.svg`} alt="Logo" className="logo" />
          </a>
            {/* <h1>Tawfik</h1> */}
        </div>
        <nav>
            <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://tawfik-3yoe-resume.tiiny.site" target='blank'>Resume</a></li>
            </ul>
        </nav>
    </div>

    // <header className={`navbar ${show ? 'visible' : ''}`}>
    //   <nav>
    //     <div className="navbar-header">
    //       <a className="navbar-brand" href="#">Tawfik</a>
    //     </div>
    //     <ul className="navbar-links">
    //       <li><a href="#about-section">About</a></li>
    //       <li><a href="#projects">Projects</a></li>
    //       <li><a href="#contact">Github</a></li>
    //       <li><a href="#contact">LeetCode</a></li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Navbar;