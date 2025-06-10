import React from "react";
import "./skills.css";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills__container">
                <h2 className="skills__title">My Skills</h2>
                <p className="skills__description">
                    I have a diverse skill set that includes web development, mobile app development, and software engineering. Here are some of the technologies I work with:
                </p>
                <ul className="skills__list">
                    <li className="skills__item">JavaScript</li>
                    <li className="skills__item">React</li>
                    <li className="skills__item">Node.js</li>
                    <li className="skills__item">Python</li>
                    <li className="skills__item">Django</li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;