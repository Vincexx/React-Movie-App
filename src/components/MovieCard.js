import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="shadow-md bg-black p-5 transform transition duration-500 mx-auto rounded hover:scale-110">
      <img
        src={movie.Poster ? movie.Poster : "https://placekitten.com/640/360"}
        alt="img"
      ></img>
      <div className="mt-3 flex items-center justify-between">
        <p className="font-bold text-white">MOVIE</p>
        <p className="font-bold text-white">{movie.Year}</p>
      </div>
      <p className="font-bold text-2xl text-white">{movie.Title}</p>
    </div>
  );
};

export default MovieCard;
