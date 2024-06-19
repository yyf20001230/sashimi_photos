import React from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ videoId }) => {

  console.log(videoId);
  return (
    <div className="video-player">
      <iframe
        src={`http://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;