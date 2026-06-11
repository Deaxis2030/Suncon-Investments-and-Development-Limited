import React from 'react';

function Footer() {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h3 className="footer-title">Suncon</h3>
                        <p className="text-gray-200">Building quality homes for a better future.</p>
                    </div>
                    <div>
                        <h3 className="footer-title">Quick Links</h3>
                        <ul>
                            <li><a href="#home" className="footer-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
                            <li><a href="#projects" className="footer-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
                            <li><a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, '#about')}>About Us</a></li>
                            <li><a href="#news" className="footer-link" onClick={(e) => handleNavClick(e, '#news')}>News</a></li>
                            <li><a href="#contact" className="footer-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-title">Connect</h3>
                        <div className="social-links">
                            <button type="button" aria-label="Facebook" className="social-icon"><i className="fab fa-facebook"></i></button>
                            <button type="button" aria-label="Twitter" className="social-icon"><i className="fab fa-twitter"></i></button>
                            <button type="button" aria-label="Instagram" className="social-icon"><i className="fab fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Suncon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;