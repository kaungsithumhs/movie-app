import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieDetail, base_url } from '../utils/tmdbApi';
import { useQuery } from '@tanstack/react-query';
import ReactPlayer from 'react-player';

const TestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  const goToProfile = (castId) => {
    navigate(`/profile/${castId}`);
  };
  const backdropHandler = () => {
    setBackdrop(!backdrop);
  };
  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12' key={detail?.data?.id}>
      <div className='py-3 sm:max-w-4xl sm:mx-auto'>
        <div className='bg-white shadow-lg border-gray-100 max-h-96 border sm:rounded-3xl p-8 flex justify-between'>
          <div className=' overflow-visible w-[30%]'>
            <img
              className='rounded-3xl shadow-lg mx-auto h-full object-cover bg-center object-[right_center]'
              src={`${base_url}${detail?.data?.backdrop_path}`}
              alt=''
            />
          </div>
          <div
            id='defaultModal'
            tabindex='-1'
            aria-hidden='true'
            className={`${
              backdrop ? 'hidden' : ' '
            } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
          >
            {/* Modal */}
            <div
              className='relative p-4 w-screen  h-screen  backdrop-blur-xl backdrop-opacit-10 hover:cursor-pointer'
              onClick={backdropHandler}
            >
              <div className='p-6 space-y-6 relative max-w-2xl mx-auto mt-20'>
                <ReactPlayer
                  url={`https://www.youtube.com/embed/${trailerKey}`}
                  controls
                  volume={true}
                  playing={backdrop}
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[60%] bg-gray-50 p-3 rounded-md space-y-5'>
            <div className='flex items-start'>
              <h2 className='text-2xl font-bold font-sans '>{detail?.data?.title}</h2>

              <div className='bg-yellow-400 font-bold rounded-xl p-2 mx-auto'>
                {Math.ceil(detail?.data?.vote_average).toFixed(1)}
              </div>
            </div>

            <div className='flex text-lg items-center justify-between text-gray-800'>
              <p>{detail?.data?.release_date.split('-').slice(0, 1)}</p>
              <button
                className='bg-yellow-500 text-white p-2 mr-6  rounded-md  text-sm hover:bg-yellow-700 hover:duration-200 hover:transition-all'
                data-modal-toggle='defaultModal'
                onClick={backdropHandler}
              >
                Preview
              </button>
            </div>

            <p className=' text-gray-400 max-h-40 overflow-y-hidden'>{detail?.data?.overview}</p>
          </div>
        </div>

        <div className='mt-5 h-auto flex bg-white rounded-md shadow-md mx-auto relative'>
          {detail?.data?.credits?.cast?.slice(0, 7)?.map((item) => (
            <div className='flex px-3 mx-3  '>
              <img
                onClick={() => goToProfile(item?.id)}
                src={`${base_url}${item?.profile_path}`}
                alt='no img'
                className=' h-32 object-contain p-2 mx-auto hover:cursor-pointer hover:scale-90  transition ease-out duration-75'
              />
              <p className='absolute top-32 w-32 px-1 mt-3 text-sm'>{item?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestDetail;
