import React, { useState } from "react";
import "./movies.css";

const options = [
  { label: "All", value: "All" },
  { label: "Movies", value: "Movies" },
  { label: "Series", value: "Series" },
  { label: "Episode", value: "Episode" },
];

const Search = ({ clickSearchHeandler }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectType, setSelectType] = useState("");

  // search
  const onSelectInput = (e) => {
    setSearchInput(e.target.value);
    console.log("setSearchInput", searchInput);
  };
  const onSelectDropDown = (e) => {
    setSelectType(e.target.value);
    console.log("setSelectType", selectType);
  };

  return (
    <div className="searchBox">
      <div className="searchBoxInn">
        <input
          value={searchInput}
          onChange={onSelectInput}
          type="text"
          placeholder="Search..."
        />
        <select value={selectType} onChange={onSelectDropDown}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button type="button" onClick={() => clickSearchHeandler(searchInput)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
