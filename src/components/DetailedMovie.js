import React, { useContext } from "react";
import { GenresContext } from "../context/GenresContextProvider";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailedMovie = (props) => {
  const { open, closeDetailHandler, movie } = props;
  const { getGenre } = useContext(GenresContext);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={closeDetailHandler}
      aria-describedby="detailed-movie-modal"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDetailHandler}>Disagree</Button>
        <Button onClick={closeDetailHandler}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailedMovie;
