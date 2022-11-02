import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBannerData } from '../utils/tmdbApi';
import { data } from 'autoprefixer';
import { instance, requests, base_url } from '../utils/tmdbApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Banner = (props) => {
  // const [movieData, setMovieData] = useState(props.movieDataProps);
  const [moviesF, setMoviesF] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchBanner);
      setMoviesF(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  // console.log(movieData);

  // const singleMovie = movies?.data.results.map((d, index) => console.log(d.name));
  return (
    <section className=' text-white'>
      <div className='hero-image  relative'>
        <img
          className=' h-96  min-w-full object-cover bg-no-repeat object-center bg-[top_center] opacity-[0.8] z-10 '
          src={`${base_url}${moviesF.poster_path}`}
          alt={moviesF.name}
        />
        {/* <div className='banner--fadeButton '></div> */}
        <div className='absolute bottom-5 px-3  ml-2  '>
          <p className='text-2xl mb-3'>{moviesF.name}</p>
          <p className='w-96 text-sm'>{moviesF.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
