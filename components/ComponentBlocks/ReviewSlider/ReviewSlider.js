import React from "react";

const ReviewSlider = ({ reviews, data }) => {
  console.log("ReviewSlider: ", reviews);

  if (!data.displayReviewSlider) return null;
  return (
    <div>
      <h1>ReviewSlider</h1>
    </div>
  );
};

export default ReviewSlider;
