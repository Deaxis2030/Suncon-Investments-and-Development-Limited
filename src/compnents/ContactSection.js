import React from 'react';

function ContactSection() {
    return (
        <section id="contact">
            <div className="section-header">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">We'd love to hear from you. Contact us today!</p>
            </div>
            <div className="card" style={{ maxWidth: '42rem', margin: '0 auto' }}>
                <div>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="form-input"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="form-textarea"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <button className="btn btn-primary btn-block">
                        Send Message
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;