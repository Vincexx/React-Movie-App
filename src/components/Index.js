import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../features/movie";
import axios from "axios";
import Loader from "./Loader";

const Index = (props) => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movie);
  const [searchTerm, setsearchTerm] = useState("");

  const searchMovies = (title) => {
    const response = axios
      .get(`${props.API_URL}&s=${title}`)
      .then(async (res) => {
        await dispatch(
          actions.getMovies({
            type: "FETCH",
            payload: res.data.Search,
          })
        );
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter")
      searchMovies(searchTerm === "" ? "Batman" : searchTerm);
  };

  useEffect(() => {
    dispatch(actions.clearData());
    searchMovies("Batman");
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="my-7 flex justify-center">
          <input
            type="text"
            value={searchTerm}
            className="py-2 px-3 shadow-md border-5 w-full"
            placeholder="Search Movies"
            onChange={(e) => setsearchTerm(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          ></input>
          <button
            onClick={() =>
              searchMovies(searchTerm === "" ? "Batman" : searchTerm)
            }
            className="px-3 py-2 shadow-md ml-3 text-white hover:bg-red-700 bg-red-600"
          >
            Search
          </button>
        </div>

        {loading ? (
          <Loader />
        ) : movies.payload?.length > 0 ? (
          <div className="container">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {movies.payload.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1>No Movies Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
