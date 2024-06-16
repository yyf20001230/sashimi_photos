import React from 'react';
import HeaderPage from './components/Header';
import ImageContainer from './components/Container';
import './styles/Photography.css';

import Landscape from './assets/photographyPage/landscape.jpg';
import Perspective from './assets/photographyPage/perspective.jpg';
import Graduation from './assets/photographyPage/graduation.jpg';
import People from './assets/photographyPage/people.jpg';
import City from './assets/photographyPage/city.jpg';

const PhotographyPage = () => {
  return (
    <div className="photography-page">
      <HeaderPage fontColor="black"/>
      <div className="photo-grid">
        <ImageContainer image={require(Landscape)} text="Landscape"/>
        <ImageContainer image={require(Perspective)} text="Perspective"/>
        <ImageContainer image={require(Graduation)} text="Graduation"/>
        <ImageContainer image={require(People)} text="People"/>
        <ImageContainer image={require(City)} text="City"/>
      </div>  
    </div>
  );
};

export default PhotographyPage;