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
        <section className="building-background min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Building Dreams, Creating Homes</h1>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                        Suncon transforms visions into reality with premium housing solutions that stand the test of time.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#projects"
                            onClick={(e) => handleCTAClick(e, '#projects')}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-center transition duration-300"
                        >
                            Our Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleCTAClick(e, '#contact')}
                            className="px-8 py-3 bg-white text-blue-800 hover:bg-gray-100 rounded-lg font-medium text-center transition duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-down-arrow">
                    <a href="#projects" onClick={(e) => handleCTAClick(e, '#projects')} className="text-white">
                        <i className="fas fa-chevron-down text-3xl"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;