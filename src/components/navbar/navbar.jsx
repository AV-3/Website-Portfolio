import React from 'react';
import './navbar.css';
import LogoImage from '../../assets/av-high-resolution-logo-color-on-transparent-background.png';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar__container">
            <a href="#hero" className="navbar__logo"><img src={LogoImage} alt="Alan Velez" /></a>
            <ul className="navbar__menu">
            <li className="navbar__item"><a href="#hero" className="navbar__link">Home</a></li>
            <li className="navbar__item"><a href="#about" className="navbar__link">About</a></li>
            <li className="navbar__item"><a href="#skills" className="navbar__link">Skills</a></li>
            <li className="navbar__item"><a href="#projects" className="navbar__link">Projects</a></li>
            <li className="navbar__item"><a href="#experience" className="navbar__link">Experience</a></li>
            <li className="navbar__item"><a href="#contact" className="navbar__link">Contact</a></li>
            </ul>
        </div>
        </nav>
    );
    }

export default Navbar;