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
      <a className="about-me-img" href="https://hits.seeyoufarm.com"><img src="http://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fsashimiphotos.com&count_bg=%23000000&title_bg=%23000000&icon=&icon_color=%23000000&title=hits&edge_flat=false" alt="sticker"/></a>
    </div>
  );
};

export default LandingPage;