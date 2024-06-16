import React, { useState } from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom';

import { FaInstagram } from 'react-icons/fa';

import IconBlack from '../assets/photography_black.svg';
import IconWhite from '../assets/photography_white.svg';



const HeaderPage = ({ fontColor }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [iconColor, setIconColor] = useState(fontColor);

    const toggleMenu = () => {

      if (showMenu) {
        if (fontColor === "black") {
          document.querySelector('.logo').style.color = 'black';
          document.querySelectorAll('.bar')[0].style.backgroundColor = 'black';
          document.querySelectorAll('.bar')[1].style.backgroundColor = 'black';
          setIconColor('black');
        } else {
          document.querySelector('.logo').style.color = 'white';
          document.querySelectorAll('.bar')[0].style.backgroundColor = 'white';
          document.querySelectorAll('.bar')[1].style.backgroundColor = 'white';
          setIconColor('white');
        }
        document.querySelector('.logo').style.zIndex = 1;
        document.querySelectorAll('.bar')[0].style.zIndex = 1;
        document.querySelectorAll('.bar')[1].style.zIndex = 1;
      } else {
        if (fontColor === "white") {
          document.querySelector('.logo').style.color = 'black';
          document.querySelectorAll('.bar')[0].style.backgroundColor = 'black';
          document.querySelectorAll('.bar')[1].style.backgroundColor = 'black';
          setIconColor('black');
        }
        document.querySelector('.logo').style.zIndex = 100;
        document.querySelectorAll('.bar')[0].style.zIndex = 100;
        document.querySelectorAll('.bar')[1].style.zIndex = 100;
      }

      setShowMenu(!showMenu);
    };

    return (
      <div className="nav-container">
        <div className="logo" style={{ color: fontColor }}>
          { iconColor === 'white' ? <div className="logo-container"><img src={IconWhite} alt="Icon" width="40px"/>SashimiPhotos</div>
          : <div className="logo-container"><img src={IconBlack} alt="Icon" width="40px"/>SashimiPhotos</div>
          }
        </div>
        {showMenu && (
          <div className="modal">
            <ul className="modal-items">
              <li><Link to="/" className="link">Overview</Link></li>
              <li><Link to="/photography" className="link">Photography</Link></li>
              <li><Link to="/film" className="link">Film</Link></li>
              <li><Link to="/about" className="link">About</Link></li>
              <li style={{ color: 'black' }}><Link to="https://www.instagram.com/sashimii_photos/" target="_blank" className="link"><FaInstagram/></Link></li>
            </ul>
          </div>
        )}
        <div className={`hamburger-menu ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar" style={{ backgroundColor: fontColor }}></div>
          <div className="bar" style={{ backgroundColor: fontColor }}></div>
        </div>
        <ul className="nav-items">
          <li><Link to="/" className="link" style={{ color: fontColor }}>Overview</Link></li>
          <li><Link to="/photography" className="link" style={{ color: fontColor }}>Photogaphy</Link></li>
          <li><Link to="/film" className="link" style={{ color: fontColor }}>Film</Link></li>
          <li><Link to="/about" className="link" style={{ color: fontColor }}>About</Link></li>
          <li><Link to="https://www.instagram.com/sashimii_photos/" target="_blank" className="link" style={{ color: fontColor }}><FaInstagram/></Link></li>
        </ul>
      </div>
    );
}

export default HeaderPage;