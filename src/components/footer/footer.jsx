import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <section className="footer" id="footer">
        <div className="footer__container">
            <p className="footer__credits">
                Designed and Developed by <a href="#hero">Alan Velez</a>
            </p>
            <p className="footer__copyright">
                © Copyright 2025. All rights reserved.
            </p>
        </div>
        </section>
    );
    }
    
export default Footer;