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
                    {/* Using the latest updated transparent PNG logo from the logos folder */}
                    <img 
                        src="/images/logos/suncon-logo.png" 
                        alt="SunCon Investments & Development Ltd Logo" 
                        style={{ 
                            height: '48px', 
                            width: 'auto',
                            maxWidth: '48px',
                            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.35))' 
                        }} 
                    />
                    
                    <div style={{ marginLeft: '0.35rem' }}>
                        <h1 className="logo-text">SUNCON</h1>
                        <p style={{ 
                            fontSize: '0.62rem', 
                            color: 'var(--gold)', 
                            margin: 0, 
                            lineHeight: 1, 
                            letterSpacing: '1.3px',
                            opacity: 0.92 
                        }}>
                            INVESTMENTS & DEVELOPMENT LTD
                        </p>
                    </div>
                </div>
                
                <nav className="desktop-nav">
                    <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                    <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                    <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
                    <a href="#leadership" className="nav-link" onClick={(e) => handleNavClick(e, '#leadership')}>Leadership</a>
                    <a href="#news" className="nav-link" onClick={(e) => handleNavClick(e, '#news')}>News</a>
                    <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                    <a href="#members" className="nav-link" onClick={handleMembersClick}>
                        {isLoggedIn ? 'Members ✓' : 'Members'}
                    </a>
                </nav>
                
                <button onClick={handleMobileMenuToggle} className="mobile-menu-btn">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
                <a href="#leadership" className="nav-link" onClick={(e) => handleNavClick(e, '#leadership')}>Leadership</a>
                <a href="#news" className="nav-link" onClick={(e) => handleNavClick(e, '#news')}>News</a>
                <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                <a href="#members" className="nav-link" onClick={handleMembersClick}>
                    {isLoggedIn ? 'Members ✓' : 'Members'}
                </a>
            </div>
        </header>
    );
}

export default Header;