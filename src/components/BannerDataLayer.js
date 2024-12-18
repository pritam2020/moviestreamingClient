import React from "react";
import { useNavigate } from "react-router-dom";
import "./BannerDataLayer.css";

function BannerDataLayer({ bannerData: singleBannerData }) {
  const navigate = useNavigate();

  const onhandelWatchNow = (e, movie) => {
    e.preventDefault();
    navigate("/user/streamming", { state: { dataArray: singleBannerData } });
  };

  return (
    <div className="left-banner-blur">
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
        <button
          className="watchnow-button"
          onClick={(e) => onhandelWatchNow(e, singleBannerData)}
        >
          Watch now
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default BannerDataLayer;
