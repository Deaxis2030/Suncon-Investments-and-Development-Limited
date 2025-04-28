import React from 'react';

function ProjectsSection() {
    return (
        <section id="projects" className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Projects</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Discover our latest developments designed for modern living.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="property-card bg-white rounded-xl card-shadow p-6 transition-all">
                    <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Sunset Villas</h3>
                    <p className="text-gray-600">Luxury villas with scenic views and eco-friendly designs.</p>
                </div>
                <div className="property-card bg-white rounded-xl card-shadow p-6 transition-all">
                    <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Urban Heights</h3>
                    <p className="text-gray-600">Modern apartments in the heart of the city.</p>
                </div>
                <div className="property-card bg-white rounded-xl card-shadow p-6 transition-all">
                    <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Green Meadows</h3>
                    <p className="text-gray-600">Family-friendly homes with spacious gardens.</p>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;