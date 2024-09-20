import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./streamming.css";
import imdbIcon from "../assets/icons8-imdb-96.png";

const Streaming = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dataArray } = location.state || "";
  const [streammingData, setStreammingData] = useState(dataArray);
  //setStreammingData(dataArray);

  useEffect(() => {
    const checkSession = async () => {
      const session = await fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/checksession`,
        { credentials: "include" }
      );
      const sessionData = await session.json();
      // console.log(session.ok, sessionData.loggedin);
      if (!session.ok && !sessionData.loggedin) {
        navigate("/");
      }
    };
    checkSession();

    const getstreamming = async () => {
      if (!streammingData) {
        const data = new URLSearchParams(location.search);
        // console.log("movieID");
        const movieID = data.get("movieID");
        // console.log(movieID);
        const streamingCall = await fetch(
          `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/moviedetails?movieID=${movieID}`,
          { credentials: "include" }
        );
        const streamingCallData = await streamingCall.json();
        if (streamingCall.ok && streamingCallData) {
          // console.log("data from streamming call");
          // console.log(streamingCallData);
          setStreammingData(streamingCallData[0]);
        }
      }
    };
    getstreamming();
    // console.log("streaming state...");
    // console.log(streammingData);
  }, []);

  return (
    <div className="streamming-container">
      <div className="movie-title-container">
        <div style={{padding:'20px',marginLeft:'20px'}}>
          <h1 className="movie-title">
            {streammingData && streammingData.MovieName
              ? streammingData.MovieName
              : "no movie name found"}
          </h1>
        </div>
        <div style={{padding:'20px'}}> </div>
        <div style={{padding:'20px'}}> </div>
        <div style={{padding:'20px'}}> </div>
        <div style={{padding:'20px'}}> </div>
        <div style={{padding:'20px'}}> </div>
        <div style={{padding:'20px'}}> </div>
        <div style={{padding:'20px'}}> </div>
      </div>
      <br />
      <video width="1000px" height="auto" controls>
        <source
          src={`https://localhost:3002/protected-route/videos/${
            streammingData && streammingData.FileName
              ? streammingData.FileName
              : "no file name"
          }`}
          type="video/mp4"
        />
      </video>
      <div className="movie-info-flex-container">
        <div className="left-flex-container">
          <h2 className="description-title">Description</h2>
          <h4 className="description">
            {streammingData && streammingData.MovieDescription
              ? streammingData.MovieDescription
              : "description not found"}
          </h4>
          <img className="imdb-icon" src={imdbIcon}  loading="lazy"/>
          <h4 className="imdb-rating">
            {streammingData && streammingData.IMDBRating
              ? streammingData.IMDBRating
              : "IMDB Rating not found"}
          </h4>
        </div>
        <div className="right-flex-container">
          <h2 className="cast-title">Cast</h2>
          <h4 className="cast">
            {streammingData && streammingData.cast
              ? streammingData.cast
              : "cast not found"}
          </h4>
          <br />
          <h2 className="directors-title">Directors</h2>
          <h4 className="directors">
            {streammingData && streammingData.Directors
              ? streammingData.Directors
              : "no directors found"}
          </h4>
          <br />
          <h2 className="language-title">Language </h2>
          <h4 className="language">
            {streammingData && streammingData.Language
              ? streammingData.Language
              : "no language  found"}
          </h4>
          <br />
          <h2 className="releaseDate-title">Release Date </h2>
          <h4 className="releaseDate">
            {streammingData && streammingData.ReleaseDate
              ? streammingData.ReleaseDate
              : "no release date found"}
          </h4>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Streaming;
