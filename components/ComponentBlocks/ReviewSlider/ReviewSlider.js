import {
  H1Black,
  H1White,
  H4Black,
  H4White,
  colors,
  medWrapper,
} from "@/styles/helpers";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 10000,
  centerPadding: "150px",
  centerMode: true,
  infinite: true,
  arrows: true,
  dots: true,
  adaptiveHeight: false,
};

const ReviewSlider = ({ reviews, data }) => {
  console.log("ReviewSlider: ", reviews);

  if (!data.displayReviewSlider) return null;

  return (
    <StyledSection>
      <div className="wrapper">
        <Slider className="slider" {...settings}>
          {reviews.map((review, index) => {
            console.log("review: ", review);
            return (
              <ReviewSlide key={index}>
                <div className="review-image">
                  <Image
                    alt={review.reviewsContent.featuredImage.altText}
                    src={review.reviewsContent.featuredImage.sourceUrl}
                    className=""
                    height={500}
                    width={500}
                  />
                </div>
                <h1>{review.title}</h1>
              </ReviewSlide>
            );
          })}
        </Slider>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: ${colors.colorPrimary};
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .slider {
    width: 80%;
    margin-right: auto;
    margin-left: 20%;
  }
`;

const ReviewSlide = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  .review-image {
    padding: 0 5rem;
  }

  h1 {
    ${H4White};
  }
`;

export default ReviewSlider;
