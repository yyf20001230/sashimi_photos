import React, { useState } from 'react';
import './styles/Film.css';

import HeaderPage from './components/Header';
import ImageGallery from './components/ImageGallery';

import video1 from './assets/filmPage/1.MOV';
import video2 from './assets/filmPage/2.MOV';
import video3 from './assets/filmPage/2.MOV';

import Film from './assets/film.JPG';

import { Link } from 'react-router-dom';


const FilmPage = () => {

  const [hoveredMovie, setHoveredMovie] = useState(null);

  const movies = [
    { title: 'Neuro 101 (2024)', videoSrc: video1 },
    { title: 'Clark (2023)', videoSrc: video2 },
    { title: 'Hot (2022)', videoSrc: video3 },
  ];

  return (
    <div>
      <div className="film-page">
        <HeaderPage fontColor="white"/>
        <img className="film-image" src={Film} alt="film_img"/>
        <div className="movie-list">
            {movies.map((movie) => (
                <Link
                key={movie.title}
                to={"/film/" + movie.title.toLowerCase().split(' ')[0]}
                className="movie-item"
                onMouseEnter={() => {
                    setHoveredMovie(movie);
                }}
                onMouseLeave={() => {
                    setHoveredMovie(null);
                }}
                >
                {movie.title}
                </Link>
            ))}

            <div className="video-filter"></div>

            {hoveredMovie && (
                <video loading="lazy" className="background-video" src={hoveredMovie.videoSrc} autoPlay muted loop />
            )}
        </div>
      </div>
      <ImageGallery />
    </div>
  );
};

export default FilmPage;