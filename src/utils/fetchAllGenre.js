const fetchAllGenre = async ()=>{
    try{
        //---------------------------------------------------------authentication----------------------------
        const baseServerUrl = `https://${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}`;

        //-----------------------------------------------comedy--------------------------------------------
        const comedyResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/comedy/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //----------------------------------comedy-----------------------------------------------------

        //-----------------------------------------------romance--------------------------------------------
        const romanceResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/romance/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------romance-----------------------------------------------------

        //-----------------------------------------------war--------------------------------------------
        const warResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/war/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //----------------------------------war-----------------------------------------------------

        //-----------------------------------------------thriller--------------------------------------------
        const thrillerResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/thriller/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------thriller-----------------------------------------------------

        //-----------------------------------------------fantasy--------------------------------------------
        const fantasyResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/fantasy/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------fantasy-----------------------------------------------------

        //-----------------------------------------------horror--------------------------------------------
        const horrorResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/horror/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------horror-----------------------------------------------------

        //-----------------------------------------------action--------------------------------------------
        const actionResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/action/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------action-----------------------------------------------------

        //-----------------------------------------------adventure--------------------------------------------
        const adventureResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/adventure/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------adventure-----------------------------------------------------

        //-----------------------------------------------mystery--------------------------------------------
        const mysteryResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/mystery/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------mystery-----------------------------------------------------

        //-----------------------------------------------documentary--------------------------------------------
        const documentaryResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/documentary/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------documentary-----------------------------------------------------

        //-----------------------------------------------biography--------------------------------------------
        const biographyResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/biography/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------biography-----------------------------------------------------

        //-----------------------------------------------drama--------------------------------------------
        const dramaResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/drama/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------drama-----------------------------------------------------

        //-----------------------------------------------award-winning--------------------------------------------
        const awardwinningResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/awardwinning/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //----------------------------------award-winning-----------------------------------------------------

        //-----------------------------------------------scifi--------------------------------------------
        const scifiResponse = fetch(
          `${baseServerUrl}/protected-route/moviedetails/scifi/`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const fetchedData = await Promise.all([
          comedyResponse,
          romanceResponse,
          warResponse,
          thrillerResponse,
          fantasyResponse,
          horrorResponse,
          actionResponse,
          adventureResponse,
          mysteryResponse,
          documentaryResponse,
          biographyResponse,
          dramaResponse,
          awardwinningResponse,
          scifiResponse,
        ]);
        return fetchedData
    }
catch(error){
    console.log(error);
    return error
}

}
export {fetchAllGenre}