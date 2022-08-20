const getFilteredMovies = (movies, rating) => {
  const convertedRating = rating * 2;
  const filteredMovies = movies.filter(
    (movie) => movie.vote_average >= convertedRating
  );
  return filteredMovies;
};

export default getFilteredMovies;
