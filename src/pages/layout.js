import React, { useContext, useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./layout.css";
import menuIcon from "../assets/menuIcon.png";
import cancelIcon from "../assets/cancelIcon.png";
import AllDataContextProvider from "../context/AllDataContextProvider";
import AllDataContext from "../context/AllDataContext";
import Search from "../components/search";
import recorderIcon from "../assets/icons8-recorder-64.png";

const Layout = () => {
  const navigate = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);
  const [isHovered, setisHovered] = useState(false); //used by the genre button
  const [logout, setLogout] = useState(false);
  const { allGenreDataContext, setAllGenreDataContext } = useContext(AllDataContext);


  const setMenuOpen = () => {
    setmenuOpen(true);
  };
  const setMenuClose = () => {
    setmenuOpen(false);
  };
  const handelMouseEnter = () => {
    setisHovered(true);
  };
  const handelMouseLeave = () => {
    setisHovered(false);
  };

  const userLogout = () => {
    setLogout(true);
  };
  const userLogutCancel = () => {
    setLogout(false);
    setmenuOpen(false);
  };
  const logoutCall = async () => {
    try {
      const logoutRequest = await fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/clientlogout`,
        { credentials: "include" }
      );
      if (logoutRequest.ok) {
        const data = await logoutRequest.json();
        console.log("logout successfull\n" + JSON.stringify(data));
        navigate("/");
      } else {
        console.log("err in logging out ....");
      }
    } catch (err) {
      alert(err);
    }
  };

  
  return (
    <div className="rootHeaderContainer">
      <div className="headerContainer">
        <nav className="header">
          <div className="genreBtnContainerAndhamburgerMenuIcon-Container">
            <img
              className="hamburgerMenuIcon"
              loading="lazy"
              src={menuIcon}
              alt="menu"
              onClick={setMenuOpen}
            />
            <div
              className="genreBtnContainer"
              onMouseEnter={handelMouseEnter}
              onMouseLeave={handelMouseLeave}
            >
              <div className={`genreBtn${menuOpen ? "-blur" : ""}`}>Genre</div>
              {isHovered & !menuOpen ? (
                <div className="genreList">
                  {" "}
                  <ul>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Scifi", data: allGenreDataContext[13] }}
                        onClick={handelMouseLeave}
                      >
                        Sci-fi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Action", data: allGenreDataContext[6] }}
                        onClick={handelMouseLeave}
                      >
                        Action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Horror", data: allGenreDataContext[5] }}
                        onClick={handelMouseLeave}
                      >
                        Horror
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Comedy", data: allGenreDataContext[0] }}
                        onClick={handelMouseLeave}
                      >
                        Comedy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Drama", data: allGenreDataContext[11] }}
                        onClick={handelMouseLeave}
                      >
                        Drama
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Romance", data: allGenreDataContext[1] }}
                        onClick={handelMouseLeave}
                      >
                        Romance
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Documentary", data: allGenreDataContext[9] }}
                        onClick={handelMouseLeave}
                      >
                        Documentary
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Adventure", data: allGenreDataContext[7] }}
                        onClick={handelMouseLeave}
                      >
                        Adventure
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Award-winning", data: allGenreDataContext[12] }}
                        onClick={handelMouseLeave}
                      >
                        Award-winning
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Fantasy", data: allGenreDataContext[4] }}
                        onClick={handelMouseLeave}
                      >
                        fantasy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Thriller", data: allGenreDataContext[3] }}
                        onClick={handelMouseLeave}
                      >
                        Thriller
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "War", data: allGenreDataContext[2] }}
                        onClick={handelMouseLeave}
                      >
                        War
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Mystery", data: allGenreDataContext[8] }}
                        onClick={handelMouseLeave}
                      >
                        Mystery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="genreNavLink"
                        to="/user/allmovies"
                        state={{ genre: "Biography", data: allGenreDataContext[10] }}
                        onClick={handelMouseLeave}
                      >
                        Biograpny
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          <div className={`hamburgerMenu${menuOpen ? "-active" : ""}`}>
            <div>
              <img
                className="cancelIcon"
                loading="lazy"
                src={cancelIcon}
                alt="cancel"
                onClick={setMenuClose}
              />
            </div>
            <ul className="hamburgerMenuList">
              <li>
                <NavLink
                  className="navLink"
                  to="/user/account"
                  onClick={setMenuClose}
                >
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink"
                  to="/user/home"
                  onClick={setMenuClose}
                >
                  Home
                </NavLink>
              </li>
              <li onClick={userLogout}>
                <NavLink className="navLink" to="#">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
          <Search menuState={menuOpen} />
        </nav>
      </div>
      {logout ? (
        <div className="logoutAlert">
          <div className="logoutAlertText">
            Are you sure you want to logout ?
          </div>
          <div className="logoutOptions">
            <div className="logoutConfirm" onClick={logoutCall}>
              confirm
            </div>
            <div className="logoutCancel" onClick={userLogutCancel}>
              cancel
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={`${menuOpen ? "blur" : ""}`} onClick={setMenuClose}>
        <div className={menuOpen ? "disable-home" : ""}>
          <Outlet />
        </div>
      </div>
      <div className="footer">
        <div className="middle-footer-content">
          <img
            className="recorder-icon"
            src={recorderIcon}
            alt="icon"
            loading="lazy"
          ></img>
          movies<span className="moviesforyou">4u</span>Now
        </div>
        <div className="bottom-footer-content">
          <span>
            <NavLink className="bottom-footer-link" to="/termsandprivacy">
              Terms and privacy notice
            </NavLink>
          </span>
          {"   "}
          <span>
            <NavLink className="bottom-footer-link" to="/sendusfeedback">
              Send us feedback
            </NavLink>
          </span>
          {"   "}
          <span>
            <NavLink className="bottom-footer-link" to="/help">
              help
            </NavLink>
          </span>
          <span style={{ color: "rgb(138, 138, 138)", marginLeft: "10px" }}>
            © 2024-2024, movies4unow.online, inc. or its affiliates
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
