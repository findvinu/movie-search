import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/movies/header";
import Search from "./components/movies/search";
import MoviesCardList from "./components/movies/moviesCardList";
import MovieCardDetail from "./components/movies/movieCardDetail";
import FavouriteComponent from "./components/movies/favouriteComponent";

function App() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />

        <Routes>
          <Route path="/" element={<MoviesCardList />} exact />
          <Route
            exact
            path="/movieCardDetail/:movieId"
            element={<MovieCardDetail />}
          />
          <Route
            exact
            path="/favouriteComponent"
            element={<FavouriteComponent />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
