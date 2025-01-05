const fetchbyGenre = async (genre) => {
  try {
    //---------------------------------------------------------authentication----------------------------
    const baseServerUrl = `https://${process.env.API_SERVER}:${process.env.API_SERVER_PORT}`;
    const response = await fetch(`${baseServerUrl}/protected-route/moviedetails/${genre}/`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("response is not okay");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}



const fetchAllGenre = async () => {
  try {
    const fetchedData = await Promise.all([
      await fetchbyGenre("comedy"),
      await fetchbyGenre("romance"),
      await fetchbyGenre("war"),
      await fetchbyGenre("thriller"),
      await fetchbyGenre("fantasy"),
      await fetchbyGenre("horror"),
      await fetchbyGenre("action"),
      await fetchbyGenre("adventure"),
      await fetchbyGenre("mystery"),
      await fetchbyGenre("documentary"),
      await fetchbyGenre("biography"),
      await fetchbyGenre("drama"),
      await fetchbyGenre("awardwinning"),
      await fetchbyGenre("scifi"),
    ]);
      return fetchedData;
    
  } catch (error) {
    console.log(error);
    return error;
  }
};
export { fetchAllGenre , fetchbyGenre};