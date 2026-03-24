import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EASE_OUT = [0.22, 1, 0.36, 1];

const ExperienceSheet = ({ isOpen, onClose, reduceMotion }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            className="about-sheet-backdrop"
            aria-label="Close experience panel"
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
            aria-label="Experience"
            initial={reduceMotion ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0.7 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { y: 0, opacity: 0 } : { y: '100%', opacity: 0.7 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: EASE_OUT }}
          >
            <div className="about-sheet-handle" aria-hidden />
            <div className="about-sheet-content experience-sheet-content">
              <button
                type="button"
                className="about-sheet-close"
                onClick={onClose}
                aria-label="Close experience panel"
              >
                &times;
              </button>
              <div className="experience-sheet-layout">
                <div className="about-sheet-copy experience-sheet-copy">
                  <h2 className="about-sheet-title">Experience</h2>
                  <div className="experience-mosaic">
                    <article className="experience-tile experience-tile--small">
                      <h3 className="experience-tile-label">Code Reviews Done</h3>
                      <p className="experience-tile-meta">Mentoring and review culture across teams.</p>
                      <p className="experience-tile-value">350+</p>
                    </article>
                    <article className="experience-tile experience-tile--accent">
                      <h3 className="experience-tile-label">Workflow Impact</h3>
                      <p className="experience-tile-meta">Admin task time reduced via dashboard workflows.</p>
                      <p className="experience-tile-value">30% Faster</p>
                    </article>
                    <article className="experience-tile experience-tile--hero">
                      <h3 className="experience-tile-label">Backend Migration</h3>
                      <p className="experience-tile-value">40% Throughput</p>
                      <p className="experience-tile-meta">
                        Django to AdonisJS/Node.js migration with TypeScript rollout and 25% lower API latency.
                      </p>
                    </article>
                    <article className="experience-tile experience-tile--stack">
                      <div>
                        <h3 className="experience-tile-label">Ingestion Scale</h3>
                        <p className="experience-tile-value">10k+/day</p>
                      </div>
                      <div>
                        <h3 className="experience-tile-label">Data Loss</h3>
                        <p className="experience-tile-value">&lt;1%</p>
                      </div>
                    </article>
                  </div>
                  <div className="experience-company-list">
                    <section className="experience-company-row">
                      <div className="experience-company-period">
                        <span className="experience-company-dot" aria-hidden />
                        2025-Present
                      </div>
                      <div className="experience-company-main">
                        <h3 className="experience-company-title">MAUNA AI</h3>
                        <p className="about-sheet-text">
                          Led end-to-end development of internal dashboard and back-office React application, migrated
                          backend services from Django to AdonisJS/Node.js, and delivered resilient telemetry ingestion
                          for Whoop and Garmin data streams.
                        </p>
                        <div className="experience-company-tags" aria-label="Mauna AI technologies">
                          <span className="experience-company-tag">#Flutter</span>
                          <span className="experience-company-tag">#AdonisJS</span>
                          <span className="experience-company-tag">#Django</span>
                          <span className="experience-company-tag">#TypeScript</span>
                          <span className="experience-company-tag">#React</span>
                        </div>
                      </div>
                    </section>
                    <section className="experience-company-row">
                      <div className="experience-company-period">
                        <span className="experience-company-dot" aria-hidden />
                        2020-2024
                      </div>
                      <div className="experience-company-main">
                        <h3 className="experience-company-title">ZOHO</h3>
                        <p className="about-sheet-text">
                          Increased system flexibility through data type support enhancements, architected shared-data
                          capabilities across data centers, and improved team productivity through mentoring and code
                          review practices.
                        </p>
                        <div className="experience-company-tags" aria-label="Zoho technologies">
                          <span className="experience-company-tag">#Java</span>
                          <span className="experience-company-tag">#DistributedSystems</span>
                          <span className="experience-company-tag">#CodeReview</span>
                          <span className="experience-company-tag">#DataPlatforms</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExperienceSheet;
