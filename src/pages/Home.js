import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenericCarousel from "../components/GenericCarousel";
import demoCarousel from "../components/peakpx.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        //---------------------------------------------------------authentication----------------------------
        const baseServerUrl=`https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}`;
        
        // const login = await fetch(`${baseServerUrl}/clientlogin/`, {
        //   credentials: "include",
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json", // Specify the content type
        //   },
        //   body: JSON.stringify({
        //     username: "pritamroy",
        //     password: "Unique@23",
        //   }),
        // });
        // console.log(login);
        //----------------------------------------------authentication------------------------------------------

        //-----------------------------------------------comedy--------------------------------------------
        const comedyResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/comedy/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!comedyResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonComedy = await comedyResponse.json();
        setComedy(jsonComedy);
        //----------------------------------comedy-----------------------------------------------------

         //-----------------------------------------------romance--------------------------------------------
         const romanceResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/romance/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!romanceResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonRomance = await romanceResponse.json();
        setRomance(jsonRomance);
        //----------------------------------romance-----------------------------------------------------

         //-----------------------------------------------war--------------------------------------------
         const warResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/war/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!warResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonWar = await warResponse.json();
        setWar(jsonWar);
        //----------------------------------war-----------------------------------------------------

         //-----------------------------------------------thriller--------------------------------------------
         const thrillerResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/thriller/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!thrillerResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonThriller = await thrillerResponse.json();
        setThriller(jsonThriller);
        //----------------------------------thriller-----------------------------------------------------

         //-----------------------------------------------fantasy--------------------------------------------
         const fantasyResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/fantasy/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!fantasyResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonFantasy = await fantasyResponse.json();
        setFantasy(jsonFantasy);
        //----------------------------------fantasy-----------------------------------------------------

         //-----------------------------------------------horror--------------------------------------------
         const horrorResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/horror/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!horrorResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonHorror = await horrorResponse.json();
        setHorror(jsonHorror);
        //----------------------------------horror-----------------------------------------------------

         //-----------------------------------------------action--------------------------------------------
         const actionResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/action/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!actionResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonAction = await actionResponse.json();
        setAction(jsonAction);
        //----------------------------------action-----------------------------------------------------

         //-----------------------------------------------adventure--------------------------------------------
         const adventureResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/adventure/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!adventureResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonAdventure = await adventureResponse.json();
        setAdventure(jsonAdventure);
        //----------------------------------adventure-----------------------------------------------------

         //-----------------------------------------------mystery--------------------------------------------
         const mysteryResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/mystery/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!mysteryResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonMystery = await mysteryResponse.json();
        setMystery(jsonMystery);
        //----------------------------------mystery-----------------------------------------------------

         //-----------------------------------------------documentary--------------------------------------------
         const documentaryResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/documentary/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!documentaryResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonDocumentary = await documentaryResponse.json();
        setDocumentary(jsonDocumentary);
        //----------------------------------documentary-----------------------------------------------------

         //-----------------------------------------------biography--------------------------------------------
         const biographyResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/biography/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!biographyResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonBiography = await biographyResponse.json();
        setBiography(jsonBiography);
        //----------------------------------biography-----------------------------------------------------

         //-----------------------------------------------drama--------------------------------------------
         const dramaResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/drama/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!dramaResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonDrama = await dramaResponse.json();
        setDrama(jsonDrama);
        //----------------------------------drama-----------------------------------------------------

         //-----------------------------------------------award-winning--------------------------------------------
         const awardwinningResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/awardwinning/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!awardwinningResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonAwardwinning = await awardwinningResponse.json();
        setAwardwinning(jsonAwardwinning);
        //----------------------------------award-winning-----------------------------------------------------

        //-----------------------------------------------scifi--------------------------------------------
        const scifiResponse = await fetch(
          `${baseServerUrl}/protected-route/moviedetails/scifi/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!scifiResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonScifi = await scifiResponse.json();
        setScifi(jsonScifi);
        //----------------------------------scifi-----------------------------------------------------
      } catch (error) {
        setError(error);
        console.log(error) // Handle any errors
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    fetchData(); // Call the async function
  }, []);

  const CarsouelSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="container">
      <Slider {...CarsouelSettings} className="banner">
        <div>
          <img
            style={{
              objectFit: "cover",
              height: "700px",
              width: "100%",
              objectPosition: "top",
            }}
            src={demoCarousel}
            alt="slide-1"
          />
        </div>
        <div>
          <img
            style={{ objectFit: "contain" }}
            src="https://via.placeholder.com/2000x600"
            alt="slide-2"
          />
        </div>
        <div>
          <img
            style={{ objectFit: "contain" }}
            src="https://via.placeholder.com/2000x600"
            alt="slide-3"
          />
        </div>
        <div>
          <img
            style={{ objectFit: "contain" }}
            src="https://via.placeholder.com/2000x600"
            alt="slide-4"
          />
        </div>
        <div>
          <img
            style={{ objectFit: "contain" }}
            src="https://via.placeholder.com/2000x600"
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
            state={{ genre: "comedy" }}
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
            state={{ genre: "action" }}
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
            state={{ genre: "horror" }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="horror" data={horror}/>


        <div className="titleBar">
          <h2 className="genreName">Romance</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "romance" }}
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
            state={{ genre: "adventure" }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="adventure" data={adventure}/>


        <div className="titleBar">
          <h2 className="genreName">War</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "war" }}
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
            state={{ genre: "scifi" }}
          >
            see all
          </NavLink>
        </div>
        <GenericCarousel key="scifi" data={scifi}/>


        <div className="titleBar">
          <h2 className="genreName">Mystery</h2>
          <NavLink
            className="seeallBtn"
            to="/user/allmovies"
            state={{ genre: "mystery" }}
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
