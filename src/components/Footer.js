import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const MotionLink = motion(Link);

const Footer = ({ layout, introReady, reduceMotion, onAboutClick }) => {
  const className = layout === 'home' ? 'footer footer--home' : 'footer';

  const itemTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: itemTransition,
    },
  };

  if (layout === 'home') {
    const containerVariants = {
      hidden: {},
      show: {
        transition: reduceMotion
          ? {}
          : {
              staggerChildren: 0.1,
              delayChildren: 0.78,
            },
      },
    };

    return (
      <motion.div
        className="footer-home-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={introReady ? 'show' : 'hidden'}
      >
        <motion.div className="footer-socials" variants={itemVariants}>
          <a
            href="https://www.instagram.com/iamtawfy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-social-icon">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8a3.7 3.7 0 0 0-3.7 3.7v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm10.05 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/iamtawfy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-social-icon">
              <path d="M5.2 3A2.2 2.2 0 1 1 3 5.2 2.2 2.2 0 0 1 5.2 3ZM3.4 8.2H7v12.4H3.4Zm5.8 0h3.4v1.7h.05A3.8 3.8 0 0 1 16 8c3.6 0 4.3 2.4 4.3 5.5v7.1h-3.6v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.4H9.2Z" />
            </svg>
          </a>
        </motion.div>
        <motion.div className={className} variants={itemVariants}>
          <motion.button
            type="button"
            onClick={onAboutClick}
            className="footer-action-link"
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            About
          </motion.button>
          <MotionLink to="/projects">Projects</MotionLink>
          <a href="https://github.com/Mohtawfik" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            Leetcode
          </a>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <a href="https://github.com/Mohtawfik" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
        Leetcode
      </a>
    </div>
  );
};

export default Footer;
