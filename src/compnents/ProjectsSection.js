import React from 'react';

function ProjectsSection() {
    return (
        <section id="projects">
            <div className="section-header">
                <h2 className="section-title">Our Projects</h2>
                <p className="section-subtitle">Discover our latest developments designed for modern living.</p>
            </div>
            <div className="card-grid">
                <div className="property-card card">
                    <div className="project-image-placeholder"></div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Skyline Apartments</h3>
                    <p className="text-gray-600">Modern, affordable apartments featuring quality finishes and convenient urban living.</p>
                </div>
                <div className="property-card card">
                    <div className="project-image-placeholder"></div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Urban Heights</h3>
                    <p className="text-gray-600">Modern apartments in the heart of the city.</p>
                </div>
                <div className="property-card card">
                    <div className="project-image-placeholder"></div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Green Meadows</h3>
                    <p className="text-gray-600">Family-friendly homes with spacious gardens.</p>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;