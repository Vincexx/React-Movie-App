import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="shadow-md bg-black p-5 transform transition duration-500 mx-auto rounded hover:scale-110">
      <img
        src={movie.Poster ? movie.Poster : "https://placekitten.com/640/360"}
        alt="img"
      ></img>
      <div className="my-3 flex items-center justify-between">
        <p className="text-gray-300">MOVIE</p>
        <p className="font-thin text-gray-300">{movie.Year}</p>
      </div>
      <div>
        <p className="font-bold text-1xl uppercase text-white leading-4">
          {movie.Title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
