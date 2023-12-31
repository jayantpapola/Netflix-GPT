import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayinMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlayinMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  //   return <div>useNowPlayingMovies</div>;
};

export default useNowPlayingMovies;
