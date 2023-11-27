import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

import featureImage1 from './feature1.jpg';
import featureImage2 from './feature2.jpg';
import featureImage3 from './feature3.jpg';

function LandingPage() {
    return (
        <div className="landing-page">
            <nav className="landing-nav">
                <div className="nav-logo">
                    <Link to="/">Thrive</Link>
                </div>
                <div className="nav-links">
                    <Link to="/login" className="nav-link">Log In</Link>
                    <Link to="/signup" className="nav-link nav-link-signup">Sign Up</Link>
                </div>
            </nav>
            <div className="hero-section">
                <h1>Let Your Plants Thrive</h1>
                <p>Never forget to water or care for your plants again.</p>
                <div className="hero-actions">
                    <Link to="/signup" className="button signup-button">Get Started</Link>
                </div>
            </div>
            <div className="features-container">
                <div className="feature-section" id="track-plants">
                    <img src={featureImage1} alt="Track Plants" className="feature-image"/>
                    <div className="feature-content">
                        <h2>Track Your Plants</h2>
                        <p>Keep track of watering, fertilizing, and repotting schedules effortlessly.</p>
                    </div>
                </div>
                <div className="feature-section" id="discover-plants">
                    <div className="feature-content">
                        <h2>Discover New Plants</h2>
                        <p>Expand your plant collection by exploring our vast library of plants and their care specifics.</p>
                    </div>
                    <img src={featureImage2} alt="Discover Plants" className="feature-image"/>
                </div>
                <div className="feature-section" id="join-community">
                    <img src={featureImage3} alt="Join Community" className="feature-image"/>
                    <div className="feature-content">
                        <h2>Join the Community</h2>
                        <p>Engage with fellow plant lovers, share insights, and grow together.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

