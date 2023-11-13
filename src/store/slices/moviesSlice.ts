import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Movie } from '../../types';
import data from '../data.json';

const initialState: AppState = {
  featuredData: data.Featured,
  trendingNowData: data.TendingNow,
  playVideo: false,
  isHovered: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    selectMovie: (state, action: PayloadAction<Movie>) => {
      state.featuredData = action.payload;
      state.playVideo = false;
    },
    setPlayVideo: (state) => {
      state.playVideo = true;
    },
    toggleMenu: (state) => {
      state.isHovered = !state.isHovered;
    },
  },
});

export const { selectMovie, setPlayVideo, toggleMenu } = moviesSlice.actions;

export const selectMovieState = (state: { movies: AppState }) => state.movies;
export const selectPlayVideo = (state: { movies: AppState }) => state.movies.playVideo;
export const selectIsHovered = (state: { movies: AppState }) => state.movies.isHovered;

export default moviesSlice.reducer;
