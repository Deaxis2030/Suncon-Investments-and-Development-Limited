import React from 'react';

function HeroSection() {
    const handleCTAClick = (e, targetId) => {
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
        <section className="building-background">
            <div className="container hero-content">
                <div>
                    <h1 className="hero-title">Building Dreams, Creating Homes</h1>
                    <p className="hero-subtitle">
                        Suncon transforms visions into reality with premium housing solutions that stand the test of time.
                    </p>
                    <div className="hero-actions">
                        <a
                            href="#projects"
                            onClick={(e) => handleCTAClick(e, '#projects')}
                            className="btn btn-primary"
                        >
                            Our Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleCTAClick(e, '#contact')}
                            className="btn btn-secondary"
                        >
                            Get in Touch
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