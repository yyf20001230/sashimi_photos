import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

import Header from '../components/Header';

const HotPage = () => {
  const videoLink = 'https://www.youtube.com/embed/N83mnrq6LGo?modestbranding=1&controls=0&rel=0&showinfo=0&loop=1&hd=1&autoplay=1';
  

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header fontColor="white"/>
      <VideoPlayer link={videoLink} margin={-1}/>
      <div className="text-container" style={{ marginTop: "-2vw" }}>
        <div className="title">HOT by Seventeen</div>
        <div className="text-entry">Northwestern KDance</div>
        <div className="text-entry">Role: Director & Videographer</div>
        <div className="description">K-Dance, founded in 2018, is Northwestern University’s only dedicated K-Pop group. We perform K-pop covers and spread K-pop influences across campus and throughout the Chicago community. We aim to promote K-pop by making it accessible to all members - from newcomers to experienced K-pop fans - by providing opportunities to participate in free workshops, music videos filming, and performances. </div>
        <div className="watch-link">
          <a href="https://www.youtube.com/watch?v=N83mnrq6LGo" target="_blank" rel="noreferrer" style={{ paddingRight: "2vw", paddingTop: "2vw" }}>Video</a>
        </div>
       </div>
    </div>
  );
};

export default HotPage;