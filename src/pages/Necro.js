import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ImageGallery from '../components/ImageGallery';
import ImageContainer from '../components/ImageContainer';

import Header from '../components/Header';
import '../styles/Introduction.css';

const NecroPage = () => {
  const videoLink = 'https://www.youtube.com/embed/6wPXHCJVfJc?modestbranding=1&controls=0&rel=0&showinfo=0&loop=1&hd=1&autoplay=1&showinfo=0';

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header fontColor="white"/>
      <VideoPlayer link={videoLink} margin={-3}/>
      <div className="text-container">
        <div className="title">Necro 101</div>
        <div className="text-entry">Santa Monica International Film Festival</div>
        <div className="text-entry">Director: 
          <a href="https://www.samfriedmanmedia.com/" target="_blank" rel="noreferrer">&nbsp; <u>Sam Friedman</u></a>,
          <a href="https://www.imdb.com/name/nm13394616/" target="_blank" rel="noreferrer">&nbsp; <u>Brady Meldorf</u></a>
        </div>
        <div className="text-entry">Role: Gaffer</div>
        <div className="description">When Daisy enrolls in an easy elective class, she learns her mentor has been using dark magic to aid one family in an ongoing mob turf war. And the turf war is all about one thing: sauce.</div>
        <div className="watch-link">
          <a href="https://www.xolo.tv/necro-101/videos/necro-101" target="_blank" rel="noreferrer" style={{ paddingRight: "2vw", paddingTop: "2vw" }}>Video</a>
          <div style={{ color: "white", padding: "2vw" }}> | </div>
          <a href="https://www.imdb.com/title/tt32483088/" target="_blank" rel="noreferrer" style={{ padding: "2vw" }}>IMDb</a>
        </div>
      </div>
      <ImageContainer photos={photos} title={"Behind the Scene"}/>
      <ImageGallery cards={cards} padding={4}/>
    </div>
  );
};

export default NecroPage;

const cards = [
  {
    url: require("../assets/stills/Necro1.png"),
    title: "Title 1",
    id: 1,
  },
  {
    url: require("../assets/stills/Necro2.png"),
    title: "Title 2",
    id: 2,
  },
  {
    url: require("../assets/stills/Necro3.png"),
    title: "Title 3",
    id: 3,
  },
  {
    url: require("../assets/stills/Necro4.png"),
    title: "Title 4",
    id: 4,
  },
  {
    url: require("../assets/stills/Necro5.png"),
    title: "Title 5",
    id: 5,
  },
  {
    url: require("../assets/stills/Necro6.png"),
    title: "Title 6",
    id: 6,
  },
  {
    url: require("../assets/stills/Necro7.png"),
    title: "Title 7",
    id: 7,
  },
  {
    url: require("../assets/stills/Necro8.png"),
    title: "Title 8",
    id: 8,
  },
  {
    url: require("../assets/stills/Necro9.png"),
    title: "Title 9",
    id: 9,
  }
];

const photos = [
  {
    src: require("../assets/bts/Necro0.jpg"),
    alt: "Title 0",
  },
  {
    src: require("../assets/bts/Necro1.jpg"),
    alt: "Title 1",
  },
  {
    src: require("../assets/bts/Necro2.jpg"),
    alt: "Title 2",
  },
  {
    src: require("../assets/bts/Necro3.jpg"),
    alt: "Title 3",
  },
  {
    src: require("../assets/bts/Necro4.JPG"),
    alt: "Title 4",
  },
  {
    src: require("../assets/bts/Necro5.JPG"),
    alt: "Title 5",
  },
  {
    src: require("../assets/bts/Necro6.JPG"),
    alt: "Title 6",
  },
  {
    src: require("../assets/bts/Necro7.JPG"),
    alt: "Title 7",
  },
  {
    src: require("../assets/bts/Necro8.jpg"),
    alt: "Title 8",
  },
  {
    src: require("../assets/bts/Necro9.JPG"),
    alt: "Title 9",
  }
];