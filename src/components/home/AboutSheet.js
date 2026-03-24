import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EASE_OUT = [0.22, 1, 0.36, 1];

const AboutSheet = ({ isOpen, onClose, reduceMotion }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            className="about-sheet-backdrop"
            aria-label="Close about panel"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: EASE_OUT }}
          />
          <motion.aside
            className="about-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="About me"
            initial={reduceMotion ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0.7 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { y: 0, opacity: 0 } : { y: '100%', opacity: 0.7 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: EASE_OUT }}
          >
            <div className="about-sheet-handle" aria-hidden />
            <div className="about-sheet-content">
              <button
                type="button"
                className="about-sheet-close"
                onClick={onClose}
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
                    I&apos;m a skilled software engineer with a <strong className="about-sheet-text-strong">5 years</strong> of
                    experience, building systems that scale and experiences that do not feel boring.
                  </p>
                  <p className="about-sheet-text">
                    I work across <strong className="about-sheet-text-strong">backend</strong>,{' '}
                    <strong className="about-sheet-text-strong">machine learning</strong>, and{' '}
                    <strong className="about-sheet-text-strong">3D graphics</strong> to turn ideas into products that ship.
                  </p>
                  <p className="about-sheet-text">
                    I care deeply about <strong className="about-sheet-text-strong">clean code</strong>,{' '}
                    <strong className="about-sheet-text-strong">good design</strong>, and{' '}
                    <strong className="about-sheet-text-strong">fast iteration</strong>.
                  </p>
                  <p className="about-sheet-text">
                    Outside work I enjoy <strong className="about-sheet-text-strong">poetry</strong>,{' '}
                    <strong className="about-sheet-text-strong">football</strong>, and{' '}
                    <strong className="about-sheet-text-strong">cats</strong>.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutSheet;
