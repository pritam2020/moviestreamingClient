import React,{useEffect, useState} from "react";
import "./Search.css";
import { useNavigate} from "react-router-dom";
import searchIcon from "../assets/searchIcon.png";


const Search = ({menuState}) => {
  const [searchParam, setSearchParam] = useState(null);
  const [menuOpen,setMenuOpen]=useState(false)
  const navigate=useNavigate();

 useEffect(()=>{
  
    setMenuOpen(menuState)
  
 },[menuState])
  
  const search = () => {
    //console.log("search parameter: ", searchParam);
    fetch(
      `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/moviedetails/search?SearchQuery=${searchParam}`,
      {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("error while fetching search results");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        navigate("/user/allmovies", { state: { genre: "", data: data } });
      });
  };
 // console.log("menu state from search.js",menuState)
  //console.log("menu state from search.js state variable",menuOpen)
  return (
    <div className={`searchBtn${menuOpen ? "-blur" : ""}`} onSubmit={search}>
      <input
        type="search"
        className="searchInput"
        placeholder="Serach..."
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <img className="searchIcon" src={searchIcon} onClick={search}></img>
    </div>
  );
};

export default Search;
