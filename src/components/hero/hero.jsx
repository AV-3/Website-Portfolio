import { useState, useEffect } from "react";
import {motion, AnimatePresence} from "framer-motion";
import "./hero.css";

const subtitles = [
  "Software Engineer",
  "Graduate CS Student @ Georgia Tech",
  "U.S. Air Force Veteran"
];

const gradientClasses = [
  "engineer-text",
  "mscs-text",
  "veteran-text"
];

const Hero = () => {
    // 4. State to hold the index of the current subtitle
  const [currentIndex, setCurrentIndex] = useState(0);

  // 5. useEffect to set up the interval
  useEffect(() => {
    // This function will be called by the interval
    const rotateSubtitles = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % subtitles.length);
    };

    // Set up an interval to rotate subtitles every 3 seconds (3000 milliseconds)
    const intervalId = setInterval(rotateSubtitles, 2000);

    // IMPORTANT: Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty array [] means this effect runs only once on mount

  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <p className = "hero__greeting">Hi, my name is </p>
        <h1 className="hero__title">Alan Velez</h1>
        <p className = "hero__greeting">I'm a :</p>
        <div className="hero__subtitle-container">
          <AnimatePresence mode="wait">
            <motion.h3
              // 1. The key is CRUCIAL for AnimatePresence to work
              key={subtitles[currentIndex]}

              // 2. Animation properties
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}

              className={`hero__subtitle text-gradient ${gradientClasses[currentIndex]}`}
            >
              {subtitles[currentIndex]}
            </motion.h3>
          </AnimatePresence>
        </div>
        
        <p className="hero__description">
          with professional experience
          building solutions on the Microsoft stack (C#, .NET, Azure). Now specializing in 
          Computational Perception and Robotics at <a href="https://www.gatech.edu/" target="_blank" rel="noreferrer" className="hero__highlight__gold">Georgia Institute of Technology</a>
          <span> </span> to develop high-performing intelligent systems.
        </p>
        <div className="hero__buttons">
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
          <a href="#about" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;