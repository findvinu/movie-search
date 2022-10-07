import React, { useEffect, useState } from "react";

import MovieCard from "./movieCard";
import axios from "axios";

import "./movies.css";

const MoviesList = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=eb1ef3fc&s=com&type=")
      .then((response) => {
        const result = response.data.Search;
        setMovieList(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  /*   const getMovieDetailClickHandler = (IMDb) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=eb1ef3fc&i${IMDb}`)
      .then((result) => {
        const response = result.data;
        console.log("response", response);
      })
      .error((error) => {
        console.log("error", error);
      });
    console.log("getMovieDetailClickHandler clicked");
  }; */

  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <div className="movieLayout">
      <div className="movieList">
        {movieList.map((movie) => {
          return (
            <MovieCard
              key={movie.imdbID}
              movieList={movie}
              //   getMovieDetailClickHandler={getMovieDetailClickHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
