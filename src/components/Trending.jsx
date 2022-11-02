import React from 'react';
import MoviesCarousel from './MoviesCarousel';
import { getTrending } from '../utils/tmdbApi';
import { useQuery } from '@tanstack/react-query';

const Trending = () => {
  const { isLoading, isError, error, data: trend } = useQuery(['trending'], getTrending);
  console.log('trending>>>', trend);

  return <MoviesCarousel />;
};

export default Trending;
