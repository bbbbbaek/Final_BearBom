import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Review from "./Detail-Review";

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function feedback(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating(review) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState();

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="caption" display="block" gutterBottom>
        {/* rating:{review.courserRate} */}
      </Typography>
      <Rating
        name="hover-feedback"
        value={review.courserRate}
        precision={1}
        //   getLabelText={feedback}
        //   onChange={(event, newValue) => {
        //     setValue(newValue);
        //   }}
        //   onChangeActive={(event, newHover) => {
        //     setHover(newHover);
        //   }}
        //   emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {/*  // {courserRate !== null && (
      //   <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : courserRate]}</Box>
      // )} */}
    </Box>
  );
}
