import React from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const NoResults = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <WarningAmberIcon color="error" sx={{ fontSize: 48 }} />
      <p className="text-lg max-w-xs text-center">
        No movie found. Try searching by another name or changing the minimum
        rating.
      </p>
    </div>
  );
};

export default NoResults;
