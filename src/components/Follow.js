import React from 'react';
import '../styles/Follow.css';
import { Link } from 'react-router-dom';

const FollowPage = () => {
  return (
    <div className="follow-content">
        <p className="follow-title">Follow My Journey</p>
        <div className="follow-container">
            <p className="follow-text">
                Visuals are the quintessence of my journey, the culmination of my
                experience. I invite you to follow my path and explore together the
                beautiful things that never need to be asked for attention.
            </p>
            <Link to="/About" className="contact-button">Contact</Link>
        </div>
    </div>
  );
};

export default FollowPage;