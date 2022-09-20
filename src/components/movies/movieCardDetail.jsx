import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./movies.css";

const MovieCardDetail = ({
  Poster,
  Title,
  Type,
  Plot,
  Language,
  Released,
  Ratings,
  Rated,
  Genre,
  Actors,
  Director,
  Writer,
}) => {
  const [response, setResponse] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  /* console.log("params", movieId); */

  const getMovieDetails = () => {
    axios
      .get(`https://www.omdbapi.com/?apikey=eb1ef3fc&i=${movieId}`)
      .then((response) => {
        setResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  /* console.log("response", response); */

  return (
    <div className="movieDetail">
      {loading ? (
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
