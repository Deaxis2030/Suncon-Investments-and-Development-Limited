import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu } from '../store';

function Header() {
    const dispatch = useDispatch();
    const mobileMenuOpen = useSelector(state => state.mobileMenuOpen);

    const handleMobileMenuToggle = () => {
        dispatch(toggleMobileMenu());
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        console.log(`Navigating to ${targetId}`);
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            dispatch(toggleMobileMenu());
        }
    };

    return (
        <header className="gradient-bg text-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <i className="fas fa-home text-blue-800 text-xl"></i>
                    </div>
                    <h1 className="text-2xl font-bold">Suncon</h1>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                    <a href="#projects" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                    <a href="#about" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
                    <a href="#news" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#news')}>News</a>
                    <a href="#contact" className="hover:text-blue-200 transition-all" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                </nav>
                <button onClick={handleMobileMenuToggle} className="md:hidden text-white focus:outline-none">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
            <div className={`gradient-bg w-full px-4 pb-4 md:hidden ${mobileMenuOpen ? '' : 'hidden'}`}>
                <div className="flex flex-col space-y-3">
                    <a href="#home" className="text-white hover:bg-blue-700 px-3 py-2 rounded" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                    <a href="#projects" className="text-white hover:bg-blue-700 px-3 py-2 rounded" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                    <a href="#about" className="text-white hover:bg-blue-700 px-3 py-2 rounded" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
                    <a href="#news" className="text-white hover:bg-blue-700 px-3 py-2 rounded" onClick={(e) => handleNavClick(e, '#news')}>News</a>
                    <a href="#contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                </div>
            </div>
        </header>
    );
}

export default Header;