import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";
import loadingImg from "./logo.svg";

// b71712c0

const API_URL = "https://omdbapi.com?apikey=b71712c0";

const App = () => {
  const [movies, setMovies] = useState(null);
  const [searchTerm, setsearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    setLoading(false);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter")
      searchMovies(searchTerm === "" ? "Batman" : searchTerm);
  };

  return (
    <div className="App bg-black">
      <div className="container mx-auto px-4 py-3">
        <div>
          <div>
            <h3 className="text-white text-1xl uppercase font-extrabold tracking-tight hover:tracking-wide">
              FREEMOVIES
            </h3>
          </div>
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
      <Footer />
    </div>
  );
};

export default App;
