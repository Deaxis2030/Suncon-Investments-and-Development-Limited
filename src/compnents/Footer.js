import React from 'react';

function Footer() {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        console.log(`Navigating to ${targetId}`);
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
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Suncon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;