import React from "react";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../../utils/gptSlice";

const GPTSearch = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="bg-[rgba(0,0,0,0.7)] fixed inset-0 p-10 z-[99] duration-200 flex justify-center"
      onClick={() => dispatch(toggleGptSearchView())}
    >
      <div className="bg-white h-[50px]">
        <input type="text" />
      </div>
    </div>
  );
};

export default GPTSearch;
