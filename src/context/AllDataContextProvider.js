import React, { useState } from "react";
import AllDataContext from "./AllDataContext";

const AllDataContextProvider =({children})=>{

    const [allGenreDataContext, setAllGenreDataContext]=useState(null);

    return(
        <AllDataContext.Provider value={{allGenreDataContext, setAllGenreDataContext}}>
            {children}
        </AllDataContext.Provider>
    )
}


export default AllDataContextProvider