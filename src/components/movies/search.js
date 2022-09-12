import React, { useState } from "react";

import "./movies.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearchClickHandler = () => {};

  return (
    <div className="searchBox">
      <div className="searchBoxInn">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchInputChanges}
        />
        <select>
          <option>All</option>
          <option>Movies</option>
          <option>Series</option>
          <option>Episode</option>
        </select>
        <button type="search" onClick={onSearchClickHandler()}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
