import React from "react";
import MovieList from "./MovieList/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="-mt-[180px] relative">
      <MovieList
        title={"Now Playing"}
        movies={movies.nowPlayingmovies}
        poster
      />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Romance"} movies={movies.nowPlayingmovies} />
      {/*
       MovieList - Popular 
       MovieList - Now Playing 
       MovieList - Trending 
      */}
    </div>
  );
};

export default SecondaryContainer;
