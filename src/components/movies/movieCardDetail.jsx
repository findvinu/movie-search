import React from "react";

import "./movies.css";

const MovieCardDetail = ({ response, getMovieDetails, isLoading }) => {
  console.log("responseDetails", response);

  return (
    <div className="movieDetail">
      {!isLoading ? (
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
                {/* {response?.Ratings} */}
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

export default MovieCardDetail;
