import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import { useState } from "react";
import { useEffect } from "react";
import BannerDataLayer from "./BannerDataLayer";

function Banner({ carouselData, device, deviceHeight }) {
  const [allBannerData, setAllBannerData] = useState(null);
  const [singleBannerData, setSingleBannerrData] = useState(null);

  useEffect(() => {
    setAllBannerData(carouselData);
    if (carouselData) {
      setSingleBannerrData(carouselData.carousel1);
    }
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
    afterChange: (current) => {
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
          slidesToShow: 1,
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


  // console.log("prop of Banner", carousel);
  return (
    <div>
      <div >
        <BannerDataLayer bannerData={singleBannerData} device={device} deviceHeight={deviceHeight-50} />
        <Slider {...CarsouelSettings}>
          <div>
            <img
              className="banner-image"
              style={{ height: device === "mobile" ? deviceHeight-50 : '' }}              loading="lazy"
              src={
                allBannerData
                  ? `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/protected-route/carousel` +
                  allBannerData.carousel1.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              style={{ height: device === "mobile" ? deviceHeight-50 : '' }} 
              loading="lazy"
              src={
                allBannerData
                  ? `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/protected-route/carousel` +
                  allBannerData.carousel2.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              style={{ height: device === "mobile" ? deviceHeight-50 : '' }} loading="lazy"
              src={
                allBannerData
                  ? `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/protected-route/carousel` +
                  allBannerData.carousel3.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              style={{ height: device === "mobile" ? deviceHeight-50 : '' }} loading="lazy"
              src={
                allBannerData
                  ? `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/protected-route/carousel` +
                  allBannerData.carousel4.CarouselFile
                  : "#"
              }
              alt="slide-1"
            />
          </div>
          <div>
            <img
              className="banner-image"
              style={{ height: device === "mobile" ? deviceHeight-50 : '' }} loading="lazy"
              src={
                allBannerData
                  ? `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/protected-route/carousel` +
                  allBannerData.carousel5.CarouselFile
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
