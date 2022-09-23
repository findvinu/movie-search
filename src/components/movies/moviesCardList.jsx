import React from "react";

import MovieCard from "./movieCard";


import "./movies.css";

const MovieCardList = ({
  movieList,
  getMovieDetails,
  setFavMovie,
  isActive,
  response,
  movieId,
}) => {
  return (
    <div className="movieLayout">
      <div className="movieList">
        {movieList &&
          movieList.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                movieList={movie}
                getMovieDetails={getMovieDetails}
                setFavMovie={setFavMovie}
                isActive={isActive}
                response={response}
                movieId={movieId}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MovieCardList;
