import React, { useState } from 'react';
import './styles/Film.css';

import HeaderPage from './components/Header';
import ImageGallery from './components/ImageGallery';

import Necro from './assets/filmPage/Necro.MOV';
import Clark from './assets/filmPage/Clark.MOV';
import Noumena from './assets/filmPage/Noumena.MOV';
import Flares from './assets/filmPage/Flares.MOV';
import Hot from './assets/filmPage/Hot.MOV';

import Film from './assets/util/film.JPG';

import { Link } from 'react-router-dom';

const FilmPage = () => {

  const [hoveredMovie, setHoveredMovie] = useState(null);

  const movies = [
    { title: 'Necro 101 (2024)', videoSrc: Necro },
    { title: 'Clark (2023)', videoSrc: Clark },
    { title: 'Noumena (2024)', videoSrc: Noumena },
    { title: 'Two Flares Up (2022)', videoSrc: Flares },
    { title: 'Hot (2022)', videoSrc: Hot },
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
                to={"/film/" + movie.title.split(" (")[0].split(" ").join("").toLowerCase()}
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