import React from 'react';
import "./HamburgerMenuGenre.css";
import menuIcon from "../assets/menuIcon.png";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import AllDataContextProvider from "../context/AllDataContextProvider";
import AllDataContext from "../context/AllDataContext";
import { useState,useContext } from 'react';
import { use } from 'react';


function HamburgerMenuGenre({menuState, setMenuOpen}) {
  
  const { allGenreDataContext, setAllGenreDataContext } = useContext(AllDataContext);
  const [isHovered, setisHovered] = useState(false);

  const handelMouseEnter = () => {
    setisHovered(true);
  };
  const handelMouseLeave = () => {
    setisHovered(false);
  };
 
  return (
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
      <div className={`genreBtn${menuState ? "-blur" : ""}`}>Genre</div>
      {isHovered & !menuState ? (
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
  )
}

export default HamburgerMenuGenre