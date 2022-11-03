import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTopRated } from '../utils/tmdbApi';
import MoviesCarousel from './MoviesCarousel';

const TopRated = () => {
  const { isLoading, isError, error, data: topRatedMovie } = useQuery(['topRated'], getTopRated);
  if (isError) return console.log(error.message);

  return (
    <>
      <MoviesCarousel
        movieData={topRatedMovie}
        loading={isLoading}
        isError={isError}
        error={error}
        title={'Top Rating'}
      />
    </>
  );
};

export default TopRated;
