import React, { useState, useEffect } from "react";

const FavouriteComponent = ({ Title, Poster, Year, Type }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(localStorage.getItem("item", JSON.stringify(item)));
  }, [item]);

  return (
    <div className="FavouriteComponent">
      <div className="movieCard">
        <h3>{Title}</h3>
        <img src={Poster} alt={Title} />
        <div className="footer">
          <div className="footerText">
            <span>Year: {Year}</span>
            <span>Type: {Type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteComponent;
