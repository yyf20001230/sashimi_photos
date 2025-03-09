import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

import Header from '../components/Header';
import '../styles/Introduction.css';
import ImageGallery from '../components/ImageGallery';
import ImageContainer from '../components/ImageContainer';

const ClarkPage = () => {
  const videoLink = 'https://drive.google.com/file/d/1BxqdU-scUopj9955_kO3VyBw-LNSYaGY/preview'; // Replace with the actual video ID

  return (
    <div style={{ backgroundColor: "black" }}>
    <Header fontColor="white"/>
    <VideoPlayer link={videoLink} margin={-3}/>
    <div className="text-container">
      <div className="title">Clark</div>
      <div className="text-entry">Senior Directing Film</div>
      <div className="text-entry">Director: 
        <a href="https://www.imdb.com/name/nm10007254/" target="_blank" rel="noreferrer">&nbsp; <u>Steven Yao</u></a>
      </div>
      <div className="text-entry">Role: Gaffer</div>
      <div className="description">Clark, a sentient AI, is brought to a family to tend the bedridden grandpa, but an unexpected mission makes him reexamine his own identity and what it means to be alive.</div>
      <div className="watch-link">
        <a href="https://drive.google.com/file/d/1BxqdU-scUopj9955_kO3VyBw-LNSYaGY/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ paddingRight: "2vw", paddingTop: "2vw" }}>Video</a>
        <div style={{ color: "white", padding: "2vw" }}> | </div>
        <a href="https://www.imdb.com/title/tt32896685/?ref_=nm_knf_t_1" target="_blank" rel="noreferrer" style={{ padding: "2vw" }}>IMDb</a>
      </div>
     </div>
    <ImageContainer photos={photos} title={"Behind the Scene"}/>
    <ImageGallery cards={cards} padding={5}/>
  </div>
  );
};

export default ClarkPage;

const cards = [
  {
    url: require("../assets/stills/Clark1.JPG"),
    title: "Title 1",
    id: 1,
  },
  {
    url: require("../assets/stills/Clark2.JPG"),
    title: "Title 2",
    id: 2,
  },
  {
    url: require("../assets/stills/Clark3.jpg"),
    title: "Title 3",
    id: 3,
  },
  {
    url: require("../assets/stills/clark4.png"),
    title: "Title 4",
    id: 4,
  },
  {
    url: require("../assets/stills/clark5.png"),
    title: "Title 5",
    id: 5,
  },
  {
    url: require("../assets/stills/clark6.png"),
    title: "Title 6",
    id: 6,
  },
  {
    url: require("../assets/stills/clark7.png"),
    title: "Title 7",
    id: 7,
  }
];

const photos = [
  {
    src: require("../assets/bts/Clark0.png"),
    alt: "Clark0",
  },
  {
    src: require("../assets/bts/clark1.JPG"),
    alt: "Clark1",
  },
  {
    src: require("../assets/bts/clark2.JPG"),
    alt: "Clark2",
  },
  {
    src: require("../assets/bts/clark3.JPG"),
    alt: "Clark3",
  },
  {
    src: require("../assets/bts/clark4.JPG"),
    alt: "Clark4",
  },
  {
    src: require("../assets/bts/clark5.JPG"),
    alt: "Clark5",
  },
  {
    src: require("../assets/bts/clark6.JPG"),
    alt: "Clark6",
  },
  {
    src: require("../assets/bts/clark7.JPG"),
    alt: "Clark7",
  },
  {
    src: require("../assets/bts/clark8.JPG"),
    alt: "Clark8",
  },
  {
    src: require("../assets/bts/clark9.JPG"),
    alt: "Clark9",
  }
];