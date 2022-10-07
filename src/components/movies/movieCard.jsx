import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./movies.css";

const MovieCard = ({ movieList }) => {
  const navigate = useNavigate();

  const getMovieDetailClickHandler = (imdbID) => {
    navigate(`/movieDetail/:${imdbID}`);
  };

  console.log("movieList-MovieCard", movieList.imdbID);

  return (
    <div className="movieCard">
      <h3>{movieList.Title}</h3>
      <img
        src={movieList.Poster}
        alt={movieList.Title}
        onClick={() => getMovieDetailClickHandler(movieList.imdbID)}
      />
      <div className="footer">
        <div className="footerText">
          <span>Year: {movieList.Year}</span>
          <span>Type: {movieList.Type}</span>
        </div>
        <img
          height="24px"
          src="https://tse4.mm.bing.net/th?id=OIP.uGCBsnKKOawAc46nhBw4ogHaG-&pid=Api&P=0"
          alt="link"
        />
      </div>
    </div>
  );
};

export default MovieCard;
