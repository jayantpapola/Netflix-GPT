import React from "react";
import { base_Image_path } from "../../../utils/constants";

const MovieCard = ({
  movie: { backdrop_path, poster_path },
  poster,
  movie,
}) => {
  if (poster) {
    return (
      <div className=" w-48 p-1 cursor-pointer">
        <img
          src={base_Image_path + poster_path}
          alt=""
          className=" rounded-md"
        />
      </div>
    );
  } else {
    return (
      <div className=" aspect-video h-[150px] p-1 cursor-pointer ">
        <img
          src={base_Image_path + backdrop_path}
          alt=""
          className=" rounded-md"
        />
      </div>
    );
  }
};

export default MovieCard;
