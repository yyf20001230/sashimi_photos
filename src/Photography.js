import React from 'react';
import HeaderPage from './components/Header';
import ImageContainer from './components/Container';
import './styles/Photography.css';


const PhotographyPage = () => {
  return (
    <div className="photography-page">
      <HeaderPage fontColor="black"/>
      <div className="photo-grid">
        <ImageContainer image={require("./assets/photographyPage/landscape.JPG")} text="Landscape"/>
        <ImageContainer image={require("./assets/photographyPage/perspective.JPG")} text="Perspective"/>
        <ImageContainer image={require("./assets/photographyPage/graduation.JPG")} text="Graduation"/>
        <ImageContainer image={require("./assets/photographyPage/people.JPG")} text="People"/>
        <ImageContainer image={require("./assets/photographyPage/city.JPG")} text="City"/>
      </div>  
    </div>
  );
};

export default PhotographyPage;