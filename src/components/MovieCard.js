import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

const MovieCard = ({ movie, addToFavorites }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <Link to={`/movie/${movie.imdbID}`}>More Details</Link>

      <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>

    </div>
  );
};

export default MovieCard;
