import React from "react";
import "./projects.css";

const Projects = () => {
    return (
        <section className="projects" id="projects">
        <div className="projects__container">
            <h2 className="projects__title">My Projects</h2>
            <p className="projects__description">
            Here are some of the projects I have worked on, showcasing my skills in software development and design.
            </p>
            <ul className="projects__list">
            <li className="projects__item">Project 1: A web application built with React and Node.js.</li>
            <li className="projects__item">Project 2: A mobile app developed using React Native.</li>
            <li className="projects__item">Project 3: An e-commerce platform with a custom backend.</li>
            </ul>
        </div>
        </section>
    );
    }

export default Projects;