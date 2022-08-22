import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const MovieRating = (props) => {
  const { rating } = props;
  let color;
  if (rating > 70) {
    color = "success";
  } else if (rating > 50) {
    color = "warning";
  } else {
    color = "error";
  }
  return (
    <div className="relative inline-flex">
      <CircularProgress
        variant="determinate"
        value={rating}
        color={color}
        size={60}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p variant="caption" component="div" color="text.secondary">
          {`${Math.round(rating)}%`}
        </p>
      </div>
    </div>
  );
};

export default MovieRating;
