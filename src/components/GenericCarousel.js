import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import "./GenericCarousel.css";

const GenericCarousel = ({ data }) => {
  const counter = 0;
  // console.log("carousel data....")
 // console.log("data from generic carousel: ",data);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
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
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  function goToSeeeAllPage() {}
  const GenericSettings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <div className="carousel-container" style={{ width: "95vw", marginLeft: "30px" }}>
      <Slider {...GenericSettings}>
        {data.map((dataArray) => {
          if (counter <= 20) {
            return (
              <div className="link-container" key={dataArray.MovieID} > 
                <NavLink to="/user/streamming" state={{ dataArray }}  >
                  <img
                    className="movieBanner"
                    src={`https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/thumbnails${dataArray.Thumbnail}`}
                    alt="slide-2"
                    width="150px"
                    height="200px"
                  />
                </NavLink>
              </div>
            );
          }
        })}
        {/* <div style={{ alignItems: "center" }}>
          <img
            src="https://via.placeholder.com/200x250"
            alt="slide-1"
            width="200"
            height="250"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/200x250"
            alt="slide-2"
            width="200"
            height="250"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/200x250"
            alt="slide-3"
            width="200"
            height="250"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/200x250"
            alt="slide-4"
            width="200"
            height="250"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/200x250"
            alt="slide-5"
            width="200"
            height="250"
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default GenericCarousel;
