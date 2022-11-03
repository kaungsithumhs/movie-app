import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTrending } from '../utils/tmdbApi';
import MoviesCarousel from './MoviesCarousel';
const Trending = () => {
  const { isLoading, isError, error, data: trendingMovie } = useQuery(['trending'], getTrending);
  return <MoviesCarousel movieData={trendingMovie} loading={isLoading} error={isError} title='trending' />;
};

export default Trending;
