import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    loading: true,
  },
  reducers: {
    getMovies(state, action) {
      state.movies = action.payload;
      state.loading = false;
    },
  },
});

export const actions = movieSlice.actions;

export default movieSlice.reducer;
