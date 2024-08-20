import React from 'react';
import './styles/About.css'; // Import the CSS file for styling

import Header from './components/Header'; // Import the Header component
import ContactForm from './components/Contact'; // Import the Contact component

import About from './assets/util/about.JPG'; // Import the image for the About page
import NU from './assets/util/NU.JPG'; // Import the image for the NU project
import Tedx from './assets/util/Tedx.JPG'; // Import the image for the TEDx project
import Applause from './assets/util/Applause.JPG'; // Import the image for the Applause project

const AboutPage = () => {
  return (
    <div>
         <Header fontColor="black"/>
        <div className="about-me">
            <h1>About me</h1>
            <p>
                I am Frank Yang, a Northwestern CS and Film major student. Outside of school, I am a freelance photographer 
                taking landscape, portrait, and graduation photos. In my creative endeavor, I am a cinematographer working on 
                film projects such as Applause For A Cause and TEDx. I am committed to creating cinematic lighting and true-story 
                shots that evokes emotion. To schedule a photo shoot or videography session with me, feel free to reach out 
                to me in the contact section below.

                <i> Pssst...</i> check out this <a href="http://frankyang.me" target="_blank" rel="noreferrer" style={{ color: "orangered", textDecoration: "underline"}}>site</a> for my boring side!
                <div>
                  <img src={Applause} id="applause" loading="lazy" alt="Applause" />
                  <img src={Tedx} id="ted" loading="lazy" alt="TEDx" />
                  <img src={NU} id="nu" loading="lazy" alt="NU" />
                </div>
            </p>
            <img className="about-me-img" src={About} loading="lazy" alt="About Me" />
        </div>
        <ContactForm />
    </div>
  );
};

export default AboutPage;