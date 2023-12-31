import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
        Main Container
          - VideoBackground
          -Video Title
        Secondary Container
          -
      */}

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
