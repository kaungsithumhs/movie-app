import axios from 'axios';

const instance = axios.create({ baseURL: 'https://api.themoviedb.org/3' });

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const base_url = 'https://image.tmdb.org/t/p/original/';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchBanner: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const getBannerData = async () => {
  const response = await instance.get(requests.fetchBanner);
  return response;
};
const getTopRated = async () => {
  const response = await instance.get(requests.fetchTopRated);
  return response;
};
const getTrending = async () => {
  const response = await instance.get(requests.fetchTrending);
  return response;
};
const getDocumentary = async () => {
  const response = await instance.get(requests.fetchDocumentaries);
  return response;
};

const getMovieDetail = async (id) => {
  const response = await instance.get(
    `/movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}&language=en-US`
  );
  return response;
};
const getActor = async (castId) => {
  const response = await instance.get(`person/${castId}?api_key=${API_KEY}`);
  return response;
};

const getMovieByActor = async ({ id, page }) => {
  const response = await instance.get(`discover/movie?with_cast=${id}&page=${page}&api_key=${API_KEY}`);
  return response;
};
const getMovies = async (movie_id) => {
  const response = await instance.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`);
  return response;
};

export {
  getBannerData,
  getTopRated,
  getTrending,
  getDocumentary,
  base_url,
  requests,
  instance,
  getMovieDetail,
  getActor,
  getMovieByActor,
  getMovies,
};
