import Rating from "@mui/material/Rating";
import React from "react";

function RatingSelector(props) {
  const { rating, handleRatingChange } = props;
  return (
    <div className="flex flex-col items-center">
      <h3>Filter by rating:</h3>
      <Rating
        name="rating-selector"
        precision={0.5}
        value={rating}
        onChange={handleRatingChange}
        size="large"
      />
    </div>
  );
}

export default RatingSelector;
