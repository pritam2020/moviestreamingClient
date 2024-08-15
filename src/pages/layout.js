import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./layout.css";
import searchIcon from "../assets/searchIcon.png";
import menuIcon from "../assets/menuIcon.png";
import cancelIcon from "../assets/cancelIcon.png";

const Layout = () => {
  const navigate=useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);
  const [isHovered, setisHovered] = useState(false);
  const [logout, setLogout] = useState(false);
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

  const userLogout =()=>{
    setLogout(true);
  }
  const userLogutCancel=()=>{
    setLogout(false);
  }
  const logoutCall =async ()=>{
    try {
        const logoutRequest=await fetch(`https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/clientlogout`,{credentials:"include"});
        if(logoutRequest.ok){
          const data=await logoutRequest.json();
          console.log("logout successfull\n"+JSON.stringify(data));
          navigate('/');
        }else{
          console.log("err in logging out ....")
        }
       
    }catch(err){
      alert(err)
    }
  }
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
            <div className={`genreBtn${menuOpen?'-blur':''}`}>Genre</div>
            {isHovered && (
              <div className="genreList">
                {" "}
                <ul>
                  <li>
                    <NavLink className="genreNavLink">Sci-fi</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Horror</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Comedy</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Drama</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Romance</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Documentsry</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Adventure</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Award-winning</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">fantasy</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">fantasy</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Thriller</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">War</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Mystery</NavLink>
                  </li>
                  <li>
                    <NavLink className="genreNavLink">Biograpny</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={`hamburgerMenu${menuOpen ? "-active" : ""}`}>
          <div>
            <img className="cancelIcon" src={cancelIcon} onClick={setMenuClose} />
          </div>
          <ul className="hamburgerMenuList">
            <li>
              <NavLink className="navLink" to="/user/account" onClick={setMenuClose}>
                Account
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/user/home" onClick={setMenuClose}>
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

        <div className={`searchBtn${menuOpen ? '-blur':''}`}>
          <input
            type="search"
            className="searchInput"
            placeholder="Serach..."
          />
          <img className="searchIcon" src={searchIcon}></img>
        </div>
      </nav>
      {logout?(<div className="logoutAlert">
        <div className="logoutAlertText">Are you sure you want to logout ?</div>
        <div className="logoutOptions">
            <div className="logoutConfirm" onClick={logoutCall}>confirm</div>
            <div className="logoutCancel" onClick={userLogutCancel}>cancel</div>

        </div>
      </div>):""}
      
      <div className={`${menuOpen ? "blur" : ""}`} onClick={setMenuClose}>
        <Outlet className="outlet" />
      </div>
      <div>Common footer</div>
    </div>
  );
};

export default Layout;
