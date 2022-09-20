import React, { useState } from "react";

import "./movies.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [movieList, setMovieList] = useState("");

  const handleCategoryChange = (e) => {
    setMovieList(e.target.value);
    console.log("this is resut", e.target.value);
  };

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputFields = (e) => {
    setSearchValue("");
  };

  const onSearchClickHandler = (e) => {
    e.preventDefault();
    props.search(searchValue);
    setSearchValue(e.target.value);
    resetInputFields();
    console.log(props.search(searchValue));
  };

  return (
    <div className="searchBox">
      <div className="searchBoxInn">
        <input
          type="text"
          placeholder="Search..."
          value={props.value}
          onChange={handleSearchInputChanges}
        />
        <select onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Movies">Movies</option>
          <option value="Series">Series</option>
          <option value="Episode">Episode</option>
        </select>
        <button type="search" onClick={(e) => onSearchClickHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
