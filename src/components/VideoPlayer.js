import React from 'react';

const VideoPlayer = ({ videoId }) => {

  console.log(videoId);
  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={`http://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;