import React, { useState } from "react";
import DetailedMovie from "./DetailedMovie";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";

const BASE_IMG_API_URL = "https://image.tmdb.org/t/p/w500";

const Movie = (props) => {
  const { movie } = props;
  const [hover, setHover] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const openDetailHandler = () => {
    setOpenDetail(true);
  };

  const closeDetailHandler = () => {
    setOpenDetail(false);
  };

  const hoverHandler = () => setHover(true);
  const leaveHoverHandler = () => setHover(false);

  return (
    <>
      <DetailedMovie
        movie={movie}
        open={openDetail}
        closeDetailHandler={closeDetailHandler}
      />
      <li
        onMouseEnter={hoverHandler}
        onMouseLeave={leaveHoverHandler}
        onClick={openDetailHandler}
        className="w-60 h-[22.5rem] shadow-xl rounded-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform flex items-center justify-center"
      >
        {/* <li> with flex to center in case there is no picture" */}
        {movie.poster_path ? (
          <img
            src={`${BASE_IMG_API_URL}${movie.poster_path}`}
            alt={`"${movie.title}" movie poster`}
          />
        ) : (
          <div className="flex flex-col items-center text-center">
            <BrokenImageOutlinedIcon />
            <p>{movie.title}</p>
          </div>
        )}

        <span
          className={`absolute px-1 inset-0 bg-black bg-opacity-60 text-white flex justify-center items-center text-center text-xl font-bold transition-opacity ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          {movie.title}
        </span>
      </li>
    </>
  );
};

export default Movie;
