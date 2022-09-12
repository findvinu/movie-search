import React, { useEffect, useState } from "react";

import MovieCard from "./movieCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./movies.css";

const Movies = () => {
  const [responseData, setResponseData] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./movieCardDetail");
  };

  const getApiData = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=eb1ef3fc&s=com&type=")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="movieLayout">
      {console.log("responseData", responseData?.Search)}
      <div className="movieList">
        {responseData.Search &&
          responseData.Search.map((movie) => {
            return (
              <MovieCard key={movie.imdbID} {...movie} onClick={handleClick} />
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
