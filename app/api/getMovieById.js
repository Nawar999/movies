export const getMovieById = async (id) => {
  const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1e9005b023msh94f9add9e6a6e78p161513jsncc898d151512",
      "x-rapidapi-host": "imdb188.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
