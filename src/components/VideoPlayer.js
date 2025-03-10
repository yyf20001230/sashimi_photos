import React from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ link, margin }) => {

  return (
    <div className="video-player" style={{ marginTop: `${margin}vw` }}>
      <iframe
        src={link}
        allow="autoplay"
        allowFullScreen
        title="Video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;