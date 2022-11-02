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

  // console.log(movieList?.data?.results);
  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };
  return (
    <div className='min-h-screen bg-gray-100 '>
      <div className='p-10 h-100 '>
        <div className='bg-white shadow-md border-gray-100  border sm:rounded-3xl p-3 flex justify-around h-full'>
          <div className=' w-[25%]'>
            <img
              className='rounded-2xl shadow-xl mx-auto h-full  object-cover bg-center object-center'
              src={`${base_url}${profileData?.data?.profile_path}`}
              alt=''
              // onClick={() => goToActor(detail?.)}
            />
          </div>

          <div className='w-[50%] p-1'>
            <div className='justify-start'>
              <h1 className='text-4xl font-light  '>{profileData?.data?.name}</h1>
              <h2 className='mt-3'>{profileData?.data?.birthday.split('-').join('.')}</h2>
              <p className='mt-3'>{profileData?.data?.biography || 'Loading ...'}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex flex-auto flex-wrap items-center justify-around '
        // style={{
        //   background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,10,54,1) 43%, rgba(10,10,54,1) 51%)',
        // }}
      >
        {movieList?.data.results.slice(0, 16).map((md) => (
          <div key={md.id} className='pb-24  mb-24'>
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
