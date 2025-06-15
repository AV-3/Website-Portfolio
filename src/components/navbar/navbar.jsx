import {useState} from 'react';
import './navbar.css';
import LogoImage from '../../assets/av-high-resolution-logo-color-on-transparent-background.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
        <div className="navbar__container">
            <a href="#hero" className="navbar__logo" onClick={closeMobileMenu}><img src={LogoImage} alt="Alan Velez" /></a>

            <button className={`hamburger__menu ${isMenuOpen ? 'is-open' : ''}`} onClick={toggleMenu}>
              <div className="hamburger__bar"></div>
              <div className="hamburger__bar"></div>
              <div className="hamburger__bar"></div>
            </button>

            <ul className={`navbar__menu ${isMenuOpen ? 'is-open' : ''}`}>
            <li className="navbar__item"><a href="#hero" className="navbar__link" onClick={closeMobileMenu}>Home</a></li>
            <li className="navbar__item"><a href="#about" className="navbar__link" onClick={closeMobileMenu}>About</a></li>
            <li className="navbar__item"><a href="#experience" className="navbar__link" onClick={closeMobileMenu}>Experience</a></li>
            <li className="navbar__item"><a href="#skills" className="navbar__link" onClick={closeMobileMenu}>Skills</a></li>
            <li className="navbar__item"><a href="#projects" className="navbar__link" onClick={closeMobileMenu}>Projects</a></li>
            <li className="navbar__item"><a href="#contact" className="navbar__link" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
        </div>
        </nav>
    );
    }

export default Navbar;