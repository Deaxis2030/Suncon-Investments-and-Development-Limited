import React, { useState } from 'react';

function ContactSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do not send anything — site is decorative for now
        setResponse(
            "Website is currently down for maintenance. We apologize for the inconvenience. Please try again later."
        );
        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    const dismissResponse = () => {
        setResponse(null);
    };

    return (
        <section id="contact">
            <div className="section-header">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">We'd love to hear from you. Contact us today!</p>
            </div>
            <div className="card" style={{ maxWidth: '42rem', margin: '0 auto' }}>
                {response ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '2rem 1rem'
                    }}>
                        <div style={{
                            fontSize: '3rem',
                            marginBottom: '1rem',
                            color: 'var(--gold)'
                        }}>
                            <i className="fas fa-tools"></i>
                        </div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
                            Thank you for your message
                        </h3>
                        <p style={{
                            color: 'var(--secondary-text)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem'
                        }}>
                            {response}
                        </p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={dismissResponse}
                        >
                            Got it
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="form-input"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="form-textarea"
                                placeholder="Your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default ContactSection;