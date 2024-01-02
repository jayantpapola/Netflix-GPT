import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../customHooks/usePopularMovies";
import useTopRatedMovies from "../../customHooks/useTopRatedMovies";
import GPTSearch from "../GPTSearch/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptView = useSelector((state) => state.gpt.gptView);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {gptView && <GPTSearch />}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
