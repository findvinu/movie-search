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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const [response, setResponse] = useState([]);
  const { movieId } = useParams();

  const navigate = useNavigate();

  const getMovieList = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=eb1ef3fc&s=com&type=")
      .then((response) => {
        const movieData = response.data.Search;
        setMovieList(movieData);
        setIsLoading(true);
      })
      .catch((error) => {
        setIsLoading(true);
        setError(error);
      });
  };

  // get movie card details
  const getMovieDetails = (movieId) => {
    //  navigate(`movieCardDetail/${imdbID}`);
    navigate("/movieCardDetail/:movieId");
    axios
      // .get(`https://www.omdbapi.com/?apikey=eb1ef3fc&i=tt1285016`)
      .get(`https://www.omdbapi.com/?apikey=eb1ef3fc&i=${imdbID}`)
      .then((response) => {
        setResponse(response.data);
        setIsLoading(true);
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

  const clickSearchHeandler = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?apikey=eb1ef3fc&s=com&type=&i=${imdbID}`)
      .then((response) => {
        response = response.data;
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
              isLoading={isLoading}
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
