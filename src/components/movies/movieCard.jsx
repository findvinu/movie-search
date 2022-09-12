import React from "react";

import "./movies.css";

const MovieCard = ({ Title, Poster, Year, Type, onClick }) => {
  return (
    <div className="movieCard">
      <h3 onClick={onClick}>{Title}</h3>
      <img src={Poster} alt={Title} onClick={onClick} />
      <div className="footer">
        <div className="footerText">
          <span>Year: {Year}</span>
          <span>Type: {Type}</span>
        </div>
        <img
          height="24px"
          src="https://tse4.mm.bing.net/th?id=OIP.uGCBsnKKOawAc46nhBw4ogHaG-&pid=Api&P=0"
          alt="link"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default MovieCard;
