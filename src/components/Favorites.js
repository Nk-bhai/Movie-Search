import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../styles/Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(movie => movie.imdbID !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      <div className="favorites-list">
        {favorites.map(movie => (
          <div key={movie.imdbID}>
            <MovieCard movie={movie} />
            <button onClick={() => removeFavorite(movie.imdbID)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
