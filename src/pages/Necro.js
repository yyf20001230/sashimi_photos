import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

import Header from '../components/Header';

const NecroPage = () => {
  const videoId = '6wPXHCJVfJc'; // Replace with the actual video ID

  return (
    <div>
      <Header fontColor="black"/>
      <h1>Video Page</h1>
      <VideoPlayer videoId={videoId} />
    </div>
  );
};

export default NecroPage;