import React, { useState } from "react";
import axios from "axios";

import "./movies.css";

const MovieDetail = ({ isLoading, response }) => {
  /*   const getMovieDetail = (IMDb) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=eb1ef3fc&i${IMDb}`)
      .then(() => {
        const result = response.data;
        setResponse(result);
        console.log("response", result);
      })
      .error((error) => {
        console.log("error", error);
      });
  }; */

  console.log("movieList-MovieDetals", response);

  return (
    <div className="movieDetail">
      {isLoading ? (
        <div className="loaderImage">
          <img
            src="https://icons8.com/preloaders/preloaders/5/Filled%20fading%20balls.gif"
            alt="loading"
          />
        </div>
      ) : (
        <>
          <img src={response?.Poster} alt="movie" />
          <div className="movieDetailText">
            <h3>{response?.Title}</h3>
            <span>Type: {response?.Type}</span>
            <p>{response?.Plot}</p>
            <div>
              <span>
                <b>Language :</b> {response?.Language}
              </span>
              |
              <span>
                <b>Released Date :</b> {response?.Released}
              </span>
            </div>
            <div>
              <span>
                <b>Ratings :</b>
              </span>
              |
              <span>
                <b>Rated :</b> {response?.Rated}
              </span>
            </div>
            <div>
              <b>Movie Category :</b> {response?.Genre}
            </div>
            <div>
              <b>Stars :</b> {response?.Actors}
            </div>
            <div>
              <b>Directed by :</b> {response?.Director}
            </div>
            <div>
              <b>Writer :</b> {response?.Writer}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
