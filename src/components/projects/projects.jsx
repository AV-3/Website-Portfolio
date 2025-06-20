import React from "react";
import "./projects.css";

const Projects = () => {
    return (
        <section className="projects" id="projects">
        <div className="projects__container">
            <h2 className="projects__title">My Projects</h2>
            <ul className="projects__list">
                <li className="projects__list__item">Project 1: Placeholder for embedded systems project.</li>
                <li className="projects__list__item">Project 2: Placeholder for robotics project</li>
                <li className="projects__list__item">Project 3: Placeholder for AI/ML project</li>
            </ul>
        </div>
        </section>
    );
    }

export default Projects;