import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./movies.css";

const MovieCard = ({
  movieList,
  getMovieDetails,
  setFavMovie,
  isActive,
  response,
}) => {
  // const navigate = useNavigate();
  const { movieId } = useParams();

  return (
    <div className="movieCard">
      <h3 onClick={getMovieDetails}>{movieList.Title}</h3>
      <img
        src={movieList.Poster}
        alt={movieList.Title}
        onClick={getMovieDetails}
      />
      <div className={`footer ${isActive ? "active" : ""}`}>
        <div className="footerText">
          <span>Year: {movieList.Year}</span>
          <span>Type: {movieList.Type}</span>
        </div>
        <img
          className="favImg"
          height="24px"
          src="https://img.icons8.com/ios-filled/452/loading-heart--v2.png"
          alt="link"
          onClick={setFavMovie}
        />
        <img
          className="favImg1"
          height="24px"
          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjYgMjI2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyMjZ2LTIyNmgyMjZ2MjI2eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlNzRjM2MiPjxwYXRoIGQ9Ik02Ny44LDMxLjY0Yy0zMi41NDQsMCAtNTguNzYsMjYuMjE2IC01OC43Niw1OC43NmMwLDUyLjQzMiA0Ni4xMDIyMyw4My4xNjk3NyA3OS41NTAyMywxMDUuNzY5NzdjOC41ODgsNS44NzYgMTUuODIzNTMsMTAuODQ5NzYgMjEuNjk5NTMsMTUuMzY5NzZsMi43MTAyMywyLjI2bDIuNzEwMjMsLTIuMjZjNS40MjQsLTQuNTIgMTMuMTExNTMsLTkuNDkzNzYgMjEuNjk5NTMsLTE1LjM2OTc2YzMzLjQ0OCwtMjIuNiA3OS41NTAyMywtNTMuMzM3NzcgNzkuNTUwMjMsLTEwNS43Njk3N2MwLC0zMi41NDQgLTI2LjIxNiwtNTguNzYgLTU4Ljc2LC01OC43NmMtMTcuNjI4LDAgLTM0LjM1Miw3LjY4MjIzIC00NS4yLDIwLjc5MDIzYy0xMS4zLC0xMy4xMDggLTI3LjU3MiwtMjAuNzkwMjMgLTQ1LjIsLTIwLjc5MDIzek02Ny44LDQwLjY4YzE2LjcyNCwwIDMyLjA4ODQ3LDguMTM3NzcgNDEuNTgwNDcsMjIuMTQ5NzdsMy42MTk1Myw1LjQyMDQ3bDMuNjE5NTMsLTUuNDIwNDdjOS4wNCwtMTMuNTYgMjQuNDA0NDcsLTIxLjY5OTUzIDQxLjU4MDQ3LC0yMS42OTk1M2MyNy41NzIsMCA0OS43MiwyMi4xNDggNDkuNzIsNDkuNzJjMCw0Ny4wMDggLTQzLjg0MDQ3LDc2LjM4NjI0IC03NS40ODA0Nyw5Ny42MzAyNGMtNS44NzYsNC4wNjggLTExLjc1NzMsOC4xNDMwNiAtMTYuNzI5MywxMS43NTkwNmwtMi43MTAyMywxLjgwMDk0bC0yLjcxMDIzLC0xLjgwMDk0Yy00Ljk3MiwtMy42MTYgLTEwLjQwMTMsLTcuMjM5MDYgLTE2LjcyOTMsLTExLjc1OTA2Yy0zMS42NCwtMjEuMjQ0IC03NS40ODA0NywtNTAuNjIwNDcgLTc1LjQ4MDQ3LC05OC4wODA0N2MwLC0yNy41NzIgMjIuMTQ4LC00OS43MiA0OS43MiwtNDkuNzJ6TTY3LjgsNDkuNzJjLTIyLjYsMCAtNDAuNjgsMTguMDggLTQwLjY4LDQwLjY4YzAsNDIuOTQgNDEuMTM1NTMsNzAuNTEwMjMgNzEuNDE5NTMsOTAuODUwMjNjNC45NzIsMy42MTYgOS45NDA0Nyw2Ljc4NTMgMTQuNDYwNDcsOS45NDkzYzQuNTIsLTMuMTY0IDkuMDM2NDcsLTYuMzMzMyAxNC40NjA0NywtOS45NDkzYzMwLjI4NCwtMjAuMzQgNzEuNDE5NTMsLTQ3LjkxMDIzIDcxLjQxOTUzLC05MC44NTAyM2MwLC0yMi42IC0xOC4wOCwtNDAuNjggLTQwLjY4LC00MC42OGMtMTQuMDEyLDAgLTI2LjY2OCw2Ljc4MTc3IC0zMy45LDE3LjYyOTc3bC0xMC44NDk3NywxNi43MjA0N2wtMTEuNzUwMjMsLTE2LjI3MDIzYy03LjY4NCwtMTEuMyAtMjAuMzQsLTE4LjA4IC0zMy45LC0xOC4wOHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
          alt="link"
          onClick={setFavMovie}
        />
      </div>
    </div>
  );
};

export default MovieCard;
