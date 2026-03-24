import React from 'react';
import { motion } from 'framer-motion';
import HomeWordmark from '../HomeWordmark';
import Footer from '../Footer';

const EASE_OUT = [0.22, 1, 0.36, 1];

const HomeBottomBar = ({ introReady, reduceMotion, onAboutClick, onProjectsClick, onExperienceClick }) => {
  const wordmarkTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: EASE_OUT };

  const ruleTransition = reduceMotion
    ? { duration: 0 }
    : { delay: 0.72, duration: 0.75, ease: EASE_OUT };

  return (
    <div className="home-bottom-bar">
      <div className="home-bottom-bar-row">
        <motion.div
          className="home-wordmark-motion"
          initial={{ x: -72, opacity: 0 }}
          animate={introReady ? { x: 0, opacity: 1 } : { x: -72, opacity: 0 }}
          transition={wordmarkTransition}
        >
          <HomeWordmark />
        </motion.div>
        <Footer
          introReady={introReady}
          reduceMotion={reduceMotion}
          onAboutClick={onAboutClick}
          onProjectsClick={onProjectsClick}
          onExperienceClick={onExperienceClick}
        />
      </div>
      <motion.div
        className="home-bottom-rule"
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        animate={introReady ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={ruleTransition}
        style={{ transformOrigin: 'left center' }}
      />
    </div>
  );
};

export default HomeBottomBar;
