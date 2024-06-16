import React from 'react';
import './styles/About.css'; // Import the CSS file for styling

import Header from './components/Header'; // Import the Header component

const AboutPage = () => {
  return (
    <div>
         <Header fontColor="black"/>
        <div className="about-me">
            <h1>About me</h1>
            <p>
                I am Frank Yang, a Northwestern CS and Film major student taking photos in the
                Evanston/Chicago area. Outside of school, I am a freelance photographer taking landscape,
                portrait, and graduation photos and a cinematographer on various film projects. To
                schedule a photo shoot or videography session with me, feel free to reach out to me in
                the contact section below!
            </p>
            <img src={require("./assets/about.JPG")} alt="About Me" />
        </div>
    </div>
  );
};

export default AboutPage;