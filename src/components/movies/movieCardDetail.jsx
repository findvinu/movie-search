import React from "react";

import "./movies.css";

const movieCardDetail = () => {
  return (
    <div className="movieDetail">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNjY2YzFhMzAtNjUyNi00MzRkLWE1ZmEtMjlmMjQwYWFiMzg1L2ltYWdlXkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_SX300.jpg"
        alt="movie"
      />
      <div className="movieDetailText">
        <h3>The Bat People</h3>
        <span>Type: movie</span>
        <p>
          After being bitten by a bat in a cave, a doctor undergoes an
          accelerating transformation into a man-bat, which ruins his vacation
          and causes considerable distress for his wife.
        </p>
        <div>
          <span>
            <b>Language :</b> English
          </span>
          |
          <span>
            <b>Released Date :</b> 30 Jan 1974
          </span>
        </div>
        <div>
          <span>
            <b>Rating :</b> 2.7
          </span>
          |
          <span>
            <b>Rated :</b> PG
          </span>
        </div>
        <div>
          <b>Movie Category :</b> Horror, Romance
        </div>
        <div>
          <b>Stars :</b> Stewart Moss, Marianne McAndrew, Michael Pataki
        </div>
        <div>
          <b>Directed by :</b> Jerry Jameson
        </div>
        <div>
          <b>Writer :</b> Lou Shaw
        </div>
      </div>
    </div>
  );
};

export default movieCardDetail;
