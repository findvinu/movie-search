import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState([]);
  const [response, setResponse] = useState([]);
  const { movieId } = useParams();
  console.log("data...movieList", movieList);
  const navigate = useNavigate();

  const getMovieList = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=eb1ef3fc&s=com&type=")
      .then((response) => {
        const movieData = response.data.Search;
        setMovieList(movieData);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  };

  // get movie card details
  const getMovieDetails = (movieId) => {
    //  navigate(`movieCardDetail/${imdbID}`);
    axios
      .get(`https://www.omdbapi.com/?apikey=eb1ef3fc&i=tt1285016`)
      .then((response) => {
        setResponse(response.data);
        console.log("abc", response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  // save localhost
  const setFavMovie = (e) => {
    console.log("clicked setFavMovie");
    setIsActive(!isActive);

    localStorage.setItem("item", JSON.stringify(item));
  };

  const clickSearchHeandler = (str) => {
    // e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?apikey=eb1ef3fc&s=${str}&type=`)
      .then((response) => {
        console.log("data...response.data", response.data.Search);
        response = response.data.Search;
        setMovieList(response);
      })
      .catch((error) => error);

    console.log("clicked clickSearchHeandler");
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="layout">
      <Header />
      <Search clickSearchHeandler={clickSearchHeandler} />
      <Routes>
        <Route
          path="/"
          element={
            <MoviesCardList
              movieList={movieList}
              getMovieDetails={getMovieDetails}
              /*  setFavMovie={setFavMovie}
                isActive={isActive}
                response={response} */
            />
          }
          exact
        />
        <Route
          exact
          path={`/movieCardDetail/:movieId`}
          element={
            <MovieCardDetail
              getMovieDetails={getMovieDetails}
              response={response}
            />
          }
        />
        <Route
          exact
          path="/favouriteComponent"
          element={<FavouriteComponent />}
        />
      </Routes>
    </div>
  );
}

export default App;
