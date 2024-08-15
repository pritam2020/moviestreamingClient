import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Streaming from "./pages/Streamming";
import Layout from "./pages/layout";
import AllMovies from "./pages/AllMovies";
import Account from "./pages/Account"

function App() {
    return (
        <div className="app">
            <Router>

                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/signup"  element={<Signup/>} />
                    <Route path="/user"  element={<Layout/>}>
                        <Route path="home" element={<Home/>} />
                        <Route path="Streamming" element={<Streaming/>} />
                        <Route path="allmovies"  element={<AllMovies/>} />
                        <Route path="account" element={<Account/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
