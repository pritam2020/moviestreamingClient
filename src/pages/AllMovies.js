import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./allMovies.css";

const AllMovies = () => {
  const location = useLocation();
  const { genre, data } = location.state || {};

  return (
    <div className="allmovies-container">
      <div className="parentgridContainer">
      <div className="title">{!genre ? "Results" : genre}</div>
      <div className="gridContainer">
        {data.map((movieObj) => {
          const dataArray = movieObj;
          return (
            <div className="griditem" key={movieObj.MovieID}>
              <NavLink to="/user/streamming" state={{ dataArray }}>
                <img
                  className="thumbnailImg"
                  loading="lazy"
                  src={`https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/protected-route/thumbnails/${movieObj.Thumbnail}`}
                />
              </NavLink>
            </div>
          );
        })}
      </div>
      </div>
     
    </div>
  );
};
export default AllMovies;
