import React, { useState, useCallback, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import GLTFViewer from '../components/GLTFViewer';
import HomeBottomBar from '../components/home/HomeBottomBar';
import AboutSheet from '../components/home/AboutSheet';
import ProjectsSheet from '../components/home/ProjectsSheet';
import ExperienceSheet from '../components/home/ExperienceSheet';
import { projects } from '../constants';
import './HomePage.css';

const HomePage = () => {
  const [introReady, setIntroReady] = useState(false);
  const [aboutSheetOpen, setAboutSheetOpen] = useState(false);
  const [projectsSheetOpen, setProjectsSheetOpen] = useState(false);
  const [experienceSheetOpen, setExperienceSheetOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleIntroComplete = useCallback(() => {
    setIntroReady(true);
  }, []);

  const openAboutSheet = useCallback(() => {
    setProjectsSheetOpen(false);
    setExperienceSheetOpen(false);
    setAboutSheetOpen(true);
  }, []);

  const closeAboutSheet = useCallback(() => {
    setAboutSheetOpen(false);
  }, []);

  const openProjectsSheet = useCallback(() => {
    setAboutSheetOpen(false);
    setExperienceSheetOpen(false);
    setProjectsSheetOpen(true);
  }, []);

  const closeProjectsSheet = useCallback(() => {
    setProjectsSheetOpen(false);
  }, []);

  const openExperienceSheet = useCallback(() => {
    setAboutSheetOpen(false);
    setProjectsSheetOpen(false);
    setExperienceSheetOpen(true);
  }, []);

  const closeExperienceSheet = useCallback(() => {
    setExperienceSheetOpen(false);
  }, []);

  useEffect(() => {
    if (!aboutSheetOpen && !projectsSheetOpen && !experienceSheetOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeAboutSheet();
        closeProjectsSheet();
        closeExperienceSheet();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [aboutSheetOpen, projectsSheetOpen, experienceSheetOpen, closeAboutSheet, closeProjectsSheet, closeExperienceSheet]);

  return (
    <div className="home-page">
      <HomeBottomBar
        introReady={introReady}
        reduceMotion={reduceMotion}
        onAboutClick={openAboutSheet}
        onProjectsClick={openProjectsSheet}
        onExperienceClick={openExperienceSheet}
      />
      <div className="gltf-viewer-container home-gltf">
        <GLTFViewer onIntroComplete={handleIntroComplete} reduceMotion={reduceMotion} />
      </div>
      <AboutSheet isOpen={aboutSheetOpen} onClose={closeAboutSheet} reduceMotion={reduceMotion} />
      <ProjectsSheet
        isOpen={projectsSheetOpen}
        onClose={closeProjectsSheet}
        reduceMotion={reduceMotion}
        projects={projects}
      />
      <ExperienceSheet isOpen={experienceSheetOpen} onClose={closeExperienceSheet} reduceMotion={reduceMotion} />
    </div>
  );
};

export default HomePage;
