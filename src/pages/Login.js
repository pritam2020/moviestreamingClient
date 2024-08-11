// import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/clientlogin`,
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
      
      if(loginRequest.ok){
        navigate('/user/home');
      }else{
        const data=await loginRequest.json();
        alert(JSON.stringify(data));
      }
      
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(
      `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/checksession`
    )
      .then((response) => {
        if (!response.ok) {
          throw new error("error in session checking");
        } else {
          return response.json();
        }
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      })
  
  }, []
);
    

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
