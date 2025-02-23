import React, { useState } from 'react';
import { searchMovies } from '../services/movieService';
import MovieCard from './MovieCard';
import '../styles/Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    try {
      const response = await searchMovies(query);
      if (response.data.Response === "False") {
        setError(response.data.Error);
      } else {
        setResults(response.data.Search);
      }
    } catch (error) {
      setError('Error fetching data');
    }
  };

  const addToFavorites = (movie) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <div className="search">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"/>

      <button onClick={handleSearch}>Search</button>

      {error && <p className="error">{error}</p>}
      
      <div className="results">
        {results && results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} addToFavorites={addToFavorites} />
        ))}
      </div>
    </div>
  );
};

export default Search;
