import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getDocumentary } from '../utils/tmdbApi';
import MoviesCarousel from './MoviesCarousel';
const Doumentary = () => {
  const { isLoading, isError, error, data: docMovie } = useQuery(['documantry'], getDocumentary);
  return <MoviesCarousel movieData={docMovie} loading={isLoading} error={isError} title='Documentary' />;
};

export default Doumentary;
