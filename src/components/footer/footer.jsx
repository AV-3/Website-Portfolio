import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <section className="footer" id="footer">
        <div className="footer__container">
            <h2 className="footer__title">My footer</h2>
            <p className="footer__description">
            Over the years, I have had the opportunity to work on various projects that have honed my skills and expanded my knowledge in software development.
            </p>
            <ul className="footer__list">
            <li className="footer__item">Developed web applications using React and Node.js.</li>
            <li className="footer__item">Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
            <li className="footer__item">Implemented responsive design principles to enhance user footer across devices.</li>
            </ul>
        </div>
        </section>
    );
    }
    
export default Footer;