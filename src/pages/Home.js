import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenericCarousel from "../components/GenericCarousel";
import Carousel1 from "../assets/Carousel1.jpg";
import "./Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import AllDataContextProvider from "../context/AllDataContextProvider";
import AllDataContext from "../context/AllDataContext";

const Home = () => {
  const [comedy, setComedy] = useState(null); // State to hold fetched data
  const [scifi, setScifi] = useState(null); // State to hold fetched data
  const [awardwinning, setAwardwinning] = useState(null); // State to hold fetched data
  const [thriller, setThriller] = useState(null); // State to hold fetched data
  const [romance, setRomance] = useState(null); // State to hold fetched data
  const [drama, setDrama] = useState(null); // State to hold fetched data
  const [horror, setHorror] = useState(null); // State to hold fetched data
  const [mystery, setMystery] = useState(null); // State to hold fetched data
  const [biography, setBiography] = useState(null); // State to hold fetched data
  const [war, setWar] = useState(null); // State to hold fetched data
  const [fantasy, setFantasy] = useState(null); // State to hold fetched data
  const [action, setAction] = useState(null); // State to hold fetched data
  const [adventure, setAdventure] = useState(null); // State to hold fetched data
  const [documentary, setDocumentary] = useState(null); // State to hold fetched data

  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to hold error information
  const { allData, setAllData } = useContext(AllDataContext);
  const [carousel, setCarousel] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        //---------------------------------------------------------authentication----------------------------
        const baseServerUrl = `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}`;

        //-----------------------------------------------comedy--------------------------------------------
        const comedyResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/comedy/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //----------------------------------comedy-----------------------------------------------------

        //-----------------------------------------------romance--------------------------------------------
        const romanceResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/romance/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------romance-----------------------------------------------------

        //-----------------------------------------------war--------------------------------------------
        const warResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/war/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //----------------------------------war-----------------------------------------------------

        //-----------------------------------------------thriller--------------------------------------------
        const thrillerResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/thriller/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------thriller-----------------------------------------------------

        //-----------------------------------------------fantasy--------------------------------------------
        const fantasyResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/fantasy/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------fantasy-----------------------------------------------------

        //-----------------------------------------------horror--------------------------------------------
        const horrorResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/horror/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------horror-----------------------------------------------------

        //-----------------------------------------------action--------------------------------------------
        const actionResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/action/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------action-----------------------------------------------------

        //-----------------------------------------------adventure--------------------------------------------
        const adventureResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/adventure/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------adventure-----------------------------------------------------

        //-----------------------------------------------mystery--------------------------------------------
        const mysteryResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/mystery/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------mystery-----------------------------------------------------

        //-----------------------------------------------documentary--------------------------------------------
        const documentaryResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/documentary/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------documentary-----------------------------------------------------

        //-----------------------------------------------biography--------------------------------------------
        const biographyResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/biography/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------biography-----------------------------------------------------

        //-----------------------------------------------drama--------------------------------------------
        const dramaResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/drama/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------drama-----------------------------------------------------

        //-----------------------------------------------award-winning--------------------------------------------
        const awardwinningResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/awardwinning/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------award-winning-----------------------------------------------------

        //-----------------------------------------------scifi--------------------------------------------
        const scifiResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/scifi/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const fetchedData = await Promise.all([
          comedyResponse,
          romanceResponse,
          warResponse,
          thrillerResponse,
          fantasyResponse,
          horrorResponse,
          actionResponse,
          adventureResponse,
          mysteryResponse,
          documentaryResponse,
          biographyResponse,
          dramaResponse,
          awardwinningResponse,
          scifiResponse,
        ]);
        if (fetchedData.length != 14) {
          throw new Error("error while fetching all the data...");
        } else {
          const allParsedData = fetchedData.map(async (obj) => {
            const parsedObj = await obj.json();
            return parsedObj;
          });
          const allData = await Promise.all(allParsedData);
          setAllData(allData);
          const comedyarr = allData[0];
          const romancearr = allData[1];
          const wararr = allData[2];
          const thrillerarr = allData[3];
          const fantasyarr = allData[4];
          console.log("comedy", comedyarr[0].Thumbnail);
          setCarousel({
            carousel1: `https://localhost:3002/protected-route/carousel${comedyarr[0].CarouselFile}`,
            carousel2: `https://localhost:3002/protected-route/carousel${romancearr[0].CarouselFile}`,
            carousel3: `https://localhost:3002/protected-route/carousel${wararr[0].CarouselFile}`,
            carousel4: `https://localhost:3002/protected-route/carousel${thrillerarr[0].CarouselFile}`,
            carousel5: `https://localhost:3002/protected-route/carousel${fantasyarr[0].CarouselFile}`,
          });
          setComedy(allData[0]);
          setRomance(allData[1]);
          setWar(allData[2]);
          setThriller(allData[3]);
          setFantasy(allData[4]);
          setHorror(allData[5]);
          setAction(allData[6]);
          setAdventure(allData[7]);
          setMystery(allData[8]);
          setDocumentary(allData[9]);
          setBiography(allData[10]);
          setDrama(allData[11]);
          setAwardwinning(allData[12]);
          setScifi(allData[13]);
        }
        //----------------------------------scifi-----------------------------------------------------
      } catch (error) {
        setError(error);
        console.log(error); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    const checkSession = async () => {
      const session = await fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/checksession`,
        { credentials: "include" }
      );
      const sessionData = await session.json();
      console.log(session.ok, sessionData.loggedin);
      if (session.ok && sessionData.loggedin) {
        fetchData();
      } else {
        navigate("/");
      }
    };
    checkSession();
  }, []);

  const CarsouelSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="homeContainer">
      <Slider {...CarsouelSettings} className="banner">
        <div>
          <img
            style={{
              objectFit: "cover",
              height: "700px",
              width: "100%",
              objectPosition: "top",
            }}
            src={carousel.carousel1 ? carousel.carousel1 : "#"}
            alt="slide-1"
          />
        </div>
        <div>
          <img
            style={{
              objectFit: "cover",
              height: "700px",
              width: "100%",
              objectPosition: "top",
            }}
            src={carousel.carousel2 ? carousel.carousel2 : "#"}
            alt="slide-2"
          />
        </div>
        <div>
          <img
            style={{
              objectFit: "cover",
              height: "700px",
              width: "100%",
              objectPosition: "top",
            }}
            src={carousel.carousel3 ? carousel.carousel3 : "#"}
            alt="slide-3"
          />
        </div>
        <div>
          <img
            style={{
              objectFit: "cover",
              height: "700px",
              width: "100%",
              objectPosition: "top",
            }}
            src={carousel.carousel4 ? carousel.carousel4 : "#"}
            alt="slide-4"
          />
        </div>
        <div>
          <img
            style={{
              objectFit: "cover",
              height: "700px",
              width: "100%",
              objectPosition: "top",
            }}
            src={carousel.carousel5 ? carousel.carousel5 : "#"}
            alt="slide-5"
          />
        </div>
      </Slider>

      <div className="genreCarousels">
        <div className="titleBar">
          <h2 className="genreName">Comedy</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "comedy", data: comedy }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="comedy" data={comedy} />

        <div className="titleBar">
          <h2 className="genreName">Action</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "action", data: action }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="action" data={action} />

        <div className="titleBar">
          <h2 className="genreName">Horror</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "horror", data: horror }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="horror" data={horror} />

        <div className="titleBar">
          <h2 className="genreName">Romance</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "romance", data: romance }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="romance" data={romance} />

        <div className="titleBar">
          <h2 className="genreName">Adventure</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "adventure", data: adventure }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="adventure" data={adventure} />

        <div className="titleBar">
          <h2 className="genreName">War</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "war", data: war }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="war" data={war} />

        <div className="titleBar">
          <h2 className="genreName">Sci-fi</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "scifi", data: scifi }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="scifi" data={scifi} />

        <div className="titleBar">
          <h2 className="genreName">Mystery</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "mystery", data: mystery }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="mystery" data={mystery} />
      </div>
    </div>
  );
};

export default Home;
