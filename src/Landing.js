import React from 'react';
import './styles/Landing.css';
import HeaderPage from './components/Header';
import FollowPage from './components/Follow';

const LandingPage = () => {

  return (
    <div>
      <div className="landing-page">
        <HeaderPage fontColor="white"/>
        <header>
          <h1>Frank Yang</h1>
          <p>Photographer and cinematographer</p>
        </header>
        <div className="background-image"></div>
      </div>
      <FollowPage />
    </div>
  );
};

export default LandingPage;