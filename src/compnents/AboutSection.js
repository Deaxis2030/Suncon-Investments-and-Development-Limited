import React from 'react';

function AboutSection() {
    return (
        <section id="about">
            <div className="section-header">
                <h2 className="section-title">About Us</h2>
                <p className="section-subtitle">Learn more about our mission and values.</p>
            </div>
            <div className="card">
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