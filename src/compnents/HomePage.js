import React from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import LeadershipSection from './LeadershipSection';
import TestimonialsSection from './TestimonialsSection';
import NewsSection from './NewsSection';
import ContactSection from './ContactSection';

function HomePage() {
    console.log('Rendering HomePage');
    return (
        <div id="home-page" className="container">
            <HeroSection />
            <ProjectsSection />
            <AboutSection />
            <LeadershipSection />
            <TestimonialsSection />
            <NewsSection />
            <ContactSection />
        </div>
    );
}

export default HomePage;