import React from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ link, margin }) => {

  return (
    <div className="video-player" style={{ marginTop: `${margin}vw` }}>
      <iframe
        src={link}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;