// import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import googleSearchIcon from "../assets/google-search.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here, e.g., API call
    console.log("Username:", username);
    console.log("Password:", password);
    loginCall(username, password);
  };

  const loginCall = async (username, password) => {
    try {
      const loginRequest = await fetch(
        `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/user/login`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (loginRequest.ok) {
        navigate("/user/home", { replace: true });
      } else {
        const data = await loginRequest.json();
        setErrorAlert(JSON.stringify(data));
      }
    } catch (error) {
      setErrorAlert(error);
      console.log(error);
    }
  };

  const googleLogin = async () => {
    window.location.href=`https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/user/clientgooglelogin/federated/google`;
  }

  useEffect(() => {

    fetch(
      `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/checksession`,
      { credentials: "include" }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("error in session checking");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data.loggedin) {
          navigate("/user/home");
        }
      })
      .catch((error) => {
        setErrorAlert(error.message);

        //console.log(error);
        console.log(errorAlert);
      });
  }, []);
  console.log("in login page")
  return (
    <div className="login-container">
      <div className="form-outline">
        <h1 className="heading">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="username-container">
            <label htmlFor="username">Username</label>
            <input
              className="username-input"
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Please enter username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              className="password-input"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Please enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="horizontal-line-container"><div className="horizontal-line" />
          <span>or</span>
          <div className="horizontal-line" />
        </div>
        <div className="google-login-button" onClick={googleLogin}>
          login with
          <img src={googleSearchIcon} />
        </div>

        <div className="signup-request-container">
          <div className="signupText-container">
            <span className="signupText">Are you new? </span>
            <NavLink className="signupLink" to="/signup">
              <span className="signupRedirect">Sign Up</span>
            </NavLink>
          </div>
        </div>

        {errorAlert && (
          <div className="error-container">
            <div className="errorDisplay">{JSON.stringify(errorAlert)}</div>
          </div>
        )}
      </div>
    </div>

  );
};

export default Login;
