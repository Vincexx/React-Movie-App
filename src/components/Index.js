import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import loadingImg from "../logo.svg";
import Header from "./Header";

const Index = (props) => {
  const [movies, setMovies] = useState(null);
  const [searchTerm, setsearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const searchMovies = async (title) => {
    const response = await fetch(`${props.API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    setLoading(false);
  };

  useEffect(() => {
    searchMovies("Batman");
    console.log("Use Effect!");
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter")
      searchMovies(searchTerm === "" ? "Batman" : searchTerm);
  };

  return (
    <div className="App bg-black">
      <div className="container mx-auto px-4 py-3">
        <div>
          <Header />
          <div className="my-7 flex justify-center">
            <input
              type="text"
              value={searchTerm}
              className="py-2 px-3 shadow-md border-5 w-full"
              placeholder="Search Movies"
              onChange={(e) => setsearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            ></input>
            <button
              className="px-3 py-2 shadow-md ml-3 text-white hover:bg-red-700 bg-red-600"
              onClick={() =>
                searchMovies(searchTerm === "" ? "Batman" : searchTerm)
              }
            >
              Search
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span className="visually-hidden">
                <img src={loadingImg} alt="img"></img>
              </span>
            </div>
          </div>
        ) : movies?.length > 0 ? (
          <div className="container">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {movies.map((movie) => (
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
