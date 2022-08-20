import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  const { movies } = props;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-12">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
