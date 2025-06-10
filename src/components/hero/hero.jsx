import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <h1 className="hero__title">Welcome to My Portfolio</h1>
        <p className="hero__description">
          I am a passionate software developer with a love for creating innovative solutions. Explore my work and let's connect!
        </p>
        <a href="#contact" className="hero__button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Hero;