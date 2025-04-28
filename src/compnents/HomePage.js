import React from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';
import NewsSection from './NewsSection';
import ContactSection from './ContactSection';

function HomePage() {
    console.log('Rendering HomePage');
    return (
        <div id="home-page" className="container mx-auto px-6">
            <HeroSection />
            <ProjectsSection />
            <AboutSection />
            <TestimonialsSection />
            <NewsSection />
            <ContactSection />
        </div>
    );
}

export default HomePage;