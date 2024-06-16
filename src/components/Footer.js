import React from 'react';
import '../styles/Footer.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    const isRootPath = location.pathname === "/" || location.pathname === "/film";

    return (
        <div className="footer-content" style={{ backgroundColor: isRootPath ? "black" : "white"}}>
            <p style={{ color: isRootPath ? "white" : "black"}}>&copy; 2024 Sashimii Photos</p>
            <div className="contact-info">
                <a style={{ color: isRootPath ? "white" : "black"}} href="mailto:yyf20001230@gmail.com" target="_blank" rel="noreferrer">Email</a>
                <div style={{ color: isRootPath ? "white" : "black"}}> | </div>
                <a style={{ color: isRootPath ? "white" : "black"}} href="https://www.instagram.com/sashimii_photos/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
      </div>
    );
}

export default Footer;