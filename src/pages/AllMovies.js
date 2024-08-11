import React from "react";
import { useLocation } from "react-router-dom";

const AllMovies = () => {
    const location = useLocation();
    const { genre } = location.state || {};
    // console.log(location.state)
    // console.log("genre: " + genre)
    return (
        <div><h1>{genre} hello</h1></div>
    )
}
export default AllMovies