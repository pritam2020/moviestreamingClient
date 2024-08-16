import React, { useContext, useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./layout.css";
import searchIcon from "../assets/searchIcon.png";
import menuIcon from "../assets/menuIcon.png";
import cancelIcon from "../assets/cancelIcon.png";
import AllDataContextProvider from "../context/AllDataContextProvider";
import AllDataContext from "../context/AllDataContext";

const Layout = () => {
  const navigate = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);
  const [isHovered, setisHovered] = useState(false);
  const [logout, setLogout] = useState(false);
  const { allData, setAllData } = useContext(AllDataContext);
  const [searchParam, setSearchParam] = useState(null);

  if (allData) {
    console.log("rendering data from layout: ", allData);
  }
  const search = () => {
    console.log("search parameter: ", searchParam);
    fetch(
      `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/moviedetails/search?SearchQuery=${searchParam}`,
      {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    ).then((response)=>{
      if(!response.ok){
        throw new Error("error while fetching search results");
      }else{
        return response.json();
      }
    }).then((data)=>{
        navigate("/user/allmovies",{state:{genre:"",data:data}})
    });
  };
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
    <div className="layoutContainer">
      <nav className="header">
        <div style={{ display: "flex", justifyContent: "space-beteen" }}>
          <img
            className="hamburgerMenuIcon"
            src={menuIcon}
            onClick={setMenuOpen}
          />
          <div
            style={{ marginLeft: "150px", position: "relative" }}
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
          >
            <div className={`genreBtn${menuOpen ? "-blur" : ""}`}>Genre</div>
            {isHovered && (
              <div className="genreList">
                {" "}
                <ul>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Scifi", data: allData[13] }}
                      onClick={handelMouseLeave}
                    >
                      Sci-fi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Horror", data: allData[5] }}
                      onClick={handelMouseLeave}
                    >
                      Horror
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Comedy", data: allData[0] }}
                      onClick={handelMouseLeave}
                    >
                      Comedy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Drama", data: allData[11] }}
                      onClick={handelMouseLeave}
                    >
                      Drama
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Romance", data: allData[1] }}
                      onClick={handelMouseLeave}
                    >
                      Romance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Documentary", data: allData[9] }}
                      onClick={handelMouseLeave}
                    >
                      Documentary
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Adventure", data: allData[7] }}
                      onClick={handelMouseLeave}
                    >
                      Adventure
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Award-winning", data: allData[12] }}
                      onClick={handelMouseLeave}
                    >
                      Award-winning
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Fantasy", data: allData[4] }}
                      onClick={handelMouseLeave}
                    >
                      fantasy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Thriller", data: allData[3] }}
                      onClick={handelMouseLeave}
                    >
                      Thriller
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "War", data: allData[2] }}
                      onClick={handelMouseLeave}
                    >
                      War
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Mystery", data: allData[8] }}
                      onClick={handelMouseLeave}
                    >
                      Mystery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="genreNavLink"
                      to="/user/allmovies"
                      state={{ genre: "Biography", data: allData[10] }}
                      onClick={handelMouseLeave}
                    >
                      Biograpny
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={`hamburgerMenu${menuOpen ? "-active" : ""}`}>
          <div>
            <img
              className="cancelIcon"
              src={cancelIcon}
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

        <div className={`searchBtn${menuOpen ? "-blur" : ""}`}>
          <input
            type="search"
            className="searchInput"
            placeholder="Serach..."
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <img className="searchIcon" src={searchIcon} onClick={search}></img>
        </div>
      </nav>
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
        <Outlet className="outlet" />
      </div>
      <div>Common footer</div>
    </div>
  );
};

export default Layout;
