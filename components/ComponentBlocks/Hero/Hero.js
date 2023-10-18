import { styled } from "styled-components";
import Image from "next/image";

export const Hero = ({ data }) => {
  console.log("data", data);
  return (
    <StyledSection>
      <div className="hero-title">
        <h2>{data.title}</h2>
      </div>
      <div className="hero-bgimage">
        <Image
          alt={data.heroImage.altText}
          src={data.heroImage.sourceUrl}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 40rem;

  .hero-title {
    position: relative;
    z-index: 100;
  }

  .hero-bgimage {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
`;
