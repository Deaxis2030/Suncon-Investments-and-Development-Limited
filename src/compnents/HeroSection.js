import React from 'react';

function HeroSection() {
    const handleCTAClick = (e, targetId) => {
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
        <section className="building-background" id="home">
            <div className="container hero-content">
                <div>
                    <div className="company-name" style={{ marginBottom: '0.5rem', opacity: 0.9 }}>
                        SUNCON INVESTMENTS & DEVELOPMENT LTD
                    </div>
                    <h1 className="hero-title">Building Dreams,<br />Creating Legacy</h1>
                    <p className="hero-subtitle">
                        Premium real estate development and construction with integrity, excellence, and a deep responsibility toward the communities we serve.
                    </p>
                    <div className="hero-actions">
                        <a
                            href="#projects"
                            onClick={(e) => handleCTAClick(e, '#projects')}
                            className="btn btn-primary"
                        >
                            Explore Our Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleCTAClick(e, '#contact')}
                            className="btn btn-secondary"
                        >
                            Partner With Us
                        </a>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <a href="#projects" onClick={(e) => handleCTAClick(e, '#projects')}>
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;