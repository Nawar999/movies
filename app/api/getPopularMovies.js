export default async function getPopularMovies() {
  const url = "https://imdb188.p.rapidapi.com/api/v1/getPopularMovies";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "1e9005b023msh94f9add9e6a6e78p161513jsncc898d151512",
      "x-rapidapi-host": "imdb188.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: {
      country: {
        anyPrimaryCountries: ["IN"],
      },
      limit: 10,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
