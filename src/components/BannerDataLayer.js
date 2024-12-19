import React from "react";
import { useNavigate } from "react-router-dom";
import "./BannerDataLayer.css";
import imdbIcon from "../assets/icons8-imdb-96.png"

function BannerDataLayer({ bannerData: singleBannerData , device, deviceHeight}) {
  const navigate = useNavigate();

  const onhandelWatchNow = (e, movie) => {
    e.preventDefault();
    navigate("/user/streamming", { state: { dataArray: singleBannerData } });
  };

  return (
    <div className="left-banner-blur"  style={{height:device==="mobile"?deviceHeight:''}}>
      <div className="emptyTopDiv">

      </div>
      <h1 className="banner-movie-name">
        {singleBannerData ? singleBannerData.MovieName : ""}
      </h1>
      <p className="banner-movie-description">
        {singleBannerData
          ? singleBannerData.MovieDescription.substring(0, 453) + "..."
          : ""}
      </p>
      {singleBannerData ? (
        <><div className="movieAudio">{singleBannerData.OriginalLanguage}</div>
          <div className="middleDiv">
            <img className="imdbIcon" src={imdbIcon} />
            {singleBannerData.IMDBRating}
            <span className="genre"> {singleBannerData.Genre}</span>

          </div>
          <button
            className="watchnow-button"
            onClick={(e) => onhandelWatchNow(e, singleBannerData)}
          >
            Watch now
          </button></>

      ) : (
        ""
      )}
    </div>
  );
}

export default BannerDataLayer;
