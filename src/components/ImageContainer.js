import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "../styles/ImageContainer.css";

const ImageContainer = ({ photos, title }) => {
    return (
        <div className="image-container">
            <div className="title">{title}</div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 800: 2, 1000: 3 }} style={{ margin: "3vw 10vw 5vw 0vw" }}>
            <Masonry gutter="5vw">
                {photos.map((photo, index) => (
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

export default ImageContainer;