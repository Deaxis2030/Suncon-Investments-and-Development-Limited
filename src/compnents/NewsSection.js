import React from 'react';

function NewsSection() {
    return (
        <section id="news">
            <div className="section-header">
                <h2 className="section-title">Latest News</h2>
                <p className="section-subtitle">Stay updated with Suncon's latest developments and announcements.</p>
            </div>
            <div className="card-grid">
                <div className="card">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">New Project Launch</h3>
                    <p className="text-gray-600">We're excited to announce our latest project, opening in 2026!</p>
                </div>
                <div className="card">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Community Event</h3>
                    <p className="text-gray-600">Join us for a community open house this weekend.</p>
                </div>
                <div className="card">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Award Win</h3>
                    <p className="text-gray-600">Suncon wins Best Sustainable Design Award 2025.</p>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;