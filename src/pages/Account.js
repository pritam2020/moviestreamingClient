import React, { useEffect, useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import editIcon from "../assets/icons8-edit-48.png"
import "./Account.css";

const Account = () => {
  const [accountDetails, setAccountDetails] = useState("");

  useEffect(() => {
    const fetchAccountData = () => {
      const accoutRequest = fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/protected-route/clientaccount`,
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("error fetching data for account details");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          const FirstName = data.FirstName;
          data.FirstName =
            FirstName.charAt(0).toUpperCase() + FirstName.slice(1);
          setAccountDetails(data);
          // console.log("account details:", data);
        })
        .catch((error) => console.log(error.message));
    };

    const checkSession = async () => {
      const session = await fetch(
        `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/checksession`,
        { credentials: "include" }
      );
      const sessionData = await session.json();
      console.log(session.ok, sessionData.loggedin);
      if (session.ok && sessionData.loggedin) {
        fetchAccountData();
      } else {
        navigate("/");
      }
    };
    checkSession();
  }, []);

  return (
    <div className="account-container">
      <div className="account-container-header">Account Details</div>
      <br></br>
      <div className="account-info-container">
        <div className="user-name-container">
          <div className="account-info-label"> Username:</div>
          <div className="account-info-value">
          {accountDetails
              ? accountDetails.UserName
                ? accountDetails.UserName
                : "**no username set**"
              : "loading..."}<img  className ="edit-account-info-button" src={editIcon} />
          </div>
        </div>
        <div className="first-name-container">
          <div className="account-info-label">First name: </div>
          <div className="account-info-value">
          {accountDetails
              ? accountDetails.FirstName
                ? accountDetails.FirstName
                : "**no first name set**"
              : "loading..."}<img  className ="edit-account-info-button" src={editIcon} />
          </div>
        </div>
        <div className="last-name-container">
          <div className="account-info-label"> Last name: </div>
          <div className="account-info-value">
          {accountDetails
              ? accountDetails.LastName
                ? accountDetails.LastName
                : "**no last name set**"
              : "loading..."}<img  className ="edit-account-info-button" src={editIcon} />
          </div>
        </div>
        <div className="email-container">
          <div className="account-info-label"> Email:</div>
          <div className="account-info-value">
          {accountDetails
              ? accountDetails.EmailId
                ? accountDetails.EmailId
                : "**no email set**"
              : "loading..."}<img  className ="edit-account-info-button" src={editIcon}/>
          </div>
        </div>
        <div className="country-container">
          <div className="account-info-label"> Country: </div>
          <div className="account-info-value">
            {accountDetails
              ? accountDetails.Country
                ? accountDetails.Country
                : "**no country set**"
              : "loading..."} <img  className ="edit-account-info-button" src={editIcon} />
          </div>
        </div>
        <div className="city-container">
          <div className="account-info-label">City:</div>
          <div className="account-info-value">
            {accountDetails
              ? accountDetails.City
                ? accountDetails.City
                : "**no city set**"
              : "loading..."}<img  className ="edit-account-info-button" src={editIcon}/>
          </div>
        </div>
        <div className="pincode-container">
          <div className="account-info-label"> Pincode: </div>
          <div className="account-info-value">
            {accountDetails
              ? accountDetails.PinCode
                ? accountDetails.PinCode
                : "**no pincode set**"
              : "loading..."}<img  className ="edit-account-info-button" src={editIcon} />
          </div>
        </div>
      </div>
      <div>
        <a className="change-password" href="#" >
          reset password ?
        </a>
        <span style={{ fontStyle: "normal",color:"#7c7c7c" }}> or </span>
        <a className="change-password" href="#" >
          forgot password ?
        </a>
      </div>
      <div className="account-page-buttons">
        <button className="account-info-save-button">save changes</button>
        <button className="account-info-delete-account-button">
          delete account
        </button>
      </div>
    </div>
  );
};

export default Account;
