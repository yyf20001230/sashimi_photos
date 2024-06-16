import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using an email service or API
    // Example using EmailJS:
    emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div>
      <h2>Contact us.</h2>
      <p>
        It all begins with an idea. Maybe you want to launch a business. Maybe you want to
        turn a hobby into something more. Or maybe you have a creative project to share with
        the world. Whatever it is, the way you tell your story online can make all the
        difference.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name (required)</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email (required)</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message (required)</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;