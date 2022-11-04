import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getActor, getMovieByActor, base_url } from '../utils/tmdbApi';

import { useNavigate, useParams } from 'react-router-dom';

const ProfileScreen = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const { isLoading, isError, error, data: profileData } = useQuery(['profile', id], () => getActor(id));

  const { data: movieList } = useQuery(['list', { id, page }], () => getMovieByActor({ id, page }));

  console.log(profileData?.data?.name);
  console.log(movieList);

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  function turncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (
    <div className=' sm:min-h-screen bg-gray-100  min-h-fit'>
      <div className='sm:p-10  p-5  '>
        <div
          className='bg-white shadow-md border-gray-100  border sm:rounded-3xl p-3 flex sm:justify-around flex-col sm:flex-row
         h-full'
        >
          <div className=' sm:max-w-[25%]'>
            <img
              className='rounded-2xl shadow-xl  min-h-auto  object-cover bg-center object-center'
              src={`${base_url}${profileData?.data?.profile_path}`}
              alt=''
            />
          </div>

          <div className='sm:w-[50%] p-1 w-100 mt-3'>
            <div className='justify-start'>
              <h1 className='sm:text-4xl font-light text-2xl '>{profileData?.data?.name}</h1>
              <h2 className='mt-3'>{profileData?.data?.birthday.split('-').join('.')}</h2>
              <p className='mt-3 text-sm sm:text-md'>
                {profileData?.data?.biography ? turncate(profileData?.data?.biography, 700) : 'Loading...'}
              </p>
              <button
                onClick={() => navigate(-1)}
                className='absolute sm:top-[30rem] 
                top-[41rem]  left-[18rem] sm:left-[64rem] text-blue-500 hover:text-red-500 cursor-pointer'
              >
                &laquo; Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex sm:flex-1 flex-wrap items-center justify-evenly '>
        {movieList?.data.results.slice(0, 16).map((md) => (
          <div key={md.id} className='pb-24  mb-20'>
            <div className='px-3 pb-3 h-24 w-36 relative  '>
              <img
                className='object-top  rounded-lg z-10    hover:cursor-pointer hover:scale-90  transition ease-in-out duration-500'
                src={`${base_url}${md.poster_path}`}
                alt='no img'
                onClick={() => handleClick(md.id)}
              />
              <p className='text-black absolute top-[11rem] text-sm pt-2'>{md.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
