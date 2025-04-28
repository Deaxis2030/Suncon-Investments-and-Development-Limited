import React from 'react';

function TestimonialsSection() {
    console.log('Rendering TestimonialsSection');
    return (
        <section id="testimonials" className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">What Our Clients Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Hear from our satisfied homeowners.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl card-shadow p-6">
                    <p className="text-gray-600 mb-4">"Suncon built our dream home with incredible attention to detail."</p>
                    <p className="text-blue-800 font-semibold">– Jane Doe</p>
                </div>
                <div className="bg-white rounded-xl card-shadow p-6">
                    <p className="text-gray-600 mb-4">"The team was professional and delivered on time."</p>
                    <p className="text-blue-800 font-semibold">– John Smith</p>
                </div>
                <div className="bg-white rounded-xl card-shadow p-6">
                    <p className="text-gray-600 mb-4">"We love the eco-friendly features of our new home."</p>
                    <p className="text-blue-800 font-semibold">– Emily Johnson</p>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;