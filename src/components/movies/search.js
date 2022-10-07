import React from "react";

import "./movies.css";

const Search = () => {
  return (
    <div className="searchBox">
      <div className="searchBoxInn">
        <input type="text" placeholder="Search..." />
        <select>
          <option value="All">All</option>
          <option value="Movies">Movies</option>
          <option value="Series">Series</option>
          <option value="Episode">Episode</option>
        </select>
        <button type="search">Search</button>
      </div>
    </div>
  );
};

export default Search;
