import React, { useEffect, useState } from "react";

import MovieCard from "./movieCard";
import axios from "axios";

import "./movies.css";

const Movies = () => {
  const [responseData, setResponseData] = useState([]);
  const [filterMovieList, setFilterMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=eb1ef3fc&s=com&type=")
      .then((response) => {
        setResponseData(response.data);
        setFilterMovieList(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="movieLayout">
      <div className="movieList">
        {responseData.Search &&
          responseData.Search.map((movie) => {
            return <MovieCard key={movie.imdbID} {...movie} />;
          })}
      </div>
    </div>
  );
};

export default Movies;
