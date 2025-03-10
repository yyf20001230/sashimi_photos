import React from 'react';
import HeaderPage from './components/Header';
import ImageContainer from './components/Container';
import './styles/Photography.css';

const Landscape = "https://res.cloudinary.com/dpagnkhim/image/upload/v1741597162/landscape_wbm4jx.jpg";
const Perspective = "https://res.cloudinary.com/dpagnkhim/image/upload/v1741597161/perspective_iiibem.jpg";
const Graduation = "https://res.cloudinary.com/dpagnkhim/image/upload/v1741597157/graduation_rxjh8v.jpg";
const People = "https://res.cloudinary.com/dpagnkhim/image/upload/v1741597165/people_swpmcn.jpg";
const City = "https://res.cloudinary.com/dpagnkhim/image/upload/v1741597166/city_pwkuo9.jpg";

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