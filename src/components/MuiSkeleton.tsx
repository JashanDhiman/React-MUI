import { Skeleton, Stack } from "@mui/material";
import React from "react";

const MuiSkeleton = () => {
  return (
    <Stack>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
      <Skeleton variant="rectangular" width={250} height={125} animation="wave" />
    </Stack>
  );
};

export default MuiSkeleton;
