import React from 'react';
import MoviesCarousel from './MoviesCarousel';
import { getDocumentary, getTopRated, getTrending } from '../utils/tmdbApi';
import { useQuery } from '@tanstack/react-query';

const TopRated = () => {
  const { isLoading, isError, error, data: topRatedMovie } = useQuery(['topRated'], getTopRated);
  const { data: trendingMovie } = useQuery(['trending'], getTrending);
  const { data: docMovie } = useQuery(['documentary'], getDocumentary);

  return (
    <>
      <MoviesCarousel movieData={topRatedMovie} loading={isLoading} error={isError} title='Top Rating' />
      <MoviesCarousel movieData={trendingMovie} loading={isLoading} error={isError} title='trending' />
      <MoviesCarousel movieData={docMovie} loading={isLoading} error={isError} title='Documentary' />
    </>
  );
};

export default TopRated;
