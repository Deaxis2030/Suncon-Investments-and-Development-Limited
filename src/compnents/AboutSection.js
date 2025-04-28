import React from 'react';

function AboutSection() {
    return (
        <section id="about" className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Learn more about our mission and values.</p>
            </div>
            <div className="bg-white rounded-xl card-shadow p-8">
                <p className="text-gray-600 mb-4">
                    Suncon is dedicated to creating high-quality, sustainable homes that enhance communities. With over 20 years of experience, we combine innovative design with environmentally responsible practices.
                </p>
                <p className="text-gray-600">
                    Our team is passionate about delivering exceptional living spaces that meet the needs of modern families.
                </p>
            </div>
        </section>
    );
}

export default AboutSection;