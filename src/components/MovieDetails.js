import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Movie = (props) => {
  const { title } = useParams();
  const { movie } = useSelector((state) => state.movie);

  const getMovie = async () => {
    const response = await fetch(`${props.API_URL}&t=${title}`);
    const data = await response.json();
    console.log(movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="min-h-screen grid md:grid-cols-2 md:items-center justify-center">
      <div className="">
        <img
          src={movie.Poster ? movie.Poster : "https://placekitten.com/640/360"}
          alt="img"
        ></img>
      </div>
      <div>
        <h1 className="text-white">{movie.Title}</h1>
        <p className="text-gray-300">{movie.Plot}</p>
      </div>
    </div>
  );
};

export default Movie;
