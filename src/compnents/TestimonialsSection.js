import React from 'react';

function TestimonialsSection() {
    console.log('Rendering TestimonialsSection');
    return (
        <section id="testimonials">
            <div className="section-header">
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">Hear from our satisfied homeowners.</p>
            </div>
            <div className="card-grid">
                <div className="card">
                    <p className="text-gray-600 mb-4">"Suncon built our dream home with incredible attention to detail."</p>
                    <p className="text-blue-800 font-semibold">– Jane Doe</p>
                </div>
                <div className="card">
                    <p className="text-gray-600 mb-4">"The team was professional and delivered on time."</p>
                    <p className="text-blue-800 font-semibold">– John Smith</p>
                </div>
                <div className="card">
                    <p className="text-gray-600 mb-4">"We love the eco-friendly features of our new home."</p>
                    <p className="text-blue-800 font-semibold">– Emily Johnson</p>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;