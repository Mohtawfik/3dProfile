import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="https://github.com/Mohtawfik" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">Leetcode</a>
    </div>
  );
}

export default Footer;
