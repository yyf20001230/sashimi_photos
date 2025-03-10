import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

import Header from '../components/Header';
import '../styles/Introduction.css';

const NoumenaPage = () => {
  const videoLink = 'https://www.youtube.com/embed/vZnnAzeaPvM?modestbranding=1&autohide=1&controls=0&rel=0&showinfo=0&hd=1&autoplay=1&playsinline=1';

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header fontColor="white"/>
      <VideoPlayer link={videoLink} margin={-1} />
      <div className="text-container" style={{ marginTop: "-2vw" }}>
        <div className="title">Noumena</div>
        <div className="text-entry">Chicago International REEL Shorts Festival</div>
        <div className="text-entry">Director: 
          <a href="https://www.yannieconomos.com/" target="_blank" rel="noreferrer">&nbsp; <u>Yanni Economos</u></a>,
          <a href="https://cobyresnick.com/" target="_blank" rel="noreferrer">&nbsp; <u>Coby Riesnik</u></a>
        </div>
        <div className="text-entry">Role: Gaffer</div>
        <div className="description">"Noumena" is an experimental film that explores the Kantian principles of reality. It follows a student studying at a library 
          late at night as she tries to understand concept of metaphysics. As she becomes deeper in thought, her environment fantasically begins to shift and transform around her as the line between reality and perception blurs.</div>

        <div className="watch-link">
          <a href="https://www.projectchicago.com/saturday-nov-9th--2024" target="_blank" rel="noreferrer" style={{ paddingRight: "2vw", paddingTop: "2vw" }}>Link</a>
          <div style={{ color: "white", padding: "2vw" }}> | </div>
          <a href="https://www.youtube.com/watch?v=vZnnAzeaPvM" target="_blank" rel="noreferrer" style={{ paddingRight: "2vw", paddingTop: "2vw" }}>BTS</a>
        </div>
       </div>
    </div>
  );
};

export default NoumenaPage;