import { NavLink } from "react-router-dom";

import "./movies.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="headerInn">
        <h1>IMDB Movies</h1>
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Favourites</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
