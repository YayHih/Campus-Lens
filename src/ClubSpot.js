import React from 'react';
import './ClubSpot.css';

function ClubSpot() {
  return (
    <div className="clubspot-container">
      <h1 className="clubspot-title">ClubSpot</h1>
      <p className="clubspot-tagline">
        Tired of doom-scrolling or messy event tabs? ClubSpot offers a simple, distraction-free way for students to connect with clubs and events — genuine connections, no algorithms.
      </p>

      <section className="clubspot-section">
        <h2>Inspiration</h2>
        <p>
          Social media companies often foster addictive behaviors. ClubSpot is designed to break away from these tendencies, focusing on creating a purposeful platform where a community can flourish.
        </p>
      </section>

      <section className="clubspot-section">
        <h2>Features</h2>
        <ul>
          <li>Club-Exclusive Posting: Only verified clubs can post events.</li>
          <li>User Engagement: Users can like and comment on posts.</li>
          <li>Simplified Discovery: Explore clubs without unrelated distractions.</li>
        </ul>
      </section>

      <section className="clubspot-section">
        <h2>How We Built It</h2>
        <p>
          <strong>Frontend:</strong> React.js for the interface.<br />
          <strong>Backend:</strong> Node.js and Express for API management.<br />
          <strong>Database:</strong> MongoDB for efficient data storage.<br />
          <strong>Authentication:</strong> JSON Web Tokens (JWT) and bcrypt.<br />
          <strong>Hosting:</strong> Ubuntu 22.04 with Nginx and Cloudflare.
        </p>
      </section>

      <section className="clubspot-section">
        <h2>Challenges</h2>
        <p>
          Handling CORS issues, implementing JWT authentication, and writing ~30 API paths manually were some hurdles we faced during development.
        </p>
      </section>

      <section className="clubspot-section">
        <h2>What's Next</h2>
        <p>
          - Adding university-specific features.<br />
          - Introducing comments and likes for posts.<br />
          - Exploring CCC integration for streamlined club management.
        </p>
      </section>

      <footer>
        <p>
        <button 
  className="clubspot-try-it-button"
  onClick={() => window.location.href = 'https://spotyour.club'} // Replace with actual link
>
  Try It
</button>

        </p>
      </footer>
    </div>
  );
}

export default ClubSpot;
