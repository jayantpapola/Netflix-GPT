import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingmovies);

  if (!movies) return;

  const mainMovie = movies[parseInt(Math.random() * movies.length)];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
