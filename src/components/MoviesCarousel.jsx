import React from 'react';
import { base_url } from '../utils/tmdbApi';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
const MoviesCarousel = ({ movieData, error, loading, title }) => {
  const navigate = useNavigate();
  if (loading) return <p>loading...</p>;
  if (error) return console.log(error.message);
  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };
  console.log(movieData);

  return (
    <div
      className='flex flex-1 flex-wrap items-center'
      style={{
        background: 'linear-gradient(90deg, #b6b6b6ff 0%, #7a7afcff 51%)',
      }}
    >
      <h1 className='text-sky-900 text-5xl font-mono text-start uppercase mt-8 antialiased ml-5'>{title}</h1>
      <Swiper spaceBetween={100} slidesPerView={6} modules={[Navigation, EffectFade]}>
        {movieData?.data.results.map((md) => (
          <SwiperSlide key={md.id}>
            <div className='pb-32 mb-14 px-3'>
              <div className='px-2 pb-3 h-32 w-48 relative  '>
                <img
                  className='object-top  rounded-lg z-10  my-5  hover:cursor-pointer hover:scale-90  transition ease-in-out duration-500 '
                  src={`${base_url}${md.poster_path}`}
                  alt='no img'
                  onClick={() => handleClick(md.id)}
                />
                <p className='  text-white absolute top-[16rem] pb-4 pt-2  '>{md.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoviesCarousel;
