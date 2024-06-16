import React from 'react';
import HeaderPage from './components/Header';
import ImageContainer from './components/Container';
import './styles/Photography.css';

const PhotographyPage = () => {
  return (
    <div className="photography-page">
      <HeaderPage fontColor="black"/>
      <div className="photo-grid">
        <ImageContainer image={require("./assets/photographyPage/landscape.jpg")} text="Landscape"/>
        <ImageContainer image={require("./assets/photographyPage/perspective.jpg")} text="Perspective"/>
        <ImageContainer image={require("./assets/photographyPage/graduation.jpg")} text="Graduation"/>
        <ImageContainer image={require("./assets/photographyPage/people.jpg")} text="People"/>
        <ImageContainer image={require("./assets/photographyPage/city.jpg")} text="City"/>
      </div>  
    </div>
  );
};

export default PhotographyPage;