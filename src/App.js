import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

// b71712c0

const API_URL = "http://omdbapi.com?apikey=b71712c0";

const App = () => {
  const [movies, setMovies] = useState(null);
  const [searchTerm, setsearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="App">
      <div className="container mx-auto px-4 py-3">
        <div>
          <div className="text-center">
            <h1 className="font-bold text-4xl uppercase text-black">
              LIST OF MOVIES
            </h1>
          </div>
          <div className="my-7 flex justify-center">
            <input
              type="text"
              value={searchTerm}
              className="py-2 px-3 shadow-md border-5 w-full"
              placeholder="Search Movies"
              onChange={(e) => setsearchTerm(e.target.value)}
            ></input>
            <button
              className="px-3 py-2 shadow-md ml-3 text-white bg-black hover:bg-slate-700"
              onClick={() => searchMovies(searchTerm)}
            >
              Search
            </button>
          </div>
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            <div className="grid grid-cols-4 gap-3">
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>No Movies Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
