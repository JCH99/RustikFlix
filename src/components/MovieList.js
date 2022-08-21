import React from "react";
import Movie from "./Movie";
import NoResults from "./NoResults";
import Skeletons from "./Skeletons";

const MovieList = (props) => {
  const { loading, movies } = props;
  const LIST_CSS =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-12";

  if (loading) {
    return (
      <ul className={LIST_CSS}>
        <Skeletons amount={12} />
      </ul>
    );
  }

  return (
    <>
      {movies.length > 0 ? (
        <ul className={LIST_CSS}>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </ul>
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default MovieList;
