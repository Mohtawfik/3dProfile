import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import './Experience.css'; // Make sure to include the CSS file.

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      {/* Heading */}
      <motion.h2
        className="experience-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <div className="experience-content">
        {/* Left Column: Stats */}
        <div className="left-column">
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="stat-number">
              <CountUp start={40} end={99} duration={3} delay={0.5} />%
            </div>
            <span className="stat-label">Code Efficiency</span>
          </motion.div>

          <motion.div
            className="stat-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="stat-number">
              <CountUp start={899} end={999} duration={3} delay={0.5} /> +
            </div>
            <span className="stat-label">Commits Pushed</span>
          </motion.div>

          <motion.div
            className="stat-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="stat-number">
              <CountUp start={0} end={50} duration={3} delay={0.5} /> +
            </div>
            <span className="stat-label">Code Reviews Done</span>
          </motion.div>

          <motion.div
            className="stat-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="stat-number">
              <CountUp start={400} end={500} duration={3} delay={0.5} /> +
            </div>
            <span className="stat-label">Bugs Fixed</span>
          </motion.div>

          
        </div>

        {/* Right Column: Role Information */}
        <div className="right-column">
          <motion.h3
            className="role-company"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Zoho Corporation
          </motion.h3>
          <motion.p
            className="role-title"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Software Engineer | CRM | 4YOE
          </motion.p>
          <motion.p
            className="role-description"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contributed to the development and optimization of CRM solutions,
            focusing on building user-friendly features and improving performance. Collaborated with cross-functional teams to enhance the product’s impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
