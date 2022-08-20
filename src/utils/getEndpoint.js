const getEndpoint = (query = "") => {
  if (query === "") {
    return `https://api.themoviedb.org/3/movie/popular?api_key=b543db599ee5036b05a0f569ca732b00`;
  } else {
    const encodedQuery = encodeURIComponent(query);
    return `https://api.themoviedb.org/3/search/movie?api_key=b543db599ee5036b05a0f569ca732b00&language=en-US&query=${encodedQuery}`;
  }
};

export default getEndpoint;
