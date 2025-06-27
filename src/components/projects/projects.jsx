import React from "react";
import "./projects.css";

const Projects = () => {
    return (
        <section className="projects" id="projects">
        <div className="projects__container">
            <h2 className="projects__title">My Projects</h2>
            <div className="projects__list__container">
                <ul className="projects__list">
                    <li className="projects__list__item">Project 1: Placeholder for Autonomous Rover Navigation Project.</li>
                    <li className="projects__list__item">Project 2: Satellite Imagery Analysis with Machine Learning Project</li>
                    <li className="projects__list__item">Project 3: Sensor Fusion for Vehicle State Estimation Project</li>
                </ul>
            </div>
        </div>
        </section>
    );
    }

export default Projects;