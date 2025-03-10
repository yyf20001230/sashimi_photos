import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from '../components/Header';
import Navigator from '../components/Navigator';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/Photography.css';

const PerspectivePage = () => {

    // Use require.context to dynamically import photos from the perspective folder
    const photoContext = require.context('../assets/perspective', false, /\.(jpe?g|png)$/i);
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
        <div>
            <Header fontColor="black"/>
            <div className="photography-header">
                <h1>Perspective</h1>
            </div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 800: 1, 1000: 2, 1200: 3 }} style={{ margin: "5vw 10vw 5vw 10vw" }}>
                <Masonry gutter="5vw">
                {sortedPhotos.map((photo, index) => (
                    <LazyLoadImage
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        effect="blur"
                        placeholderSrc={photo.src}
                        style={{ width: "100%", display: "block" }}
                    />
                ))}
                </Masonry>
            </ResponsiveMasonry>
            <Navigator links={["Landscape", "Graduation"]} />
        </div>
    );
};

export default PerspectivePage;