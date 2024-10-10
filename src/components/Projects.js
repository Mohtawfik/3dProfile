import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import './Projects.css';

const ProjectCard = ({ index, name, description, tags, image, hosted_link, isVisible }) => {
  return (
    <motion.div
      variants={fadeIn(index % 2 === 0 ? "left" : "right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"} // Animate based on visibility
    >
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-[#22222a] p-3 rounded-2xl sm:w-[450px] w-full">
        <div className="relative w-full h-full cursor-pointer" onClick={() => window.open(hosted_link, "_blank")}>
          <img src={image} alt="project-image" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="mt-5">
          <h3 className="text-[#d7d6dd] font-roboto font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[#d7d6dd] font-roboto text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] font-roboto text-[#ac7efb]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        } else {
          setIsVisible(false); // Optional: Reset visibility if not in view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <div id="projects" className="project-container" ref={projectsRef}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Work</h2>
      </motion.div>

      {/* Render all the project cards with animation based on visibility */}
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
