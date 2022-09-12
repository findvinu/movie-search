import "./movies.css";

const Search = () => {
  return (
    <div className="searchBox">
      <div className="searchBoxInn">
        <input type="text" />
        <select>
          <option>All</option>
          <option>Movies</option>
          <option>Series</option>
          <option>Episode</option>
        </select>
        <button type="search">Search</button>
      </div>
    </div>
  );
};

export default Search;
