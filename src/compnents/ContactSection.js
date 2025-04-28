import React from 'react';

function ContactSection() {
    return (
        <section id="contact" className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Contact us today!</p>
            </div>
            <div className="bg-white rounded-xl card-shadow p-8 max-w-2xl mx-auto">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;