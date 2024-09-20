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

  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to hold error information
  const { allGenreDataContext, setAllGenreDataContext } =
    useContext(AllDataContext);
  const [carousel, setCarousel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Define an asynchronous function to fetch data

    //fetching all the genre data and setting to the state
    const fetchData = async () => {
      try {
        // Initialize allGenreData as an empty string
        let allGenreData = "";
    
        // Check if allGenreDataContext (context data) is available
        if (allGenreDataContext) {
          allGenreData = allGenreDataContext;
          console.log("Data exists in the context");
        } else {
          // If no context data is available, fetch data from the API
          console.log("Data does not exist in the context");
    
          // Fetch genre data
          const fetchedData = await fetchAllGenre();
    
          // Check if the fetched data is an array and if it contains exactly 14 genres
          if (Array.isArray(fetchedData) && fetchedData.length != 14) {
            throw new Error("Error while fetching all the data...");
          } else {
            // Parse all the fetched data using .json() if it's valid
            const allParsedData = fetchedData.map(async (obj) => {
              const parsedObj = await obj.json();
              return parsedObj;
            });
    
            // Await and resolve all promises to get parsed data
            allGenreData = await Promise.all(allParsedData);
    
            // Store the fetched genre data into the context for future use
            setAllGenreDataContext(allGenreData);
          }
        }
    
        // Extract individual genre data from the array (first genre is comedy, second is romance, etc.)
        const comedyarr = allGenreData[0];
        const romancearr = allGenreData[1];
        const wararr = allGenreData[2];
        const thrillerarr = allGenreData[3];
        const fantasyarr = allGenreData[4];
    
        // Set the carousel to show the first movie from each genre
        setCarousel({
          carousel1: comedyarr[0],
          carousel2: romancearr[0],
          carousel3: wararr[0],
          carousel4: thrillerarr[0],
          carousel5: fantasyarr[0],
        });
    
        // Set state for each genre array individually
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
        // Catch and handle any errors during the fetching or parsing process
        setError(error);
        console.error(error); // Log the error for debugging
      } finally {
        // Once fetching is done, set loading to false to stop the loading spinner or indicator
        setLoading(false);
      }
    };
    

    //checking user session
    const checkSession = async () => {
      const session = await fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/checksession`,
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
