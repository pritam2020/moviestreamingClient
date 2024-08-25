import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./allMovies.css";

const AllMovies = () => {
  const location = useLocation();
  const { genre, data } = location.state || {};

  return (
    <div className="allmovies-container">
      <div>
        <h1>{!genre ? "Results" : genre}</h1>
      </div>
      <div className="gridContainer">
        {data.map((movieObj) => {
          const dataArray = movieObj;
          return (
            <div className="griditem" key={movieObj.MovieID}>
              <NavLink to="/user/streamming" state={{ dataArray }}>
                <img
                  className="thumbnailImg"
                  src={`https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/thumbnails/${movieObj.Thumbnail}`}
                />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AllMovies;
