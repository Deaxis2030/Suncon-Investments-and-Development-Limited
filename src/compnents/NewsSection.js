import React from 'react';

function NewsSection() {
    console.log('Rendering NewsSection');
    return (
        <section id="news" className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Latest News</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with Suncon's latest developments and announcements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl card-shadow p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">New Project Launch</h3>
                    <p className="text-gray-600">We're excited to announce our latest project, opening in 2026!</p>
                </div>
                <div className="bg-white rounded-xl card-shadow p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Community Event</h3>
                    <p className="text-gray-600">Join us for a community open house this weekend.</p>
                </div>
                <div className="bg-white rounded-xl card-shadow p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Award Win</h3>
                    <p className="text-gray-600">Suncon wins Best Sustainable Design Award 2025.</p>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;