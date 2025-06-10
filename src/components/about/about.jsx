import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__description">
          I am a passionate software developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to make a positive impact through technology.
        </p>
        <p className="about__description">
          With experience in various programming languages and frameworks, I enjoy tackling challenges and continuously learning new skills to enhance my craft.
        </p>
      </div>
    </section>
  );
}

export default About;