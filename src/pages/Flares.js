import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

import Header from '../components/Header';
import ImageGallery from '../components/ImageGallery';
import ImageContainer from '../components/ImageContainer';
import '../styles/Introduction.css';

const FlaresPage = () => {
  const videoLink = 'https://drive.google.com/file/d/1-RbXjCjwS01BYZtfTOu1tzWlK_u-FGHp/preview'; // Replace with the actual video ID

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header fontColor="white"/>
      <VideoPlayer link={videoLink} margin={-2}/>
      <div className="text-container">
        <div className="title">Two Flares Up</div>
        <div className="text-entry">Senior Directing Film</div>
        <div className="text-entry">Director: 
          <a href="https://www.allanrodriguez.org/" target="_blank" rel="noreferrer">&nbsp; <u>Allan Rodriguez Bobadilla</u></a>
        </div>
        <div className="text-entry">Role: Gaffer</div>
        <div className="description">When high schooler, Lidia, decides to visit her cousin, Carmen, at college for the weekend they stumble upon a student protest. Against Carmen's best wishes, driven by her heart, Lidia, jumps in only for violence to strike. The police and military surround them. The students are outnumbered, they're outmatched, there's no escape.</div>
        <div className="watch-link">
          <a href="https://drive.google.com/file/d/1-RbXjCjwS01BYZtfTOu1tzWlK_u-FGHp/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ paddingRight: "2vw", paddingTop: "2vw" }}>Video</a>
          <div style={{ color: "white", padding: "2vw" }}> | </div>
          <a href="https://www.imdb.com/title/tt27161606/" target="_blank" rel="noreferrer" style={{ padding: "2vw" }}>IMDb</a>
        </div>
       </div>
      <ImageContainer photos={photos} title={"Poster"}/>
      <ImageGallery cards={cards} padding={5}/>
    </div>
  );
};

export default FlaresPage;

const photos = [
  {
    src: require("../assets/stills/Flare0.png"),
    alt: "Poster",
  }
];

const cards = [
  {
    url: require("../assets/stills/Flare1.png"),
    title: "Title 1",
    id: 1,
  },
  {
    url: require("../assets/stills/Flare2.png"),
    title: "Title 2",
    id: 2,
  },
  {
    url: require("../assets/stills/Flare3.png"),
    title: "Title 3",
    id: 3,
  },
  {
    url: require("../assets/stills/Flare4.png"),
    title: "Title 4",
    id: 4,
  },
  {
    url: require("../assets/stills/Flare5.png"),
    title: "Title 5",
    id: 5,
  }
];