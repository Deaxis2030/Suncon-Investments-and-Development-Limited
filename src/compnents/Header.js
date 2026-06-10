import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu, showLoginModal } from '../store';

function Header() {
    const dispatch = useDispatch();
    const mobileMenuOpen = useSelector(state => state.mobileMenuOpen);
    const isLoggedIn = useSelector(state => state.isLoggedIn);

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

    const handleMembersClick = (e) => {
        e.preventDefault();
        dispatch(showLoginModal());
        dispatch(toggleMobileMenu()); // close mobile menu if open
    };

    return (
        <header>
            <div className="container header-inner">
                <div className="logo">
                    <div className="logo-icon">
                        <i className="fas fa-home"></i>
                    </div>
                    <h1 className="logo-text">Suncon</h1>
                </div>
                <nav className="desktop-nav">
                    <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                    <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                    <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
                    <a href="#news" className="nav-link" onClick={(e) => handleNavClick(e, '#news')}>News</a>
                    <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                    <a href="#members" className="nav-link" onClick={handleMembersClick}>{isLoggedIn ? 'Members ✓' : 'Members'}</a>
                </nav>
                <button onClick={handleMobileMenuToggle} className="mobile-menu-btn">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
                <a href="#news" className="nav-link" onClick={(e) => handleNavClick(e, '#news')}>News</a>
                <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                <a href="#members" className="nav-link" onClick={handleMembersClick}>{isLoggedIn ? 'Members ✓' : 'Members'}</a>
            </div>
        </header>
    );
}

export default Header;