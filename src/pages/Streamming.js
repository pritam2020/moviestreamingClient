import React from "react";
import { useLocation } from "react-router-dom";
import "./streamming.css"

const Streaming = () => {
  const location = useLocation();
  const { dataArray } = location.state || {};
  return (
    <div>
      <h1>{dataArray.MovieName}</h1>
      <video width="1000px" height="auto" controls>
        <source
          src={`https://localhost:3002/protected-route/videos/${dataArray.FileName}`}
          type="video/mp4"
        />
      </video>
      <h2>Description:</h2>
      <h3>{dataArray.MovieDescription}</h3>
      <h2>Cast:</h2>
      <h3>{dataArray.cast}</h3>
      <h2>IMDB Rating:</h2>
      <h3>{dataArray.IMDBRating}</h3>
      <h2>Directors:</h2>
      <h3>{dataArray.Directors}</h3>
      <h2>Language: </h2>
      <h3>{dataArray.Language}</h3>
      <h2>Release Date: </h2>
      <h3>{dataArray.ReleaseDate}</h3>


    </div>
  );
};

export default Streaming;
