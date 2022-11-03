import { useState, useEffect, useMemo } from "react";
import { instance, requests, base_url } from "../utils/tmdbApi";
const Banner = (props) => {
  const [moviesF, setMoviesF] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchBanner);
      let randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMoviesF(randomMovie);
      return request;
    };
    fetchData();
  }, []);

  return (
    <section className=" text-white">
      <div className="hero-image  relative">
        <img
          className=" h-96  min-w-full object-cover bg-no-repeat object-center-bottom opacity-[0.9]    "
          src={`${base_url}${moviesF.poster_path}`}
          alt={moviesF.name}
        />
        <div className="absolute bottom-5 px-3 w-screen  ml-2   ">
          <p className=" sm:text-2xl text-lg mb-3 text-left">{moviesF.name}</p>
          <p className="sm:w-[500px] text-sm text-left">{moviesF.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
