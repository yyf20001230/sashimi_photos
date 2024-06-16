import React from 'react';
import HeaderPage from './components/Header';
import ImageContainer from './components/Container';
import './styles/Photography.css';

import Landscape from './assets/photographyPage/landscape.JPG';
import Perspective from './assets/photographyPage/perspective.JPG';
import Graduation from './assets/photographyPage/graduation.JPG';
import People from './assets/photographyPage/people.JPG';
import City from './assets/photographyPage/city.JPG';

const PhotographyPage = () => {
  return (
    <div className="photography-page">
      <HeaderPage fontColor="black"/>
      <div className="photo-grid">
        <ImageContainer image={Landscape} text="Landscape"/>
        <ImageContainer image={Perspective} text="Perspective"/>
        <ImageContainer image={Graduation} text="Graduation"/>
        <ImageContainer image={People} text="People"/>
        <ImageContainer image={City} text="City"/>
      </div>  
    </div>
  );
};

export default PhotographyPage;