import React from "react";
import Skeleton from "@mui/material/Skeleton";

const Skeletons = (props) => {
  const { amount } = props;
  const skeletons = [];

  for (let i = 0; i < amount; i++) {
    skeletons.push(
      <Skeleton
        component="li"
        variant="rectangular"
        width={"15rem"}
        height={"22.5rem"}
        className="shadow-xl rounded-md"
      />
    );
  }

  return skeletons;
};

export default Skeletons;
