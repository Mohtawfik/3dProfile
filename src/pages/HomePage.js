import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import GLTFViewer from '../components/GLTFViewer';
import HomeWordmark from '../components/HomeWordmark';
import Footer from '../components/Footer';
import './HomePage.css';

const easeOut = [0.22, 1, 0.36, 1];

const HomePage = () => {
  const [introReady, setIntroReady] = useState(false);
  const [aboutSheetOpen, setAboutSheetOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleIntroComplete = useCallback(() => {
    setIntroReady(true);
  }, []);

  const openAboutSheet = useCallback(() => {
    setAboutSheetOpen(true);
  }, []);

  const closeAboutSheet = useCallback(() => {
    setAboutSheetOpen(false);
  }, []);

  useEffect(() => {
    if (!aboutSheetOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeAboutSheet();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [aboutSheetOpen, closeAboutSheet]);

  const wordmarkTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: easeOut };

  const ruleTransition = reduceMotion
    ? { duration: 0 }
    : { delay: 0.72, duration: 0.75, ease: easeOut };

  return (
    <div className="home-page">
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
            layout="home"
            introReady={introReady}
            reduceMotion={reduceMotion}
            onAboutClick={openAboutSheet}
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
      <div className="gltf-viewer-container home-gltf">
        <GLTFViewer onIntroComplete={handleIntroComplete} reduceMotion={reduceMotion} />
      </div>
      <AnimatePresence>
        {aboutSheetOpen && (
          <>
            <motion.button
              type="button"
              className="about-sheet-backdrop"
              aria-label="Close about panel"
              onClick={closeAboutSheet}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: easeOut }}
            />
            <motion.aside
              className="about-sheet"
              role="dialog"
              aria-modal="true"
              aria-label="About me"
              initial={reduceMotion ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0.7 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduceMotion ? { y: 0, opacity: 0 } : { y: '100%', opacity: 0.7 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: easeOut }}
            >
              <div className="about-sheet-handle" aria-hidden />
              <div className="about-sheet-content">
                <button
                  type="button"
                  className="about-sheet-close"
                  onClick={closeAboutSheet}
                  aria-label="Close about panel"
                >
                  &times;
                </button>
                <div className="about-sheet-grid">
                  <div className="about-sheet-media">
                    <div className="about-sheet-photo-frame">
                      <img
                        src={`${process.env.PUBLIC_URL}/iam_software_dev.JPG`}
                        alt="Tawfik portrait"
                        className="about-sheet-photo"
                      />
                    </div>
                  </div>
                  <div className="about-sheet-copy">
                    <h2 className="about-sheet-title">About Me</h2>
                    <p className="about-sheet-text">
                      I&apos;m a skilled software engineer with a <strong className="about-sheet-text-strong">5 years</strong> of experience,
                      building systems that scale and experiences that don’t feel boring.
                    </p>
                    <p className="about-sheet-text">
                    I work across <strong className="about-sheet-text-strong">backend</strong>, <strong className="about-sheet-text-strong">machine learning</strong>, and <strong className="about-sheet-text-strong">3D graphics</strong> — basically anything that lets me turn ideas into something real and impactful.
                    </p>
                    <p className="about-sheet-text">
                    I&apos;m obsessed with <strong className="about-sheet-text-strong">clean code</strong>, <strong className="about-sheet-text-strong">good design</strong>, and <strong className="about-sheet-text-strong">figuring things out fast</strong>.
                    </p>
                    <p className="about-sheet-text">
                    When I’m not coding: <strong className="about-sheet-text-strong">Poetry</strong>, <strong className="about-sheet-text-strong">Football</strong> and <strong className="about-sheet-text-strong">Cats</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
