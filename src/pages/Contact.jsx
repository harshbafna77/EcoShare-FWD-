import React, { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, this would send data to a backend
    };

    if (submitted) {
        return (
            <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
                <div className="card" style={{ padding: '4rem', display: 'inline-block', maxWidth: '500px' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✉️</div>
                    <h2 style={{ marginBottom: '1rem' }}>Message Received!</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Thank you for reaching out to EcoShare. Our team will get back to you within 24-48 hours.
                    </p>
                    <button className="btn btn-primary" onClick={() => (window.location.href = '/')}>
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get in <span className="text-gradient">Touch</span></h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                    Have questions or suggestions? We'd love to hear from you.
                </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem' }}>
                <aside>
                    <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Contact Information</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.25rem' }}>📍</span>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Our Office</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>B.M.S College Of Engineering</div>
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.25rem' }}>📧</span>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Email Us</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>ecoshare@gmail.com</div>
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.25rem' }}>📞</span>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Call Us</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>+91 9606343561</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>

                <main>
                    <form className="card" style={{ padding: '2.5rem' }} onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>First Name</label>
                                <input type="text" placeholder="John" required />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Last Name</label>
                                <input type="text" placeholder="Doe" required />
                            </div>
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Subject</label>
                            <select required defaultValue="">
                                <option value="" disabled>Select a topic</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="partnership">Partnership</option>
                                <option value="press">Press & Media</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea rows="5" placeholder="How can we help you?" required style={{ resize: 'vertical' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Send Message
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Contact;
