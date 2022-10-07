import React from "react";

import Header from "./components/movies/header";
import Search from "./components/movies/search";
import MoviesList from "./components/movies/MoviesList";

import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/movies/movieDetail";

function App() {
  return (
    <div className="layout">
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movieDetail/:movieId" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
