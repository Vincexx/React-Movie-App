import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="shadow-md bg-black p-5 transform transition duration-500 mx-auto rounded hover:scale-110">
      <Link to={`/React-Movie-App/${movie.Title}`}>
        <img
          src={movie.Poster ? movie.Poster : "https://placekitten.com/640/360"}
          alt="img"
        ></img>
      </Link>
      <div className="my-3 flex items-center justify-between">
        <p className="text-gray-300">MOVIE</p>
        <p className="font-thin text-gray-300">{movie.Year}</p>
      </div>
      <div>
        <Link to={`/React-Movie-App/${movie.Title}`}>
          <p className="font-bold text-1xl uppercase text-white leading-4 hover:text-red-500 cursor-pointer">
            {movie.Title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
