import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p>Have questions? We'd love to hear from you.</p>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">📧</div>
              <h3>Email Us</h3>
              <p>campuslens@u.rochester.edu</p>
              <div className="card-glow"></div>
            </div>

            <div className="contact-card">
              <div className="card-icon">📍</div>
              <h3>Location</h3>
              <p>500 Wilson Blvrd<br/>University of Rochester<br/>Rochester, NY 14627</p>
              <div className="card-glow"></div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;