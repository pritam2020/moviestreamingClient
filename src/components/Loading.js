import React from "react";
import { Oval } from "react-loader-spinner";
import "./Loading.css"

function Loading() {
  return (
    <div className="loading-container">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#ffffff"
        secondaryColor="#000000"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth="4"
      />
    </div>
  );
}

export default Loading;
