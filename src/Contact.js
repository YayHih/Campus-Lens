import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
