import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayinMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayinMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
