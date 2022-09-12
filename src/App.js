import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/movies/header";
import Search from "./components/movies/search";
import Movies from "./components/movies/movies";
import MovieCardDetail from "./components/movies/movieCardDetail";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <Search />

        <Routes>
          <Route
            path="/"
            element={<Movies />}
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          />
          <Route
            path="/movieCardDetail"
            element={<MovieCardDetail />}
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
