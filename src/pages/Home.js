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

    //fetching all the genre data and setting to the state
    const fetchData = async () => {
      try {
        const fetchedData = await fetchAllGenre();
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
          // console.log("comedy", comedyarr[0].Thumbnail);
          setCarousel({
            carousel1: comedyarr[0],
            carousel2: romancearr[0],
            carousel3: wararr[0],
            carousel4: thrillerarr[0],
            carousel5: fantasyarr[0],
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

    //checking user session
    const checkSession = async () => {
      const session = await fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/checksession`,
        { credentials: "include" }
      );
      const sessionData = await session.json();
      console.log(session.ok, sessionData.loggedin);
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
      {/* <div className="left-banner-blur"></div> */}
      {/* <Slider {...CarsouelSettings} className="banner">
        <div style={{ position: "relative" }}>
          <NavLink to="/user/streamming" state={{ dataArray: comedy[0] }}>
            <img
              style={{
                objectFit: "cover",
                height: "700px",
                width: "100%",
                objectPosition:"top"
              }}
              src={carousel.carousel1 ? carousel.carousel1 : "#"}
              alt="slide-1"
            />
            <div style={{ position: "absolute", top: "200px", zIndex: "12" }}>
              hello
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/user/streamming" d state={{ dataArray: romance[0] }}>
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
          </NavLink>
        </div>
        <div>
          <NavLink to="/user/streamming" d state={{ dataArray: war[0] }}>
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
          </NavLink>
        </div>
        <div>
          <NavLink to="/user/streamming" d state={{ dataArray: thriller[0] }}>
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
          </NavLink>
        </div>
        <div>
          <NavLink to="/user/streamming" d state={{ dataArray: fantasy[0] }}>
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
          </NavLink>
        </div>
      </Slider> */}

      <Banner carouselData={carousel} />

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
