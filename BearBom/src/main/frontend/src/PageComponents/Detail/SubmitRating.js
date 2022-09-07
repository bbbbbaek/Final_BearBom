import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function SubmitRating({ addReviewInfo }) {
  const [rating, setRating] = React.useState(0);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    addReviewInfo(e);
  };

  return (
    <Stack spacing={1}>
      <Rating
        name="courserRate"
        precision={1}
        size="large"
        value={rating}
        onChange={handleRatingChange}
      />
    </Stack>
  );
}
