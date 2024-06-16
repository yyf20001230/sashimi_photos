import React from 'react';
import '../styles/Container.css';
import { Link } from 'react-router-dom';

const ImageContainer = ({image, text}) => {

    return (
        <div className="container">
            <div className="img-box">
                <Link to={'/photography/' + text.toLowerCase()}>
                    <img loading="lazy" src={image} alt={text}/>
                </Link>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ImageContainer;