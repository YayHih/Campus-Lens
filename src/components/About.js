import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1>Meet Our Team</h1>
          <p className="about-subtitle">Developers Behind CampusLens</p>
        </div>
        <div className="team-card">
          <div className="team-left">
            <div className="team-image-wrapper">
              <img src="/me.jpg" alt="Team Lead" className="team-image" />
              <div className="image-overlay"></div>
            </div>
          </div>
          <div className="team-right">
            <div className="team-info">
              <h2>Development Team</h2>
              <h3>From All Tech Departments</h3>
              <p>Our development team brings together diverse expertise in software engineering, electrical engineering, data analytics, and ML researchers to create innovative solutions for campus space management.</p>
            </div>
          </div>
        </div>
        <div className="values-section">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>Striving for the highest quality in everything we do</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Working together to achieve common goals</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Pushing boundaries with creative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;