// Home.js
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home-content">
      <div className="hero-section">
        <div className="animated-bg">
          <div
              className="glow-effect"
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`
              }}
          />
        </div>
        <div className="hero-content">
          <div className="hero-title-container">
            <h1 className="hero-title">CampusLens</h1>
            <div className="title-glow"></div>
          </div>
          <p className="hero-subtitle">Real-time campus occupancy tracking reimagined</p>
          <div className="hero-cta">
            <button className="cta-button primary glow-button">
              Live Demo
              <span className="button-glow"></span>
            </button>
            <button className="cta-button secondary pulse-button">
              Learn More
              <span className="button-pulse"></span>
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item hover-glow">
            <div className="stat-icon">📊</div>
            <span className="stat-number">?+</span>
            <span className="stat-label">Facilities Tracked</span>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-item hover-glow">
            <div className="stat-icon">👥</div>
            <span className="stat-number">500+</span>
            <span className="stat-label">Daily Users</span>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-item hover-glow">
            <div className="stat-icon">⚡</div>
            <span className="stat-number">24/7</span>
            <span className="stat-label">Live Updates</span>
            <div className="stat-glow"></div>
          </div>
        </div>

        <div className="info-section">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>To create optimized, safe, and sustainable environments through precise analytics and data-driven insights.</p>
            <div className="card-glow"></div>
          </div>
        </div>

        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
              <div key={i} className="particle"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;