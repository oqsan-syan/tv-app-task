import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Movie } from '../../types';
import data from '../data.json';

const initialState: AppState = {
  featuredData: data.Featured,
  trendingNowData: data.TrendingNow,
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
    setPauseVideo: (state) => {
      state.playVideo = false;
    },
    toggleMenu: (state) => {
      state.isHovered = !state.isHovered;
    },
    setMenuOpen: (state) => {
      state.isHovered = true;
    },
    setMenuClosed: (state) => {
      state.isHovered = false;
    },
  },
});

export const { selectMovie, setPlayVideo, setPauseVideo, toggleMenu, setMenuOpen, setMenuClosed } = moviesSlice.actions;

export const selectMovieState = (state: { movies: AppState }) => state.movies;
export const selectPlayVideo = (state: { movies: AppState }) => state.movies.playVideo;
export const selectIsHovered = (state: { movies: AppState }) => state.movies.isHovered;

export default moviesSlice.reducer;
