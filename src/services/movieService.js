import axios from 'axios';

const API_KEY = '118072d7';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = (query) => {
  return axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
};

export const getMovieDetails = (id) => {
  return axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
};
