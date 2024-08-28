import React, { useEffect, useState } from "react";
import { useAccordionButton } from "react-bootstrap";
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
      <div className="account-container-header">Account Details</div><br></br>
      <div>
        Username: {accountDetails ? accountDetails.UserName : "loading..."}
      </div>
      <div>
        First name: {accountDetails ? accountDetails.FirstName : "loading..."}
      </div>
      <div>
        Last name: {accountDetails ? accountDetails.LastName : "loading..."}
      </div>
      <div>Email: {accountDetails ? accountDetails.EmailId : "loading..."}</div>
      <div>
        Country: {accountDetails ? accountDetails.Country : "loading..."}
      </div>
      <div>City: {accountDetails ? accountDetails.City : "loading..."}</div>
      <div>
        Pincode: {accountDetails ? accountDetails.PinCode : "loading..."}
      </div>
    </div>
  );
};

export default Account;
