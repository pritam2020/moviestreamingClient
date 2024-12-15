import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [passwordCheck, setPasswordCheck] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const session = await fetch(
        `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/checksession`,
        { credentials: "include" }
      );
      const sessionData = await session.json();
      if (session.ok && sessionData.loggedin) {
        navigate("/user/home");
      }
    };
    checkSession();
  }, []);

  const signUp = (e) => {
    e.preventDefault();
    if (e.target.password.value === e.target.confirmPassword.value) {
      setPasswordCheck(true);
      fetch(
        `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}/clientsignup`,
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
            Country: e.target.country.value || "",
            City: e.target.city.value || "",
            PinCod: e.target.pincode.value || "",
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
      console.log("password do not match");
    }
  };

  return (
    <div className="signup-container">
      <h1 style={{ textAlign: 'center', padding: "20px" }}>Register</h1>
      <div className="signup-form-outline">
        <form className="signup-form" onSubmit={signUp}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
            />
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Pincode"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-type password"
              required
            />
          </div>
          <br />
          <input className="submit-button" type="submit" value="Sign Up" />
        </form>
        {!passwordCheck && (
          <div className="passwordCheckAlert">Passwords do not match</div>
        )}
        <div className="login-link">
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
