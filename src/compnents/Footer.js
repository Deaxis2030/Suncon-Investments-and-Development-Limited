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
        <footer className="gradient-bg text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Suncon</h3>
                        <p className="text-gray-200">Building quality homes for a better future.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
                            <li><a href="#projects" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
                            <li><a href="#about" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#about')}>About Us</a></li>
                            <li><a href="#news" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#news')}>News</a></li>
                            <li><a href="#contact" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-2xl hover:text-blue-200 transition-all"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-2xl hover:text-blue-200 transition-all"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-2xl hover:text-blue-200 transition-all"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-200">
                    <p>© 2025 Suncon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;