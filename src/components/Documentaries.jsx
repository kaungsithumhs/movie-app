import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getDocumentary } from "../utils/tmdbApi";
import MoviesCarousel from "./MoviesCarousel";

const Documentaries = () => {
  const {
    isLoading,
    isError,
    error,
    data: documentary,
  } = useQuery(["documentary"], getDocumentary);

  return <MoviesCarousel />;
};

export default Documentaries;
