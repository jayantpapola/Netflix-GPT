import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../customHooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  const trailerId = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="h-[100%]">
      {trailerId && (
        <iframe
          className="w-[100%] aspect-video -mt-[60px]"
          src={`https://www.youtube.com/embed/${trailerId.key}?&autoplay=1&mute=1&controls=0&modestbranding=0&autohide=0&html5=1&loop=99`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackGround;
