import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const handleRating = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };
  console.log(rating);
  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={handleRating}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
      />
    </Stack>
  );
};

export default MuiRating;
