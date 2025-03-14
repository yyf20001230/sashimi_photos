import React, { useRef } from 'react';
import '../styles/Contact.css';

import emailjs from 'emailjs-com';

const ContactForm = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Send email using an email service or API
    // Example using EmailJS:
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        alert('Thank you for your inquiry! I will respond shortly.', result.text);
      }, (error) => {
        alert('Error sending email:', error.text);
      });
  };

  return (
    <div className="contact-form">
      <h2>Contact me</h2>
      <p>
        It all begins with an idea. To schedule a photo shoot /videography session, request pricing information, 
        or ask any other questions, simply complete the form below and I'll respond to your inquiry soon.
      </p>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-content">
          <label htmlFor="name">Name (required)</label>
          <input
            type="text"
            name="name"
            placeholder="Name (required)"
            required
          />
        </div>
        <div className="form-content">
        <label htmlFor="email">Email (required)</label>
          <input
            type="email"
            name="email"
            placeholder="Email (required)"
            required
          />
        </div>
        <div className="form-content">
          <label htmlFor="message">Message (required)</label>
          <textarea
            name="message"
            placeholder="What session are you interested in? Portrait, graduation photo, film set BTS, etc."
            required
          ></textarea>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <button type="submit" className="submit-button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;