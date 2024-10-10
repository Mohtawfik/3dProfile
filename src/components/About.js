import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="about-container">
      {/* <h1>About Me</h1> */}
      {/* <p>Hi, I'm Tawfik, a passionate developer working on building amazing web experiences!</p>
      <p>I specialize in creating dynamic, user-friendly websites and applications using modern technologies like React and Three.js.</p> */}
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
            I'm a skilled software engineer and I have recently completed a <strong>Master of Science</strong>, majoring in Computing and Software Engineering at Epita.<br/><br/>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        I have a passion for all things technology and design, from software engineering & machine learning to 3D graphics.. In addition to my love of technology and design, I am also interested in Education, Football and Cats. Below are details of some of projects I have developed over my 10 plus years of coding experience.
      </motion.p>
    </div>
  );
};

export default About;


