import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Banner({ carouselData }) {
  const [allBannerData, setAllBannerData] = useState(null);
  const [singleBannerData, setSingleBannerrData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setAllBannerData(carouselData);
  }, [carouselData]);

  const CarsouelSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      switch (current) {
        case 0:
          setSingleBannerrData(allBannerData.carousel1);
          break;
        case 1:
          setSingleBannerrData(allBannerData.carousel2);
          break;
        case 2:
          setSingleBannerrData(allBannerData.carousel3);
          break;
        case 3:
          setSingleBannerrData(allBannerData.carousel4);
          break;
        case 4:
          setSingleBannerrData(allBannerData.carousel5);
          break;
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const onhandelWatchNow = (e, movie) => {
    e.preventDefault();
    navigate("/user/streamming", { state: { dataArray: singleBannerData } });
  };

  // console.log("prop of Banner", carousel);
  return (
    <div>
      <div>
        <div className="left-banner-blur">
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
        <Slider {...CarsouelSettings}>
          <div>
            <img
              className="banner-image"
              src={
                allBannerData
                  ? "https://localhost:3002/protected-route/carousel" +
                    allBannerData.carousel1.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              src={
                allBannerData
                  ? "https://localhost:3002/protected-route/carousel" +
                    allBannerData.carousel2.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              src={
                allBannerData
                  ? "https://localhost:3002/protected-route/carousel" +
                    allBannerData.carousel3.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              src={
                allBannerData
                  ? "https://localhost:3002/protected-route/carousel" +
                    allBannerData.carousel4.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              src={
                allBannerData
                  ? "https://localhost:3002/protected-route/carousel" +
                    allBannerData.carousel5.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              src={
                allBannerData
                  ? "https://localhost:3002/protected-route/carousel" +
                    allBannerData.carousel1.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
