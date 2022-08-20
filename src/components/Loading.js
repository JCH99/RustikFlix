import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <CircularProgress />
      <span>Loading results...</span>
    </div>
  );
};

export default Loading;
