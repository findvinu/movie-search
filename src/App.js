import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/movies/header";
import Search from "./components/movies/search";
import MoviesCardList from "./components/movies/moviesCardList";
import MovieCardDetail from "./components/movies/movieCardDetail";
import FavouriteComponent from "./components/movies/favouriteComponent";
import axios from "axios";

function App({ imdbID }) {
  const [movieList, setMovieList] = useState([]);
  const [item, setItem] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // const navigate = useNavigate();

  const getMovieList = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=eb1ef3fc&s=com&type=")
      .then((response) => {
        const movieData = response.data.Search;
        setMovieList(movieData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getMovieList();
  }, []);

  // get movie card details
  const getMovieDetails = () => {
    //  navigate(`movieCardDetail/${imdbID}`);
    console.log("clicked getMovieDetails", movieList);
  };

  // save localhost
  const setFavMovie = (e) => {
    console.log("clicked setFavMovie");
    setIsActive(!isActive);

    localStorage.setItem("item", JSON.stringify(item));
  };

  const clickSearchHeandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?apikey=eb1ef3fc&s=com&type=&i${imdbID}`)
      .then((response) => {
        response = response.data;
      })
      .catch((error) => error);

    console.log("clicked clickSearchHeandler");
  };

  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <Search clickSearchHeandler={clickSearchHeandler} />
        <Routes>
          <Route
            path="/"
            element={
              <MoviesCardList
                movieList={movieList}
                getMovieDetails={getMovieDetails}
                setFavMovie={setFavMovie}
                isActive={isActive}
              />
            }
            exact
          />
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
