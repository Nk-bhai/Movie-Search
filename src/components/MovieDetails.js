import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
