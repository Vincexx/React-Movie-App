import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = (props) => {
  const { title } = useParams();
  // const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const response = await fetch(`${props.API_URL}&t=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Movie;
