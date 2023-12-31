import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title, poster }) => {
  if (!movies) return;
  return (
    <div className="px-6 py-4">
      <div>
        <h2 className="text-white text-3xl font-bold">{title}</h2>

        <div className="flex overflow-x-scroll ">
          <div className="flex gap-3 p-1">
            {movies.map((movie) => (
              <MovieCard movie={movie} poster={poster} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
