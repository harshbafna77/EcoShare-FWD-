import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About <span className="text-gradient">EcoShare</span></h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                    Empowering conscious travelers to explore the world while minimizing their carbon footprint.
                </p>
            </header>

            <section className="card" style={{ padding: '2.5rem', marginBottom: '2.5rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Mission</h2>
                <p style={{ marginBottom: '1rem' }}>
                    At EcoShare, we believe that travel is one of the most enriching experiences a human can have. However, we also recognize the environmental impact that global travel has on our planet.
                </p>
                <p>
                    Our mission is to provide travelers with the tools they need to plan, track, and offset their travel-related emissions, all while making group travel and expense sharing seamless and fair.
                </p>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                <div className="card" style={{ padding: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🌍</span> Sustainable Travel
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        We provide real-time carbon footprint calculations for your trips, helping you make greener choices.
                    </p>
                </div>
                <div className="card" style={{ padding: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>🤝</span> Group Harmony
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Our integrated expense splitting ensures that finances never get in the way of a great adventure.
                    </p>
                </div>
            </div>

            <section style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Join the Movement</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    Start planning your next eco-friendly adventure today and be part of a community that cares.
                </p>
                <button className="btn btn-primary" onClick={() => window.location.href = '/login'}>
                    Get Started Now
                </button>
            </section>
        </div>
    );
};

export default About;
