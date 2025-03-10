import React, { useState } from 'react';
import './styles/Film.css';

import HeaderPage from './components/Header';
import ImageGallery from './components/ImageGallery';

import { Link } from 'react-router-dom';

const Necro = "https://res.cloudinary.com/dpagnkhim/video/upload/v1741597580/Necro_bufgw3.mov";
const Clark = "https://res.cloudinary.com/dpagnkhim/video/upload/v1741597531/Clark_w4roz6.mov";
const Noumena = "https://res.cloudinary.com/dpagnkhim/video/upload/v1741597602/Noumena_c5l3ar.mov";
const Flares = "https://res.cloudinary.com/dpagnkhim/video/upload/v1741597605/Flares_qawkpb.mov";
const Hot = "https://res.cloudinary.com/dpagnkhim/video/upload/v1741597622/Hot_bxq7uh.mov";
const Film = "https://res.cloudinary.com/dpagnkhim/image/upload/v1741597629/film_rj5efq.jpg";

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
                  if (window.innerWidth >= 1200){
                    setHoveredMovie(movie);
                  } else {
                    setHoveredMovie(null);
                  }
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
      <ImageGallery cards={cards} padding={5}/>
    </div>
  );
};

export default FilmPage;

const cards = [
  {
    url: require("./assets/stills/Necro1.png"),
    title: "Title 1",
    id: 1,
  },
  {
    url: require("./assets/stills/Necro2.png"),
    title: "Title 2",
    id: 2,
  },
  {
    url: require("./assets/stills/Necro3.png"),
    title: "Title 3",
    id: 3,
  },
  {
    url: require("./assets/stills/Clark1.JPG"),
    title: "Title 4",
    id: 4,
  },
  {
    url: require("./assets/stills/Clark2.JPG"),
    title: "Title 5",
    id: 5,
  },
  {
    url: require("./assets/stills/Flare1.png"),
    title: "Title 6",
    id: 6,
  },
  {
    url: require("./assets/stills/Noumena1.png"),
    title: "Title 7",
    id: 7,
  }
];