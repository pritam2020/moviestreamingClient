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
import { NavbarCollapse } from "react-bootstrap";
import Banner from "../components/Banner";
import { Oval } from "react-loader-spinner";
import Loading from "../components/Loading";
import { fetchAllGenre } from "../utils/fetchAllGenre";
import AllMovies from "./AllMovies";

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
  const [device, setDevice] = useState(() => {
    return window.innerWidth <= 480 ? { device: "mobile", deviceHeight: window.innerHeight } : { device: "pc", deviceHeight: window.innerHeight }
  })
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to hold error information
  const { allGenreDataContext, setAllGenreDataContext } =
    useContext(AllDataContext);
  const [carousel, setCarousel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      try {
        let allGenreData = "";

        if (allGenreDataContext) {
          allGenreData = allGenreDataContext;
        } else {
          allGenreData = await fetchAllGenre();
          setAllGenreDataContext(allGenreData);
        }

        const comedyarr = allGenreData[0];
        const romancearr = allGenreData[1];
        const wararr = allGenreData[2];
        const thrillerarr = allGenreData[3];
        const fantasyarr = allGenreData[4];

        setCarousel({
          carousel1: comedyarr[0],
          carousel2: romancearr[0],
          carousel3: wararr[0],
          carousel4: thrillerarr[0],
          carousel5: fantasyarr[0],
        });

        setComedy(allGenreData[0]); // Comedy movies
        setRomance(allGenreData[1]); // Romance movies
        setWar(allGenreData[2]);     // War movies
        setThriller(allGenreData[3]); // Thriller movies
        setFantasy(allGenreData[4]); // Fantasy movies
        setHorror(allGenreData[5]);  // Horror movies
        setAction(allGenreData[6]);  // Action movies
        setAdventure(allGenreData[7]); // Adventure movies
        setMystery(allGenreData[8]); // Mystery movies
        setDocumentary(allGenreData[9]); // Documentary movies
        setBiography(allGenreData[10]); // Biography movies
        setDrama(allGenreData[11]);   // Drama movies
        setAwardwinning(allGenreData[12]); // Award-winning movies
        setScifi(allGenreData[13]);   // Sci-Fi movies

      } catch (error) {
        setError(error);
        console.error(error); // Log the error for debugging
      } finally {
        setLoading(false);
      }
    };
    const checkSession = async () => {
      const session = await fetch(
        `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/checksession`,
        { credentials: "include" }
      );
      const sessionData = await session.json();
      // console.log(session.ok, sessionData.loggedin);
      if (session.ok && sessionData.loggedin) {
        fetchData();
        // setTimeout(() => {
        //   fetchData();
        // }, 5000);
      } else {
        navigate("/");
      }
    };

    checkSession();

  }, []);
  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="homeContainer">

      <Banner carouselData={carousel} device={device.device} deviceHeight={device.deviceHeight} />
      <br />

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
      <br />
    </div>
  );
};

export default Home;
