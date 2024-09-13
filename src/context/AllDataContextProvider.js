import React, { useState } from "react";
import AllDataContext from "./AllDataContext";

const AllDataContextProvider =({children})=>{

    const [allData, setAllData]=useState(null);

    return(
        <AllDataContext.Provider value={{allData, setAllData}}>
            {children}
        </AllDataContext.Provider>
    )
}
export default AllDataContextProvider