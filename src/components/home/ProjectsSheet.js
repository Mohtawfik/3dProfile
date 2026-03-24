import React, { useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EASE_OUT = [0.22, 1, 0.36, 1];

const ProjectsSheet = ({ isOpen, onClose, reduceMotion, projects }) => {
  const railRef = useRef(null);
  const impactCopy = [
    'Built for production-grade reliability and maintainability.',
    'Designed with a strong emphasis on developer velocity.',
    'Focused on clean architecture and scalable service boundaries.',
    'Optimized for smooth UX with pragmatic system design.',
  ];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !isOpen) return undefined;

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      rail.scrollLeft += event.deltaY;
    };

    rail.addEventListener('wheel', onWheel, { passive: false });
    return () => rail.removeEventListener('wheel', onWheel);
  }, [isOpen]);

  const scrollRail = useCallback((direction) => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.max(260, Math.round(rail.clientWidth * 0.7));
    rail.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            className="about-sheet-backdrop"
            aria-label="Close projects panel"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: EASE_OUT }}
          />
          <motion.aside
            className="projects-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Projects"
            initial={reduceMotion ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0.7 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { y: 0, opacity: 0 } : { y: '100%', opacity: 0.7 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.52, ease: EASE_OUT }}
          >
            <div className="projects-sheet-handle" aria-hidden />
            <div className="projects-sheet-content">
              <div className="projects-sheet-header">
                <h2 className="projects-sheet-title">My Work</h2>
                <button
                  type="button"
                  className="projects-sheet-close"
                  onClick={onClose}
                  aria-label="Close projects panel"
                >
                  &times;
                </button>
              </div>
              <button
                type="button"
                className="projects-sheet-nav projects-sheet-nav--left"
                onClick={() => scrollRail(-1)}
                aria-label="Scroll projects left"
              >
                ←
              </button>
              <button
                type="button"
                className="projects-sheet-nav projects-sheet-nav--right"
                onClick={() => scrollRail(1)}
                aria-label="Scroll projects right"
              >
                →
              </button>
              <div className="projects-sheet-list" ref={railRef}>
                {projects.map((project, index) => (
                  <article key={project.name} className="projects-sheet-card">
                    <div className="projects-sheet-card-body">
                      <h3 className="projects-sheet-card-title">{project.name}</h3>
                      <div className="projects-mosaic">
                        <section className="projects-tile projects-tile--hero">
                          <p className="projects-tile-kicker">Flagship Build</p>
                          <p className="projects-sheet-card-text">{project.description}</p>
                        </section>

                        <section className="projects-tile projects-tile--impact">
                          <p className="projects-tile-kicker">Impact</p>
                          <p className="projects-tile-copy">{impactCopy[index % impactCopy.length]}</p>
                        </section>

                        <section className="projects-tile projects-tile--focus">
                          <p className="projects-tile-kicker">Role Focus</p>
                          <p className="projects-tile-copy">End-to-end ownership from architecture to shipping.</p>
                        </section>

                        <section className="projects-tile projects-tile--architecture">
                          <p className="projects-tile-kicker">Architecture</p>
                          <p className="projects-tile-copy">
                            {project.tags.slice(0, 3).map((tag) => tag.name).join(' -> ') || 'App -> API -> Data'}
                          </p>
                        </section>

                        <section className="projects-tile projects-tile--tags">
                          <p className="projects-tile-kicker">Stack</p>
                          <div className="projects-sheet-tags">
                            {project.tags.map((tag) => (
                              <span key={`${project.name}-${tag.name}`} className="projects-sheet-tag">
                                #{tag.name}
                              </span>
                            ))}
                          </div>
                        </section>

                        <section className="projects-tile projects-tile--links">
                          <p className="projects-tile-kicker">Explore</p>
                          {project.hosted_link ? (
                            <a
                              href={project.hosted_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="projects-tile-link"
                            >
                              Live Demo
                            </a>
                          ) : (
                            <p className="projects-tile-copy">Private build - details available on request.</p>
                          )}
                        </section>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectsSheet;
