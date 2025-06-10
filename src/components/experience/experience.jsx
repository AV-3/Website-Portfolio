import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <section className="experience" id="experience">
        <div className="experience__container">
            <h2 className="experience__title">My Experience</h2>
            <p className="experience__description">
            Over the years, I have had the opportunity to work on various projects that have honed my skills and expanded my knowledge in software development.
            </p>
            <ul className="experience__list">
            <li className="experience__item">Developed web applications using React and Node.js.</li>
            <li className="experience__item">Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
            <li className="experience__item">Implemented responsive design principles to enhance user experience across devices.</li>
            </ul>
        </div>
        </section>
    );
    }
    
export default Experience;