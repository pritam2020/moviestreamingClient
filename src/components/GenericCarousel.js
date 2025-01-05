import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import "./GenericCarousel.css";

const GenericCarousel = ({ data }) => {
  const counter = 0;
  const [slidesToShow, setSlidesToShow] = useState(() => {
    // Synchronously determine the initial value
    return window.innerWidth <= 480 ? 4 : 7;
  }); // console.log("carousel data....")
  // console.log("data from generic carousel: ",data);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(7);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: slidesToShow === 4 ? "none" : "block" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    //console.log(style)
    return (
      <div
        className={className}
        style={{ ...style, display: slidesToShow === 4 ? "none" : "block" }}
        onClick={onClick}
      />
    );
  }
  const GenericSettings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
  };

  return (
    <div className="carousel-container" style={{ marginLeft: slidesToShow===7?"30px":"5px" }}>
      {/* <ScrollArrow className="horizontalscroll" direction="left" /> */}
      <Slider {...GenericSettings}>
        {data.map((dataArray) => {
          if (counter <= 20) {
            return (
              <div className="link-container" key={dataArray.MovieID}>
                <NavLink to="/user/streamming" state={{ dataArray }}>
                  <img
                    className="movieBanner"
                    src={`https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/protected-route/thumbnails${dataArray.Thumbnail}`}
                    alt="slide-2"
                    loading="lazy"
                  />
                </NavLink>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default GenericCarousel;
