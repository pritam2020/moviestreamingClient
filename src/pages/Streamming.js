import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./streamming.css";

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
      console.log(session.ok, sessionData.loggedin);
      if (!session.ok && !sessionData.loggedin) {
        navigate("/");
      }
    };
    checkSession();

    const getstreamming = async () => {
      if (!streammingData) {
        const data = new URLSearchParams(location.search);
        console.log("movieID");
        const movieID = data.get("movieID");
        console.log(movieID);
        const streamingCall = await fetch(
          `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/moviedetails?movieID=${movieID}`,
          { credentials:"include" }
        );
        const streamingCallData = await streamingCall.json();
        if (streamingCall.ok && streamingCallData) {
          console.log("data from streamming call");
          console.log(streamingCallData);
          setStreammingData(streamingCallData[0]);
        }
      }
    };
    getstreamming();
    console.log("streaming state...");
    console.log(streammingData);
  }, []);

  return (
    <div>
      <h1>
        {streammingData && streammingData.MovieName
          ? streammingData.MovieName
          : "no movie name found"}
      </h1>
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
      <h2>Description:</h2>
      <h3>
        {streammingData && streammingData.MovieDescription
          ? streammingData.MovieDescription
          : "description not found"}
      </h3>
      <h2>Cast:</h2>
      <h3>
        {streammingData && streammingData.cast
          ? streammingData.cast
          : "cast not found"}
      </h3>
      <h2>IMDB Rating:</h2>
      <h3>
        {streammingData && streammingData.IMDBRating
          ? streammingData.IMDBRating
          : "IMDB Rating not found"}
      </h3>
      <h2>Directors:</h2>
      <h3>
        {streammingData && streammingData.Directors
          ? streammingData.Directors
          : "no directors found"}
      </h3>
      <h2>Language: </h2>
      <h3>
        {streammingData && streammingData.Language
          ? streammingData.Language
          : "no language found"}
      </h3>
      <h2>Release Date: </h2>
      <h3>
        {streammingData && streammingData.ReleaseDate
          ? streammingData.ReleaseDate
          : "no release date found"}
      </h3>
    </div>
  );
};

export default Streaming;
