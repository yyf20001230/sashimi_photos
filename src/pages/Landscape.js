import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from '../components/Header';
import Navigator from '../components/Navigator';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const LandscapePage = () => {

    // Use require.context to dynamically import photos from the landscape folder
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
        <div>
            <Header fontColor="black"/>
            <Navigator links={["City", "Perspective"]} />
            <ResponsiveMasonry columnsCountBreakPoints={{ 800: 1, 1000: 2 }} style={{ margin: "5vw 10vw 5vw 10vw" }}>
                <Masonry gutter="5vw">
                {sortedPhotos.map((photo, index) => (
                    <LazyLoadImage
                        key={index}
                        alt={"landscape" + index}
                        src={photo.src}
                        placeholderSrc={photo.src}
                        effect="blur"
                        style={{ width: "100%", display: "block" }}
                    />
                ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default LandscapePage;