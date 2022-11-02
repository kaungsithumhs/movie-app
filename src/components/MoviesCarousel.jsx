import React from 'react';
import { base_url } from '../utils/tmdbApi';
import { useNavigate } from 'react-router-dom';

const MoviesCarousel = ({ movieData, error, loading }) => {
  const navigate = useNavigate();
  if (loading) return <p>loading...</p>;
  if (error) return console.log(error.message);
  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div
      className='flex flex-auto flex-wrap items-center justify-around'
      style={{
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,10,54,1) 43%, rgba(10,10,54,1) 51%)',
      }}
    >
      {movieData?.data.results.map((md) => (
        <div key={md.id} className='pb-48 mb-24'>
          <div className='px-3 pb-3 h-32 w-64 relative  '>
            <img
              className='object-top  rounded-lg z-10  my-10  hover:cursor-pointer hover:scale-90  transition ease-in-out duration-500'
              src={`${base_url}${md.poster_path}`}
              alt='no img'
              onClick={() => handleClick(md.id)}
            />
            <p className='  text-white absolute top-[22rem] pb-4 pt-2  '>{md.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesCarousel;
