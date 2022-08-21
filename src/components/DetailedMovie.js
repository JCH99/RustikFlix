import React, { useContext } from "react";
import { GenresContext } from "../context/GenresContextProvider";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MovieRating from "./MovieRating";
import GroupsIcon from "@mui/icons-material/Groups";
import Chip from "@mui/material/Chip";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import ExplicitIcon from "@mui/icons-material/Explicit";

const BASE_IMG_API_URL = "https://image.tmdb.org/t/p/w500";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailedMovie = (props) => {
  const { open, closeDetailHandler, movie } = props;
  const { getGenre } = useContext(GenresContext);

  const genreList = movie.genre_ids
    .map((id) => {
      const genre = getGenre(id);
      if (genre !== undefined) {
        return genre.name;
      } else {
        return undefined;
      }
    })
    .filter((genre) => genre !== undefined);

  console.log(movie);
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={closeDetailHandler}
      aria-describedby="detailed-movie-modal"
    >
      <div className="w-full relative">
        <IconButton
          onClick={closeDetailHandler}
          className="absolute right-0 top-0 text-white bg-black bg-opacity-70 transform rounded-t-none rounded-r-none"
        >
          <CloseIcon color="inherit" />
        </IconButton>

        {movie.backdrop_path && (
          <img
            className="w-full"
            src={`${BASE_IMG_API_URL}${movie.backdrop_path}`}
            alt={`"${movie.title}" movie poster`}
          />
        )}
      </div>

      <DialogTitle>{movie.title}</DialogTitle>
      <DialogContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MovieRating rating={movie.vote_average * 10} />
            <p className="flex flex-col">
              <span>User</span>
              <span>Score</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <GroupsIcon fontSize="large" />
            <p>
              <span className="font-bold">{movie.vote_count}</span> votes
            </p>
          </div>
        </div>
        <div className="sm:flex items-center sm:space-x-2">
          <h3 className="font-bold">Genres:</h3>
          <div className="flex space-x-0 items-start space-y-1 flex-wrap flex-col sm:space-x-1 sm:flex-row sm:space-y-0">
            {genreList.map((genre) => (
              <Chip label={genre} variant="outlined" />
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <h3 className="font-bold">Public:</h3>
          <div className="flex items-center space-x-1 text-sm">
            {movie.adult ? (
              <>
                <ExplicitIcon fontSize="large" color="secondary" />
                <p>Adults</p>
              </>
            ) : (
              <>
                <EscalatorWarningIcon fontSize="large" color="primary" />
                <p>Everyone</p>
              </>
            )}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Overview:</h3>
          <p>{movie.overview}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailedMovie;
