import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [passwordCheck, setPasswordCheck] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const session = await fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/checksession`,
        { credentials: "include" }
      );
      const sessionData = await session.json();
      console.log(session.ok, sessionData.loggedin);
      if (session.ok && sessionData.loggedin) {
        navigate("/user/home");
      }
    };
    checkSession();
  }, []);

  const signUp = (e) => {
    e.preventDefault();
    //console.log(JSON.parse(e.target))
    if (e.target.password.value === e.target.confirmPassword.value) {
      setPasswordCheck(true);
      fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/clientsignup`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Username: e.target.username.value,
            Password: e.target.password.value,
            EmailId: e.target.email.value,
            FirstName: e.target.firstName.value,
            LastName: e.target.lastName.value,
            Country: e.target.country.value ? e.target.country.value : "",
            City: e.target.city.value ? e.target.city.value : "",
            PinCod: e.target.pincode.value ? e.target.pincode.value : "",
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("error in signing up...");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          navigate("/user/home");
        });
    } else {
      setPasswordCheck(false);
      console.log("password donot match");
    }
  };

  return (
    <div className="signup-container">
      <h1 style={{textAlign:'center',padding:"20px"}}>Register</h1>
      <div  className="signup-form-outline">
        <form className="signup-form" onSubmit={signUp}>
          <div>
          <label for="username">Username </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required
          />
          </div>
          <div>
          <label for="firstName">first name </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="first name"
            required
          />
          </div>
          <div>
          <label for="lastName">last name </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="last name"
            required
          />
          </div>
          <div>
          <label for="email">email </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
          </div>
          <div>
          <label for="country">country </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="country"
          />
          </div>
          <div>
          <label for="city">city </label>
          <input type="text" id="city" name="city" placeholder="city" />
          <label for="pincode">pincode </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="pincode"
          />
          </div>
          <div>
          <label for="password">password </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          </div>
          <div>
          <label for="confirmPassword"> confirm password </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="re-type password"
            required
          />
          </div>
          <br />
          <input className="submit-button" type="submit" />
        </form>
        {!passwordCheck && (
          <div className="passwordCheckAlert">password do not match</div>
        )}
      </div>
    </div>
  );
};

export default Signup;
