/**
 * File Name: contact-me.jsx
 * Description: Contact Me component with a form
 * Student Name: Sivaprasad Gunji
 * Student ID: 301546700
 * Date: September 25, 2025
 */

// === Imports and Setup ===
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; // Optional: for styling

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/'); // Redirect to Home Page
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p><strong>Name:</strong> Sivaprasad Gunji</p>
      <p><strong>Mobile:</strong> 519-992-0000</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Your Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

