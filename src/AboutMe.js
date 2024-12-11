import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="portfolio-container">
      {/* About Section */}
      <section className="about-section">
        <h1 className="section-title">About Us</h1>
        <div className="about-content">
          <img
            className="about-image"
            src="/me.jpg"
            alt="Martin Oka"
          />
          <p className="about-description">
            Hi! I'm Martin Oka, a passionate Computer Science and Business
            Finance double major at the University of Rochester. I love creating innovative solutions, exploring Japanese culture, and working on impactful projects. Let’s connect!
          </p>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <h1 className="section-title">Resume</h1>
        <div className="resume-content">
          {/* Embedded PDF Viewer */}
          <iframe
            className="resume-viewer"
            src="MartinOka.pdf"
            title="Martin Oka Resume"
          ></iframe>
          {/* Download Button */}
          <a href="MartinOka.pdf" download className="resume-download-button">
            Download Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
    </div>
  );
}

export default AboutMe;
