import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail, base_url, getMovies, instance } from '../utils/tmdbApi';
import { useQuery } from '@tanstack/react-query';
import ReactPlayer from 'react-player';

const TestDetail = () => {
  const { id } = useParams();

  const [backdrop, setBackdrop] = useState(true);

  const { isLoading, isError, error, data: detail } = useQuery(['movieDetail', id], () => getMovieDetail(id));

  if (isLoading) return <p className='h-full w-full absolute inset-0'>Loading...</p>;

  const getMovieTrailerVideoKey = (videosList) => {
    if (videosList && videosList.length > 0) {
      const trailers = videosList.filter(({ type, official }) => type.toLowerCase() === 'trailer' && official);
      return trailers.length > 0 ? trailers.at(-1).key : videosList.at(-1).key;
    }
    return null;
  };

  const trailerKey = getMovieTrailerVideoKey(detail?.data?.videos?.results);
  console.log(trailerKey);
  // if (isLoading) return <p className='h-full w-full absolute inset-0'>Loading...</p>;

  const backdropHandler = (moviedId) => {
    setBackdrop(!backdrop);
  };
  return (
    <div>
      <button
        onClick={backdropHandler}
        className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
        dataModalToggle='defaultModal'
      >
        Toggle modal
      </button>

      <div
        trailerKey
        id='defaultModal'
        tabindex='-1'
        ariaHidden='true'
        className={`${
          backdrop ? 'hidden' : 'flex'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}
      >
        <div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 '>
            <ReactPlayer url={`https://www.youtube.com/embed/${trailerKey}`} />
            <button className='bg-yellow-500 text-white p-2 m-2 rounded-md ' onClick={backdropHandler}>
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetail;
