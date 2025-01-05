import React, { useContext, useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./LLayout.css";
import menuIcon from "../assets/menuIcon.png";
import cancelIcon from "../assets/cancelIcon.png";
import AllDataContext from "../context/AllDataContext";
import Search from "../components/Search";
import recorderIcon from "../assets/icons8-recorder-64.png";
import HamburgerMenuGenre from "../components/HamburgerMenuGenre";
import { fetchAllGenre } from "../utils/fetchAllGenre";

const Layout = () => {
  const navigate = useNavigate();
  const [menuState, setmenuState] = useState(false);
  const [logoutstate, setLogoutstate] = useState(false);
  const { allGenreDataContext, setAllGenreDataContext } = useContext(AllDataContext)

  const setMenuOpen = () => {
    setmenuState(true);
  };
  const setMenuClose = () => {
    setmenuState(false);
  };
  const openLogoutDialogue = () => {
    setLogoutstate(true);
  };
  const closeLogoutDialogue = () => {
    setLogoutstate(false);
    setmenuState(false);
  };
  const logout = async () => {
    try {
      const logoutRequest = await fetch(
        `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/user/protected-route/logout`,
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

  useEffect(() => {
    const setContext = async () => {
      try {
        const alldata = await fetchAllGenre();
        setAllGenreDataContext(alldata);
      } catch (err) {
        console.log(err)
      }

    }
    setContext()


  },[])
  return (
    <div className="rootHeaderContainer">
      <div className="headerContainer">
        <nav className="header">
          <HamburgerMenuGenre menuState={menuState} setMenuOpen={setMenuOpen} />

          <div className={`hamburgerMenu${menuState ? "-active" : ""}`} onClick={() => { if (logoutstate) { closeLogoutDialogue() } }}>
            <div className={logoutstate ? "blur" : ""}>
              <img
                className="cancelIcon"
                loading="lazy"
                src={cancelIcon}
                alt="cancel"
                onClick={setMenuClose}
              />
            </div>
            <div className={logoutstate ? "blur" : ""}>
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
                <li onClick={openLogoutDialogue}>
                  <NavLink className="navLink" to="#">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Search menuState={menuState} />
        </nav>
      </div>



      {logoutstate ? (
        <div className="logoutAlert">
          <div className="logoutAlertText">
            Are you sure you want to logout ?
          </div>
          <div className="logoutOptions">
            <div className="logoutConfirm" onClick={logout}>
              confirm
            </div>
            <div className="logoutCancel" onClick={closeLogoutDialogue}>
              cancel
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={`${menuState ? "blur" : ""}`} onClick={closeLogoutDialogue}>
        <div className={menuState ? "disable-home" : ""}>
          <Outlet />
        </div>
      </div>


      <div className={`${menuState ? "blur" : ""}`}>
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
              <NavLink
                className="bottom-footer-link footer-text"
                to="/termsandprivacy"
              >
                Terms and privacy notice
              </NavLink>
            </span>
            {"   "}
            <span>
              <NavLink
                className="bottom-footer-link footer-text"
                to="/sendusfeedback"
              >
                Send us feedback
              </NavLink>
            </span>
            {"   "}
            <span>
              <NavLink className="bottom-footer-link  footer-text" to="/help">
                help
              </NavLink>
            </span>
            {window.innerWidth <= 480 ? (

              <div
                className="footer-text"
                style={{ color: "rgb(138, 138, 138)", marginLeft: "10px" }}
              >
                © 2024-2024, movies4unow.online, inc. or its affiliates
              </div>

            ) : (
              <span
                className="footer-text"
                style={{ color: "rgb(138, 138, 138)", marginLeft: "10px" }}
              >
                © 2024-2024, movies4unow.online, inc. or its affiliates
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
