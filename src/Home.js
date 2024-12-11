import React, { useState } from 'react';
import './Home.css';

function CampusLens() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showApplications, setShowApplications] = useState(false);

  const handleHoverFeatures = () => {
    setShowFeatures(true);
  };

  const handleLeaveFeatures = () => {
    setTimeout(() => {
      setShowFeatures(false);
    }, 500);
  };

  const handleHoverApplications = () => {
    setShowApplications(true);
  };

  const handleLeaveApplications = () => {
    setTimeout(() => {
      setShowApplications(false);
    }, 500);
  };

  return (
    <div className="campuslens-container">
      <h1 className="campuslens-title">Welcome to CampusLens</h1>
      <div className="campuslens-description-container">
        <p className="campuslens-description">
          CampusLens is a cutting-edge platform that empowers students with real-time campus occupancy
          information, enhancing daily convenience while providing scalable solutions for broader applications.
        </p>
      </div>

      {/* Mission Statement Section */}
      <div className="campuslens-mission">
        <h2>Our Mission</h2>
        <p>
          To provide students with real-time occupancy data to improve their campus experience while laying
          the foundation for scalable applications in resource management and beyond.
        </p>
      </div>

      {/* Features Section */}
      <div className="campuslens-buttons">
        <div
          className="campuslens-call-to-action"
          onMouseLeave={handleLeaveFeatures}
        >
          <button
            className="campuslens-button"
            onMouseEnter={handleHoverFeatures}
          >
            Explore Features
          </button>
          {showFeatures && (
            <div
              className="features-preview"
              onMouseEnter={() => setShowFeatures(true)}
              onMouseLeave={() => setShowFeatures(false)}
            >
              <div className="feature-card">
                <h3>Real-Time Occupancy Detection</h3>
                <p>Get up-to-date information on how crowded various campus facilities are.</p>
              </div>
              <div className="feature-card">
                <h3>Privacy-Conscious Technology</h3>
                <p>Designed to protect user anonymity while delivering valuable insights.</p>
              </div>
              <div className="feature-card">
                <h3>Scalable Infrastructure</h3>
                <p>Built to expand beyond campuses into broader public spaces and events.</p>
              </div>
            </div>
          )}
        </div>

        {/* Applications Section */}
        <div
          className="campuslens-call-to-action"
          onMouseLeave={handleLeaveApplications}
        >
          <button
            className="campuslens-button"
            onMouseEnter={handleHoverApplications}
          >
            Explore Applications
          </button>
          {showApplications && (
            <div
              className="applications-preview"
              onMouseEnter={() => setShowApplications(true)}
              onMouseLeave={() => setShowApplications(false)}
            >
              <div className="application-card">
                <h3>Student Navigation</h3>
                <p>Find the best times to visit libraries, dining halls, and gyms.</p>
              </div>
              <div className="application-card">
                <h3>Event Planning</h3>
                <p>Optimize space usage for university events and gatherings.</p>
              </div>
              <div className="application-card">
                <h3>Resource Allocation</h3>
                <p>Help administrators manage campus resources more efficiently.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CampusLens;