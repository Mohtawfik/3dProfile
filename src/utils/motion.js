// utils/motion.js

export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: type,
        duration: duration,
        delay: delay,
      },
    },
  };
};

  
  export const textVariant = () => {
    return {
      initial: { opacity: 0, y: 50 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75 },
      },
    };
  };
  