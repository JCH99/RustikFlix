import React, { useState } from "react";

const BASE_API_URL = "https://image.tmdb.org/t/p/w500";

const Movie = (props) => {
  const [hover, setHover] = useState(false);

  const hoverHandler = () => setHover(true);
  const leaveHoverHandler = () => setHover(false);

  const { movie } = props;
  return (
    <li
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHoverHandler}
      className="w-60 shadow-xl rounded-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
    >
      <img
        src={`${BASE_API_URL}${movie.poster_path}`}
        alt={`"${movie.title}" movie poster`}
      />
      <span
        className={`absolute inset-0 bg-black bg-opacity-60 text-white flex justify-center items-center text-center text-xl font-bold transition-opacity ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        {movie.title}
      </span>
    </li>
  );
};

export default Movie;
