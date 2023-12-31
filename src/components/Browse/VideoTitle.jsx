import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-[50px] flex flex-col justify-center text-white absolute bg-gradient-to-r from-black aspect-video w-screen">
      <h1 className="text-[50px] font-black">{title}</h1>
      <p className="py-5 w-2/5">{overview}</p>

      <div className="flex gap-2">
        <button className="px-[30px] py-[10px] bg-[white] text-black font-bold rounded-sm hover:bg-[grey] duration-100 text-l">
          <i className="mr-2 fa-solid fa-play"></i>Play
        </button>
        <button className="px-[30px] py-[10px] bg-[rgba(126,126,126,0.5)] font-bold rounded-sm hover:bg-[white] hover:text-black duration-100 text-l">
          <i className="mr-2 fa-solid fa-circle-info"></i>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
