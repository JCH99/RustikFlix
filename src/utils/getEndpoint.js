const API_KEY = process.env.REACT_APP_API_KEY;

const getEndpoint = (query) => {
  if (query === "") {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  } else {
    const encodedQuery = encodeURIComponent(query);
    return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodedQuery}`;
  }
};

export default getEndpoint;
