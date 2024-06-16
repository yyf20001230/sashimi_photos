import React from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = () => {
  
    const photoContext = require.context('../assets/landscape', false, /\.(jpe?g|png)$/i);
    const photos = photoContext.keys().map((key) => ({
        src: photoContext(key),
        alt: key.replace(/^\.\//, ''),
    }));

    // Sort the photos array based on the file names
    const sortedPhotos = photos.sort((a, b) => {
        const numA = parseInt(a.alt.match(/\d+/)[0]);
        const numB = parseInt(b.alt.match(/\d+/)[0]);
        return numA - numB;
    });

  return (
    <div className="image-gallery">
      <div className="arrow arrow-left">&lt;</div>
      <div className="image-container">
        {sortedPhotos.map((photo, index) => (
                        <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        style={{ width: "100%", display: "block" }}
                        />
                    ))}
      </div>
      <div className="arrow arrow-right">&gt;</div>
    </div>
  );
};

export default ImageGallery;