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
    <div className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 justify-items-center">
        <div className="">
          <img
            src={
              movie.Poster ? movie.Poster : "https://placekitten.com/640/360"
            }
            alt="img"
          ></img>
        </div>
        <div className="">
          <h1 className="text-white text-3xl font-bold">{movie.Title}</h1>
          <p className="text-gray-300 mt-3">{movie.Plot}</p>
          <div className="mt-5 leading-10">
            <p>
              <span className="text-slate-300 font-bold"> Genre :</span>{" "}
              <span className="text-slate-300 font-thin">{movie.Genre}</span>
            </p>
            <p>
              <span className="text-slate-300 font-bold"> Language :</span>{" "}
              <span className="text-slate-300 font-thin">{movie.Language}</span>
            </p>
            <p>
              <span className="text-slate-300 font-bold"> Actors :</span>{" "}
              <span className="text-slate-300 font-thin">{movie.Actors}</span>
            </p>
            <p>
              <span className="text-slate-300 font-bold"> Director :</span>{" "}
              <span className="text-slate-300 font-thin">{movie.Director}</span>
            </p>
            <p>
              <span className="text-slate-300 font-bold"> Writer :</span>{" "}
              <span className="text-slate-300 font-thin">{movie.Writer}</span>
            </p>
            <p>
              <span className="text-slate-300 font-bold"> Released Year :</span>{" "}
              <span className="text-slate-300 font-thin">{movie.Released}</span>
            </p>
            <p>
              <span className="text-slate-300 font-bold"> Country :</span>{" "}
              <span className="text-slate-300 font-thin">{movie.Country}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
