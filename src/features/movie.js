import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: {
      Actors: "Ben Affleck, Henry Cavill, Amy Adams",
      Awards: "14 wins & 31 nominations",
      BoxOffice: "$330,360,194",
      Country: "United States",
      DVD: "19 Jul 2016",
      Director: "Zack Snyder",
      Genre: "Action, Adventure, Sci-Fi",
      Language: "English",
      Metascore: "44",
      Plot: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Production: "N/A",
      Rated: "PG-13",
      Released: "25 Mar 2016",
      Response: "True",
      Runtime: "152 min",
      Title: "Batman v Superman: Dawn of Justice",
      Type: "movie",
      Website: "N/A",
      Writer: "Chris Terrio, David S. Goyer, Bob Kane",
      Year: "2016",
      imdbID: "tt2975590",
      imdbRating: "6.4",
      imdbVotes: "686,957",
    },
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
